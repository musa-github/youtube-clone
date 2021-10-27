import React from "react";

function Players({ id }) {
  return (
    <>
      <iframe
        className="player__media"
        src={`https://www.youtube.com/embed/${id && id}` || "#"}
        title="hello"
        frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default Players;
