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
        if( isPlaying && audioElm.current) {
            audioElm.current.play()
        }else if(audioElm.current ) 
        {
            audioElm.current.pause() ;
        }
    })


    return (
        <div className="card mb-3 detail-whith " >
            <div className="row g-0 detail-shadow">
                <div className="col-md-4 container-images-detail">
                    <div>
                        {
                            song.album&&
                            <img src={song.album.image.cover.url} className="img-fluid detail-image-blure rounded-start image-detail" alt="artist" />
                        }
                     
                         {
                            song.album&&
                            <img src={song.album.image.cover.url} className="img-fluid detail-image-circle rounded-start image-detail" alt="artist" />
                        }
                    </div>
                        
                </div>


                <div className="col-md-8 card-box-detail">
                    <div className="card-body">
                        <h5 className="card-title detail-name-music">

                            <div>
                                {
                                    song.title&&
                                    <h2>{song.title}</h2>
                                }
                            </div>
                        </h5>

                        
                        <p className="card-text detail-lyrics">
                            <div>
                                {song.lyrics &&
                                    <p>{song.lyrics}</p>
                                }
                            </div>
                        </p>

                        <h5 className="card-title detail-name-actor">
                            <div>
                                {
                                    song.artists &&
                                    <h6>{song.artists[0].fullName}</h6>
                                }
                            </div>
                        </h5>

                        <div className="btn-group detail-element">
                            <figure>
                                {song.audio &&

                                    <audio controls src={song.audio.high.url} ref={audioElm}></audio>

                                }
                                
                            </figure>
                            <div>

                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-download" viewBox="0 0 16 16">
  <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
  <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
</svg>
                                </button>
                                {
                                    song.audio &&
                                    <>
                                        <ul className="dropdown-menu">
                                            <li><button className="dropdown-item" type="button"><a className='text-decoration-none text-dark' href={song.audio.medium.url} download>with 128 quality</a></button></li>
                                            <li><button className="dropdown-item" type="button">  <a className='text-decoration-none text-dark' href={song.audio.high.url} download>with 320 quality</a></button></li>
                                        </ul>
                                    </>}
                            </div>
                        </div>
                        </div>
                        

                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
