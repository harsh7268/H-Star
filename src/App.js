import {useState,useEffect} from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import LoadingBar from 'react-top-loading-bar';
import Spiner from './components/MainItem/Spiner';
import Footer from './components/Footer/Footer'

import Home from './components/Home/Home';
import SingleCard from './components/MainItem/SingleCard';
import InfiniteScroll from "react-infinite-scroll-component";
import Privacy from './components/Privacy/Privacy'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainItem from './components/MainItem/MainItem';
import Data from './components/Home/Data';  
import axios from "axios";
import Carousel  from  './components/Home/Carousel/Carousel';
import DetailModel from './components/DetailModel.js/DetailModel';
import CountriesData from './components/Countries/CountriesData';

function App(props) {
  let b;
  const  [valid,setValid]=useState(0);
  const [type,setType] = useState(0);
  const [knowsFor,setKnowsFor] = useState(0)
  const [languages,setLanguages] = useState('hp');
  const [searchData,setSearchData] = useState([]);
  const [text,setText] = useState(null);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  const [loading,setLoading] = useState(true);
  const [iden,setIden] = useState(0);
  const search = (a) =>{
         setText(a);
         console.log(a.length);
         if(a.length===0){
           setText(null)
         }

  }
  const mainFunc1 = (lng)  => {
    setLanguages(lng);
    console.log(lng);
  }
    const mainFunc  =  (a,type,known_for,iden) =>{
    b=a;
    setValid(a);
    setText(null);
    setType(type);
    setKnowsFor(known_for);
    setIden(iden);
    console.log(known_for);
    
    }
 
  const [content,setContent] = useState([]);

  const fetchData = async () =>{

    const {data} = await axios.get(
      `https://api.themoviedb.org/3/configuration/languages?api_key=4750523db0d1c5cd05c4585cdac5a1c5`
      );
      setContent(data);
    
  }
  const fetchSearchData = async (a) =>{
    console.log(a);
    if(a.length===0){
      setText(null);
    }
    setLoading(true);
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=4750523db0d1c5cd05c4585cdac5a1c5&query=${a}`
      );
      setSearchData(data.results);
      setTotalResults(data.total_results);
  
      setText(a);
      setLoading(false);
      console.log(data.results);
      setPage(1);
  }
  const fetchMoreSearchData = async () =>{
    setLoading(true);
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=4750523db0d1c5cd05c4585cdac5a1c5&page=${page+1}&query=${text}`
      );
      setSearchData(searchData.concat(data.results));
      setTotalResults(data.total_results);
      setPage(page+1);
      setLoading(false);

  }

  useEffect(() =>{
   fetchData();
  
  },[])


  const [progress,setProgress] = useState(0);
  const topBar = (progress) =>{
      setProgress(progress)
  }
  return (
    <Router>
    <div className="App">
    <NavBar mainFunc1={mainFunc1} search={search} fetchSearchData={fetchSearchData}/>
    <LoadingBar
        color='#0463df'
        progress={progress}
        height={4}
      />
      {
        text!==null &&
        <div >
        {loading && <Spiner/>}
        <InfiniteScroll
          dataLength={searchData.length}
          next={fetchMoreSearchData}
          hasMore={searchData.length!==totalResults}
          loader={<Spiner/>}
        >
        <div className="card">
      {
          searchData && searchData.map((c) =>(
              <SingleCard  type={c.media_type} mainFunc={mainFunc} key={c.id} title={c.title} backdrop_path={c.backdrop_path  || c.profile_path || c.poster_path} id={c.id} poster_path={c.poster_path} media_type={c.media_type} known_for={type==='person'?c.known_for:false}/>
          ))
      }
    </div>
    </InfiniteScroll>
    </div>
      }
        {
        text===null &&
    
    <Switch>
  
          <Route exact path="/" key='home'>
          <Home  mainFunc={mainFunc}  topBar={topBar} />
          </Route>
 
          <Route exact path="/movie/popular" >
        <MainItem mainFunc={mainFunc} key='moviePopular'  type='movie' category='popular' topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/movie/top_rated" >
        <MainItem mainFunc={mainFunc} key='movieTop_rated' type='movie' category='top_rated'  topBar={topBar}  languages={languages}/> 
          </Route>
          <Route exact path="/discover/movie" >
        <MainItem mainFunc={mainFunc} key='movieLatest' type='discover' category='movie'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/movie/upcoming" >
        <MainItem mainFunc={mainFunc} key='movieUpcoming' type='movie' category='upcoming'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/movie/now_playing" >
        <MainItem mainFunc={mainFunc} key='movieNow-playing' type='movie' category='now_playing'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route  exact path="/tv/popular" >
        <MainItem mainFunc={mainFunc} key='tvPopular' type='tv' category='popular'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/tv/top_rated" >
        <MainItem mainFunc={mainFunc} key='tvTop_rated' type='tv' category='top_rated' topBar={topBar}  languages={languages}/> 
          </Route>
          <Route exact path="/discover/tv"   >
        <MainItem mainFunc={mainFunc} key='tvLatest' type='discover' category='tv'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/tv/airing_today" >
        <MainItem mainFunc={mainFunc} key='tvAiring_today' type='tv' category='airing_today'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/tv/on_the_air" >
        <MainItem mainFunc={mainFunc} key='tvOn_the_air' type='tv' category='on_the_air'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/person/popular" >
        <MainItem mainFunc={mainFunc} key='personPopular' type='person' category='popular'  topBar={topBar} languages={languages}/> 
          </Route>
          {
            content.map((c)=> (
          <Route exact path={`/language/${c.english_name}`} key={c.iso_639_1}>
             <Carousel mainFunc={mainFunc}  topBar={topBar}  language={c.iso_639_1} type='discover' category='movie'    />
              <Data mainFunc={mainFunc}  language={c.iso_639_1}   topBar={topBar} /> 
          </Route>
          ))
           }

        <Route exact path="/trending/all/day" >
        <MainItem mainFunc={mainFunc} key='trendingAllDay' type='trending' category='all' time='day'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path="/trending/all/week" >
        <MainItem mainFunc={mainFunc} key='trendingAllWeek' type='trending' category='all' time='week'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path="/trending/movie/day" >
        <MainItem mainFunc={mainFunc} key='trendingMovieDay' type='trending' category='movie' time='day'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path="/trending/movie/week" >
        <MainItem mainFunc={mainFunc} key='trendingMovieWeek' type='trending' category='movie' time='week'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path="/trending/tv/day" >
        <MainItem mainFunc={mainFunc} key='trendingTvDay' type='trending' category='tv' time='day'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path="/trending/tv/week" >
        <MainItem mainFunc={mainFunc} key='trendingTvWeek' type='trending' category='tv' time='week'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path={`/movie/${valid}/similar`} >
        <MainItem mainFunc={mainFunc} key='movieSimilar' type='movie' category={valid} time='similar'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path={`/movie/${valid}/recommendations`} >
        <MainItem mainFunc={mainFunc} key='movieRecommendations' type='movie' category={valid} time='recommendations'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path={`/tv/${valid}/similar`} >
        <MainItem mainFunc={mainFunc} key='tvSimilar' type='tv' category={valid} time='similar'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path={`/tv/${valid}/recommendations`} >
        <MainItem mainFunc={mainFunc} key='tvRecommendations' type='tv' category={valid} time='recommendations'  topBar={topBar} languages={languages}/> 
        </Route>


        <Route exact path={`/${valid}`} key={valid} >
        <DetailModel id={valid} topBar={topBar} type={type} mainFunc={mainFunc} knowsFor={knowsFor} iden={iden}/>
        </Route>
        
        <Route exact path="/languages" >
           <CountriesData mainFunc1={mainFunc1} />
        </Route>

        <Route exact path="/privacy" key='privacy'>
          <Privacy title='Privacy Policy'/>
        </Route>
        <Route exact path="/help" key='help'>
          <Privacy  title='Help' />
        </Route>
        <Route exact path="/preferences" key='preferences'>
          <Privacy title='Preferences' />
        </Route>
        <Route exact path="/terms&conditions" key='terms'>
          <Privacy title='Terms & Conditions' />
        </Route>

        </Switch>
   }
   <Footer />
    </div>
    </Router>
  );
}

export default App;
