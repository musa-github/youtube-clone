import { Avatar } from "@material-ui/core";
import moment from "moment";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import HttpRequest from "../api_request";
import { controlAside } from "../features/controlSlice";
function Video({ item }) {
  const { snippet, contentDetails, statistics, id } = item;
  const { duration } = contentDetails;
  const { viewCount } = statistics;
  const seconds = moment.duration(duration).asSeconds();
  const durations = moment.utc(seconds * 1000).format("mm:ss");
  const {
    channelId,
    title,
    publishedAt,
    channelTitle,
    thumbnails: { medium },
  } = snippet;

  const [icon, setIcon] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getChannelData = async () => {
      const {
        data: { items },
      } = await HttpRequest("/channels", {
        params: {
          part: "contentDetails,statistics,snippet",
          id: channelId,
        },
      });
      setIcon(items);
    };
    getChannelData();
  }, [channelId]);
  const handleClick = () => {
    dispatch(controlAside(false));
  };

  return (
    <Link to={`/videoplayer/${id}`} onClick={handleClick}>
      <div className="video">
        <div className="video__thumbnail">
          <img
            className="video__media"
            src={snippet && medium.url}
            alt="thumbnils"
          />
          <span className="video__duration">{contentDetails && durations}</span>
        </div>
        <div className="video__info">
          <Avatar
            className="avatar"
            src={icon && icon[0].snippet.thumbnails.default.url}
          />
          <h3 className="video__title"> {snippet && title}</h3>
        </div>
        <h3 className="video__channalName">{snippet && channelTitle}</h3>
        <div className="video__reviews">
          <h4 className="video__views">
            views:{numeral(statistics && viewCount).format("0.a")}
          </h4>
          <h4 className="video__timeStamp">{moment(publishedAt).fromNow()}</h4>
        </div>
      </div>
    </Link>
  );
}

export default Video;
