import moment from "moment";
import React from "react";

function RelatedVideos({ items }) {
  return (
    <div className="relatedVideos">
      {items &&
        items.map(({ snippet }) => {
          return (
            <div className="relatedVideo">
              <img
                src={snippet && snippet.thumbnails.medium.url}
                alt="thumbnails"
              />
              <div className="relatedVideos__info">
                <h3> {snippet && snippet.title}</h3>
                <h4>{snippet && snippet.channelTitle}</h4>
                <div className="statistics">
                  <span> 10k views</span>
                  <span>
                    {moment(snippet && snippet.publishedAt).fromNow()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default RelatedVideos;
