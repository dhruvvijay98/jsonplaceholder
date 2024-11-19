import React from "react";

function AlbumCard({ album, clickHanlder }) {
  return (
    <div
      onClick={clickHanlder}
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        width: "200px",
        textAlign: "center",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3>{album.title}</h3>
    </div>
  );
}

export default AlbumCard;
