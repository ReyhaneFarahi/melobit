import React, { useEffect, useState } from 'react';


function Carousel() {

    const [song,setSong]=useState([])
useEffect(()=>{
    const Slider=async () =>{
        await fetch('https://api-beta.melobit.com/v1/song/slider/latest')
         .then(Response=>Response.json())
         .then(data=>{
             setSong(data.results)
             console.log(data.results)
         })
     }
     Slider();
},[])
   




  return (
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div className="carousel-inner">
    {song.map((s,i)=>(
      <div  className={i===0?"carousel-item active":"carousel-item"} key={i}>
        {s.album && <img src={s.album.image.cover.url} className="d-block w-100" alt="..."/>}
    </div>
    ))}
     
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Carousel;