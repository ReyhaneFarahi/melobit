import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Latestsongs() {

    const [latestSong,setLatestsong]=useState([])
useEffect(()=>{
    const Lsong=async () =>{
        await fetch('https://api-beta.melobit.com/v1/song/new/0/12')
         .then(Response=>Response.json())
         .then(data=>{
             setLatestsong(data.results)
             console.log(data.results)
         })
     }
     Lsong();
},[])




  return (
    <div className="container-fluid">
<div className="row song-box">
  <h2 className="tah2">New Songs</h2>
  {latestSong.map((l,i)=>(
    <div className="col-2" key={i}>
      <Link to={`details/${l.id}`} className='text-decoration-none text-dark'>
    <div className="card w-90" >
      {l.image&&<img src={l.image.cover.url} className="card-img-top Lsong" alt="..."/>}
    <div className="card-body">
      {l.album.name&& <p className="card-text">{l.album.name}</p>}
      {l.downloadCount&& <p className="card-text card-download">download:{l.downloadCount}</p>}
    </div>
  </div>
  </Link>
  </div>
  ))}
</div>
</div>
  );
}

export default Latestsongs;