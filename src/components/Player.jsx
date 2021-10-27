import { Avatar, Button } from "@material-ui/core";
import { Sort } from "@material-ui/icons";
import moment from "moment";
import numeral from "numeral";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { facingChannel } from "../features/channelSlice";
import { facingComments } from "../features/commentsSlice";
import save from "../img/save.svg";
import share from "../img/share.svg";
import thumbDown from "../img/thumbDown.svg";
import thumbUp from "../img/thumbUp.svg";
import Comments from "./Comments";
import Players from "./Players";
function Player({ item }) {
  const [data] = item;
  const { id, snippet, statistics } = data;
  const { title, publishedAt, channelId, description } = snippet;
  const { commentCount, dislikeCount, likeCount, viewCount } = statistics;

  const { items } = useSelector((state) => state.channel.channel);
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(facingChannel(channelId));
    dispatch(facingComments(id));
  }, [channelId, dispatch, id]);

  return (
    <div className="player">
      <Players id={id} />

      <div className="player__info">
        <h3> {snippet && title}</h3>
        <div className="player__contentDetails">
          <div className="view__pubAt">
            <div> {numeral(statistics && viewCount).format("0.a")} views </div>
            <div>{moment(publishedAt).fromNow()} </div>
          </div>
          <div className="statestic">
            <div>
              <img className="icon" src={thumbUp} alt="like" />
              {numeral(statistics && likeCount).format("0.a")}
            </div>
            <div>
              <img className="icon" src={thumbDown} alt="dislike" />
              {numeral(statistics && dislikeCount).format("0.a")}
            </div>
            <div>
              <img className="icon" src={share} alt="share" /> Share
            </div>
            <div title="Save">
              <img className="icon" src={save} alt="save to playlist" /> Save
            </div>
          </div>
        </div>

        <span className="border"></span>
      </div>

      <div className="player__contentDetail">
        <div className="about__channel">
          <div>
            <Avatar
              className="avatar"
              src={items && items[0].snippet.thumbnails.default.url}
            />
            <div>
              <span>{items && items[0].snippet.localized.title}</span>
              <span>
                {numeral(items && items[0].statistics.subscriberCount).format(
                  "0.a"
                )}
                {""} subscribers
              </span>
            </div>
          </div>
          <Button variant="outlined">SUBCRIBE</Button>
        </div>

        <div className="describtion">{snippet && description}</div>
        <span className="border"></span>
        <div className="commentbox">
          <div>
            <span>Comments</span>
            <span>{numeral(statistics && commentCount).format("0.a")}</span>
          </div>
          <div>
            <Sort className="sortBy" /> <span>sort by</span>
          </div>
        </div>
        <span className="border"></span>
        {comments &&
          comments.items.map(({ snippet }, index) => {
            return <Comments key={index} snippet={snippet} />;
          })}
      </div>
    </div>
  );
}

export default Player;
