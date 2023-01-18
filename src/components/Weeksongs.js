import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Weeksongs() {

  const [weekSongs,setWeeksong]=useState([])
  useEffect(()=>{
      const Wsong=async () =>{
          await fetch('https://api-beta.melobit.com/v1/song/top/week/0/13')
           .then(Response=>Response.json())
           .then(data=>{
               setWeeksong(data.results)
               console.log(data.results)
           })
       }
       Wsong();
  },[])

    return (
      <div className="container-fluid">
      <div className="row song-box">
        <h2 className="tah2">Top 10 Week Song</h2>
        {weekSongs.map((w,i)=>(
          <div className="container col-2" key={i}>
            <Link to={`details/${w.id}`} className='text-decoration-none text-dark'>
              {w.image&&<img src={w.image.cover.url} alt="Avatar" className="image" />}
              <div className="overlay">
                <div className="card-text-group">
                  {w.album.name&& <p className="card-text">{w.album.name}</p>}
                  {w.artists[0].fullName&& <p className="card-text card-text-fn">{w.artists[0].fullName}</p>}
                  {w.downloadCount&& <p className="card-text card-text-fn">download  {w.downloadCount}</p>}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="footer">
        <p>create react app, melobit</p>
      </div>
    </div>
    );
  }

export default Weeksongs;