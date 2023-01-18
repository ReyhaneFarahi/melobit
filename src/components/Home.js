
import  Carousel  from './Carousel';
import Trendingartists from './Trendingartists';
import Latestsongs from './Latestsongs';
import Daysongs from './Daysongs';



function Home() {
  return (
    <div>
      <Carousel/>
      <Trendingartists/>
      <Latestsongs/>
      <Daysongs/>
    </div>
  );
}

export default Home;
