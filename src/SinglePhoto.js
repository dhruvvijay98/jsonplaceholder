import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function SinglePhoto() {

    const [selectPhoto,setSelectPhoto]=useState({})
    const location = useLocation();
    const queryParams= new URLSearchParams(location.search);
    const id= queryParams.get("id");

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((response)=>response.json())
        .then((data)=>setSelectPhoto(data))
        .catch((error)=>console.error("fetch error",error));
    },[])

    return (
        <div style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ddd",
          }}>
            <h3>{selectPhoto?.title}</h3>
            <p>Photo ID: {selectPhoto?.id}</p>
            <p>Photo url: {selectPhoto?.url}</p>
            <p>Photo thumnail: {selectPhoto?.thumbnailUrl}</p>
          

            <button onClick={() => console.log("hello")}>Close</button>
            
        </div>
    )
}

export default SinglePhoto
