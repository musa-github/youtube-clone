import React from "react";
import thumbDown from "../img/thumbDown.svg";
import thumbUp from "../img/thumbUp.svg";
function Comments({ snippet }) {
  const { topLevelComment } = snippet;

  return (
    <div className="comments">
      <img
        src={snippet && topLevelComment.snippet.authorProfileImageUrl}
        alt="of commentor"
        className="avatar"
      />

      <div className="comments__info">
        <span>{snippet && topLevelComment.snippet.authorDisplayName} </span>
        <span> {snippet && topLevelComment.snippet.textOriginal}</span>
        <div className="like__dislike">
          <span>
            <img src={thumbUp} alt="like comment" />
            {""} {snippet && topLevelComment.snippet.likeCount}
          </span>
          <span>
            <img src={thumbDown} alt="dislike comment" />
          </span>
          <span>Replay</span>
        </div>
      </div>
    </div>
  );
}

export default Comments;
