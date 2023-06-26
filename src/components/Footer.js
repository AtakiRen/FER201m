import React from "react";
import { Footer as NavFooter } from "react-materialize";
import { Link } from "react-router-dom";
import '../css/Footer.css';
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Footer() {
  const { theme } = useContext(ThemeContext)
  return (
    <NavFooter 
     style={{backgroundColor: theme.background, color: theme.contentTextColor}}  
    
    copyrights="&copy; Best Anime at All Time By Baam"
     


      links  ={
        <ul style={{textAlign: 'left' , color: theme.contentTextColor}} >
          <li>
                <Link to='/' className="grey-text text-lighten-3">What's New</Link>
          </li>
          <li>
                <Link to='/movie' className="grey-text text-lighten-3">Best movies</Link>
          </li>
          <li>
                <Link to='/about' className="grey-text text-lighten-3">More information</Link>
          </li>
          <li>
                <Link to='new' className="grey-text text-lighten-3">Update</Link>
          </li>
          <li>
                <Link to='/contact' className="grey-text text-lighten-3">Contact us</Link>
          </li>
        </ul>


      }
      
     >
      <h4 className="grey-text text-lighten-3">Love Anime ~ Love life</h4>
      <p className="grey-text text-lighten-3"> “Life is not a game of luck. If you wanna win, work hard.” </p>
    </NavFooter>
  )
}
