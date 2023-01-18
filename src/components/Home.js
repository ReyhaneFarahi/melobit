
import  Carousel  from './Carousel';
import Trendingartists from './Trendingartists';
import Latestsongs from './Latestsongs';
import Daysongs from './Daysongs';
import Weeksongs from './Weeksongs';



function Home() {
  return (
    <div>
      <Carousel/>
      <Trendingartists/>
      <Latestsongs/>
      <Daysongs/>
      <Weeksongs/>
    </div>
  );
}

export default Home;
