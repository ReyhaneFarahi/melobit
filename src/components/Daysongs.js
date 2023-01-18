import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Daysongs() {

  const [daySong,setDaysong]=useState([])
  useEffect(()=>{
      const Dsong=async () =>{
          await fetch('https://api-beta.melobit.com/v1/song/top/day/0/12')
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
      <div className="row song-box">
        <h2 className="tah2">Top 10 Day Song</h2>
        {daySong.map((d,i)=>(
          <div className="container col-2" key={i}>
            <Link to={`details/${d.id}`} className='text-decoration-none text-dark'>
              {d.image&&<img src={d.image.cover.url} alt="Avatar" className="image" />}
              <div className="overlay">
                <div className="card-text-group">
                  {d.album.name&& <p className="card-text">{d.album.name}</p>}
                  {d.artists[0].fullName&& <p className="card-text card-text-fn">{d.artists[0].fullName}</p>}
                  {d.downloadCount&& <p className="card-text card-text-fn">download  {d.downloadCount}</p>}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    );
  }

export default Daysongs;