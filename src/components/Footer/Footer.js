import React from 'react'
import './Footer.css'
import {FaFacebookSquare,FaTwitter,FaInstagram} from 'react-icons/fa';
import {BsYoutube} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export default function Footer() {
  const func = () =>{
      window.scrollTo(0, 0);
  }
  return (
    <footer>
    <div className='footer'>

      <div className="footerBox">
        <div className="footerHead">
        <p> Follow Our Community </p>
        </div>
        <ul className="footerIcon">
          <li>
        <FaFacebookSquare  />
        </li>
        <li>
        <FaInstagram />
        </li>
        <li>
        <FaTwitter />
        </li>
        <li>
          <BsYoutube />
        </li>
        </ul>
        <div onClick={func}>
         <Link to="/help"> <p>Help</p> </Link>
        </div>
        <div onClick={func}>
          <Link to='/preferences'>
          <p>Prefrences</p>
          </Link>
        </div>
      </div>

      <div className="footerBox">
        <div className="footerHead">
        <p>People</p>
        </div>
        <ul className="footerContent">
            <li onClick={func}><Link to="/person/popular">Popular</Link></li>
           
        </ul>
      </div>

      <div className="footerBox">
        <div className="footerHead">
        <p>Tv</p>
        </div>
        <ul className="footerContent">
        <li onClick={func}><Link to="/tv/popular">Popular</Link></li>
        <li onClick={func}> <Link to="/tv/top_rated">Top Rated</Link></li>
        <li onClick={func}> <Link to="/discover/tv"> Discover  </Link> </li>
        <li onClick={func}> <Link to="/tv/airing_today">TV Airing Today </Link></li>
        <li onClick={func}><Link to="/tv/on_the_air">  TV On The Air</Link></li>
        </ul>
      </div>

      <div className="footerBox">
        <div className="footerHead">
        <p>Movies</p>
        </div>
        <ul className="footerContent">
            <li onClick={func}><Link to="/movie/popular"  >Popular</Link></li>
            <li onClick={func}><Link to="/movie/top_rated"  >Top Rated</Link></li>
            <li onClick={func}><Link to="/discover/movie">Discover</Link></li>
            <li onClick={func}><Link to="/movie/upcoming">Upcoming</Link></li>
            <li onClick={func}><Link to='/movie/now_playing'>Now Playing</Link></li>
        </ul>
      </div>

     

      <div className="footerBox">
        <div className="footerHead"> 
          Trending
        </div>
        <ul className="footerContent">
        <li onClick={func}><Link to="/trending/all/day">Shows & Movies in Day</Link></li>
        <li onClick={func}><Link to="/trending/all/week">Shows & Movies in Week</Link></li>
        <li onClick={func}><Link to="/trending/movie/day"> Movies in Day</Link></li>
        <li onClick={func}><Link to="/trending/movie/week">Movies in Week</Link></li>
        <li onClick={func}><Link to="/trending/tv/day">Shows  in Day</Link></li>
        <li onClick={func}><Link to="/trending/tv/week">Shows  in Week</Link></li>
        </ul>
      </div>
    </div>

<ul className='terms'>
   <li onClick={func}><Link to='/privacy'>Privacy Policy</Link></li>
   <li onClick={func}><Link to='/terms&conditions'>T&C</Link></li>
   <li>&copy; H&Agroups 2022</li>
   <li>v1.00</li>
</ul>

    </footer>
  )
}
