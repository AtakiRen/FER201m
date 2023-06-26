import React, { useContext } from 'react'
import { Navbar,Icon,Switch} from 'react-materialize';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import { NavLink } from 'react-router-dom';
import '../css/Navigation.css'
import { LargeScreenContext } from './LargeScreenContext';

export default function Navigation() {
const {theme , toggle , dark} = useContext(ThemeContext) 
const largeScreen = useContext(LargeScreenContext)
let activeStyle = {
  backgroundColor: theme.focusedBackgroundColor,
        color: theme.focusedTextColor,
    }



return (
    <div style={{ position: "relative" }}>
      
        <Navbar  className = "menu" 
                   alignLinks='right'
           brand={<span    className="brand-logo"><Link to='/'><Icon style={{fontSize:"5rem"}}>movie_filter</Icon></Link></span>}
           id="mobile-nav"
           menuIcon = {<Icon>menu</Icon>}
           style={{ backgroundColor: theme.background, color: theme.contentTextColor }}
           >        
           
        <NavLink to ='/' end style={({ isActive }) => isActive ? activeStyle : {}}><Icon left>home</Icon>Home</NavLink>
        <NavLink to='/about' style={({ isActive }) => isActive ? activeStyle : {}}><Icon left>info_outline</Icon>About</NavLink>
        <NavLink to = '/movie' style={({ isActive }) => isActive ? activeStyle : {}}><Icon left>movie</Icon>Movies</NavLink>
        <NavLink to = '/new' style={({ isActive }) => isActive ? activeStyle : {}}> <Icon left>fiber_new</Icon>New</NavLink>
        <NavLink to= '/contact' style={({ isActive }) => isActive ? activeStyle : {}}><Icon left>contacts</Icon>Contact</NavLink> 
        {/* <div style={{position: 'relative'}}>
          <a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div> */}

            <Switch
                className="btn-toggle-theme"
                offLabel={largeScreen ? 'Light Mode' : ''}
                onLabel={largeScreen ? 'Dark Mode' : ''}
                checked={dark}
                onChange={toggle}
            />
        </Navbar>   
    </div>
  )
}
