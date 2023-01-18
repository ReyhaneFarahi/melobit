import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Trendingartists() {

  const [trendingArtists, setTrendingArtists] = useState([])
  useEffect(() => {
    const Tartist = async () => {
      await fetch('https://api-beta.melobit.com/v1/artist/trending/0/4')
        .then(Response => Response.json())
        .then(data => {
          setTrendingArtists(data.results)
          console.log(data.results)
        })
    }
    Tartist();
  }, [])




  return (
    <div className="container-fluid">
      <div className="row">
        <h2 className="tah2">Trending Artists</h2>
        {trendingArtists.map((a, i) => (
          <div className="col" key={i}>
              <div className="card w-90" >
                {a.image && <img src={a.image.cover.url} className="card-img-top Tsong" alt="..." />}
                <div>
                  {a.fullName && <p className="card-text-mini">{a.fullName}</p>}
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trendingartists;