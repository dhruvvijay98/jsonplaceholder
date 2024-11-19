import React from "react";

function PhotoCard({ photo, onclickHandler }) {
  return (
    <div
      onClick={onclickHandler}
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        width: "calc(33.33% - 20px)", // 3 items per row with spacing
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        marginBottom: "20px", // Space between rows
      }}
    >
        <img
        src={photo.thumbnailUrl}
        alt={photo.title}
        style={{
          width: "30%",
          height: "auto",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      />
    </div>
  );
}

export default PhotoCard;
