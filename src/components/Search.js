import React ,{useState} from 'react';

import {Link} from 'react-router-dom';


const Search=()=>{

  const[searchInput,setSearch]=useState("");
  const[searchResult,setsearchResult]=useState([]) 

  const saveSearchHandeler= event=>{
      setSearch(event.target.value)
  
  }

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (window.getComputedStyle(x).visibility === "visible") {
      x.style.visibility = "hidden";
      x.style.maxWidth="0px";
      x.style.maxHeight="0px";
      
    }
  }

 const searchHandler=async ()=>{

        await fetch(`https://api-beta.melobit.com/v1/search/query/${searchInput}/0/8`)
         .then(Response=>Response.json())
         .then(data=>{
             setsearchResult(data.results)
             console.log(data.results)
         })
     }

    return (

      
      <div className='container-fluid '>
        <div className='row justify-content-center mt-5'>
          <div className='col-md-6 col-sm-11 col-11'>

<div className="input-group mb-3">

  <input value={searchInput} onChange={saveSearchHandeler} 
  type="text"  onKeyPress={event => {
    if (event.key === "Enter") {
      searchHandler()
      myFunction()
    }

  }} class="form-control" placeholder='SEARCH...' aria-label="Username" aria-describedby="basic-addon1"/>
</div>
          </div>
        </div>
        <div className='row justify-content-center m-3' >
        <svg id="myDIV"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-music" viewBox="0 0 16 16">
  <path d="M11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.572 2.572 0 0 0 7 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377.5 0 .974-.134 1.338-.377.36-.24.662-.628.662-1.123V8.89l2-.5V6.64z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
</svg>

      {
       searchResult.map((s)=>(
          
            s.type==="song" && 
            <div className='col-md-3 col-sm-11 col-11 text-center mt-4' key={s.position}>
                   <Link to={`details/${s.song.id}`} aria-label="Close" className='text-decoration-none text-dark'>

            <div className="card w-100">
  <img className='card-img-top' src={s.song.album.image.cover.url} alt={s.song.album.name.replace('Single' , '')}/>

  <div className="card-body">
    <p className="card-text">
    <h6 className=' text-dark'>
                      {s.song.album.name.replace('Single' , '')}
                     
                     </h6>
                     <h6 className=' text-dark'>
                     {s.song.album.artists[0].fullName}
                     </h6>
                             </p>
  </div>
</div>
</Link>
</div>
))}
</div>
</div>
    );
}

export default Search;