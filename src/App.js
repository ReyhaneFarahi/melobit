import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Home from './components/Home';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
     <Navbar/>

     <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="search/details/:id" element={<Details />} />
          <Route path="/" element={<Home/>} />
          {/* <Route path="/search" element={<Search/>} />        */}
      </Routes>

    </div>
  );
}

export default App;
