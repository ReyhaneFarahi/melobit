import React, { useEffect, useState } from 'react';


function Daysongs() {

  const [daySong,setDaysong]=useState([])
  useEffect(()=>{
      const Dsong=async () =>{
          await fetch('https://api-beta.melobit.com/v1/song/top/day/0/13')
           .then(Response=>Response.json())
           .then(data=>{
               setDaysong(data.results)
               console.log(data.results)
           })
       }
       Dsong();
  },[])
  
  
  
  
    return (
      <div className="container-fluid">
  <div className="row">
    <h2 className="tah2">Top 10 Day Song</h2>
    {daySong.map((d,i)=>(
      <div className="col-2" key={i}>
      <div className="card w-90" >
        {d.image&&<img src={d.image.cover.url} className="card-img-top Lsong" alt="..."/>}
        <div class="text-block">
        {d.album.name&& <h4 className="card-text">{d.album.name}</h4>}
        {d.artists[0].fullName&& <p className="card-text-mini">{d.artists[0].fullName}</p>}
        {d.downloadCount&& <p className="card-text-mini">download:{d.downloadCount}</p>}
        </div>
    </div>
    </div>
    ))}
  </div>
  </div>
    );
  }

export default Daysongs;