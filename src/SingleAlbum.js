import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SingleAlbum = () => {
  const [selectAlbum, setSelectAlbum] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id"); 
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectAlbum(data);
      })
      .catch((error) => console.error("fetch problem", error));
  }, []);
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
      }}
    >
      <h2>{selectAlbum?.title}</h2>
      <p>Album ID: {selectAlbum?.id}</p>
      <button onClick={() => console.log("hello")}>Close</button>
    </div>
  );
};
export default SingleAlbum;
