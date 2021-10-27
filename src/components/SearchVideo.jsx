import { Avatar } from "@material-ui/core";
import moment from "moment";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import HttpRequest from "../api_request";

function SearchVideo(props) {
  const [icon, setIcon] = useState();
  const {
    thumbnails,
    title,
    channelTitle,
    channelId,
    publishedAt,
    description,
  } = props.snippet;
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

  return (
    <div className="searchvideo">
      <img
        className="searchvideo__media"
        src={thumbnails && thumbnails.medium.url}
        alt="thumbnils"
      />
      <div className="searchvideo__info">
        <h3 className="searchvideo__title"> {title && title}</h3>
        <div className="searchvideo__reviews">
          <h4 className="searchvideo__views">
            views:{numeral(icon && icon[0].statistics.viewCount).format("0.a")}
          </h4>
          <h4 className="searchvideo__timeStamp">
            {moment(publishedAt && publishedAt).fromNow()}
          </h4>
        </div>
        <div className="searchvideo__channel">
          <Avatar
            className="avatar"
            src={icon && icon[0].snippet.thumbnails.default.url}
          />
          <h3>{channelTitle && channelTitle}</h3>
        </div>
        <h4 className="description"> {description}</h4>
      </div>
    </div>
  );
}

export default SearchVideo;
