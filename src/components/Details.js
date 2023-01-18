import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
    const params = useParams();

    const [song, setSong] = useState([])
    const audioElm=useRef(null);
    const [isPlaying,setIsPlaying]=useState(false)


    useEffect(() => {
        const songArtist = async () => {
            await fetch(`https://api-beta.melobit.com/v1/song/${params.id}`)
                .then(Response => Response.json())
                .then(data => {
                    setSong(data)
                    console.log(data)
                })
        }
        songArtist();
        window.scrollTo(0, 0);

    }, [])


    useEffect(()=>{
        if( isPlaying && audioElm.current){
            audioElm.current.play()
        }else if(audioElm.current )
        {
            audioElm.current.pause() ;
        }
       })


    return (
<div className="card mb-3 detail-whith" >
  <div className="row g-0">
  <div>
{song.audio &&
                <audio co src={song.audio.high.url} ref={audioElm} ></audio>
            }
</div>

    <div className="col-md-4">
    <div>
      {
          song.album&&
          <img src={song.album.image.cover.url} className="img-fluid rounded-start image-detail" alt="artist"/>
      }
        </div>
    </div>


    <div className="col-md-8 card-box-detail">
      <div className="card-body">
        <h5 className="card-title">
            
 <div>
      {
          song.title&&
          <h2>{song.title}</h2>
      }
 </div>
        </h5>
        <h5 class="card-title">
            

        </h5>
        <h5 className="card-title">
        <div>
      {
          song.artists&&
          <h2>{song.artists[0].fullName}</h2>
      }
</div>
        </h5>
        <p className="card-text">
        <div>
{song.lyrics &&
        <p>{song.lyrics}</p>
      }
</div>
        </p>
        <p className="card-text"> 
        <div>    
<span onClick={()=>setIsPlaying(!isPlaying)}>
                     {
                         !isPlaying?    
                         <svg xmlns="http://www.w3.org/2000/svg" color="black" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                     </svg>
                     :
                     <svg xmlns="http://www.w3.org/2000/svg" color="black" width="16" height="16" fill="currentColor" className="bi bi-pause-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
</svg>
                     }
              </span>
</div>

           </p>
      
      <div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Download
  </button>
  {
    song.audio&&
    <>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button"><a  className='text-decoration-none text-dark' href={song.audio.medium.url} download>with 128 quality</a></button></li>
    <li><button class="dropdown-item" type="button">  <a className='text-decoration-none text-dark' href={song.audio.high.url} download>with 320 quality</a></button></li>
  </ul> 
  </>} 
</div>
</div>
</div>
    </div>
  </div>
</div>
    );
}

export default Details;
