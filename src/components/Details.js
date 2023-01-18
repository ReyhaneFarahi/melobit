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
        <div>
 
      {
          song.album&&
          <img src={song.album.image.cover.url} alt="artist"/>
      }

{song.audio &&
                <audio co src={song.audio.high.url} ref={audioElm} ></audio>
            }
 
      {
          song.title&&
          <h2>{song.title}</h2>
      }

      {
          song.artists&&
          <h2>{song.artists[0].fullName}</h2>
      }

<span onClick={()=>setIsPlaying(!isPlaying)}>
                     {
                         !isPlaying?    <svg xmlns="http://www.w3.org/2000/svg" color="black" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                     </svg>
                     :
                     <svg xmlns="http://www.w3.org/2000/svg" color="black" width="16" height="16" fill="currentColor" className="bi bi-pause-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
</svg>
                     }
              </span>
{
    song.audio&&
    <>
    <a  className='text-decoration-none text-dark' href={song.audio.medium.url} download>with 128 quality</a>
                      <a className='text-decoration-none text-dark' href={song.audio.high.url} download>with 320 quality</a>
    </>
}

{song.lyrics &&
        <p>{song.lyrics}</p>
      }



        </div>
    );
}

export default Details;
