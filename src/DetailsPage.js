import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DetailsPage.css";
import AlbumCard from "./AlbumCard";

function DetailsPage() {
  const [albums, setAlbums] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
      })
      .catch((error) => console.error("fetch problem", error));
  }, []);

  return (
    <div className="wrapper">
      <h1>Details Page</h1>
      <Link className="link" to="/">
        Go to Home
      </Link>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
            clickHanlder={()=>navigate(`/album?id=${album.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default DetailsPage;
