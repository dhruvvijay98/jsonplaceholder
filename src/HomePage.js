import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import PhotoCard from './PhotoCard';

function HomePage() {
    const [photos,setPhotos]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=50")
        .then((response)=>response.json())
        .then((data)=>setPhotos(data))
        .catch((error)=>console.log("fetch error",error));
    },[]);
    const navigate = useNavigate();
    const loginPage = () =>{
        navigate('/login');
    };


    return (
        <div className='wrapper'>
            <h1>HOME</h1>
            <p>Welcome to Home Page</p>
            <div className='container1'>
            <Link to ='/details'>Go to details</Link>
            <button className='loginbutton' onClick={loginPage} >LOGIN</button>
            </div>
            <div  style={{
    display: "flex",
    flexWrap: "wrap", // Allows wrapping to the next row
    gap: "10px", // Spacing between cards
    justifyContent: "space-evenly", // Distribute items evenly
  }}>
                {photos.map((photo)=>
                (
                    <PhotoCard
                    key={photo.id}
                    photo={photo}
                    onclickHandler={()=>navigate(`/photo?id=${photo.id}`)}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomePage;
