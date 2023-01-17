import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import  Carousel  from './components/Carousel';
import Trendingartists from './components/Trendingartists';
import Latestsongs from './components/Latestsongs';
import Daysongs from './components/Daysongs';



function App() {
  return (
    <div>
     <Navbar/>
      <Carousel/>
      <Trendingartists/>
      <Latestsongs/>
      <Daysongs/>
    </div>
  );
}

export default App;
