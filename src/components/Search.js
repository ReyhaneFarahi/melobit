import React ,{useState} from 'react';

import {Link} from 'react-router-dom';


const Search=()=>{

  const[searchInput,setSearch]=useState("");
  const[searchResult,setsearchResult]=useState([]) 

  const saveSearchHandeler= event=>{
      setSearch(event.target.value)
  
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

<div class="input-group mb-3">

  <input value={searchInput} onChange={saveSearchHandeler} 
  type="text"  onKeyPress={event => {
    if (event.key === "Enter") {
      searchHandler()
    }
  }} class="form-control" placeholder='SEARCH...' aria-label="Username" aria-describedby="basic-addon1"/>
</div>
          </div>
        </div>
        <div className='row justify-content-center m-3' >

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