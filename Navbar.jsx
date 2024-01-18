import React from 'react'
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';



const Navbar = () => {
  return (
   <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <LocalShippingIcon className='icon_nav'/></a>
        <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <PersonIcon className='icon_nav'/>
        Master</a>
        <ul className="dropdown-menu">
        <li>
          <Link to="/masterone" className="dropdown-item">Master One</Link>
        </li>
         <li>
          <Link to="/mastertwo" className="dropdown-item">Master two</Link>
        </li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li>

        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <EditCalendarIcon className='icon_nav'/>
        Booking</a>
        <ul className="dropdown-menu">
        <li>
          <Link to="/bookone" className="dropdown-item">Book One</Link>
        </li>
        <li>
          <Link to="/booktwo" className="dropdown-item">Book two</Link>
        </li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li>

        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       <DonutSmallIcon className='icon_nav'/>
        Crossing
        </a>
        <ul className="dropdown-menu">
        <li>
          <Link to="/crossingone" className="dropdown-item">Crossing One</Link>
        </li>
        <li>
          <Link to="/crossingtwo" className="dropdown-item">Crossing two</Link>
        </li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li>

        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       <LocalShippingIcon className='icon_nav'/>
        Delivery
        </a>
        <ul className="dropdown-menu">
        <li>
          <Link to="/deliveryone" className="dropdown-item">Delivery One</Link>
        </li>
        <li>
          <Link to="/deliverytwo" className="dropdown-item">Delivery Two</Link>
        </li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li>

        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <PersonalVideoIcon className='icon_nav'/>
        Report
        </a>
        <ul className="dropdown-menu">
        <li>
          <Link to="/reportone" className="dropdown-item">Report One</Link>
        </li>
        <li>
          <Link to="/reporttwo" className="dropdown-item">Report Two</Link>
        </li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li>

        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       <LockIcon className='icon_nav'/>
        Admin
        </a>
        <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li>
        <li className="nav-item">
    
        <Link to="/home" className="nav-link">
        <HomeIcon className='icon_nav'/>Home
        </Link>

        </li>
      <li className="nav-item">
          <Link to="/logout" className="nav-link">
          <LogoutIcon className='icon_nav'/> Logout
          </Link>
        </li>

        <li className="nav-item">
        <Link to="/fyr" className="nav-link"> 
        <LibraryBooksIcon className='icon_nav'/>FYR:23-24</Link>

        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link">
           Login
          </Link>
        </li>

     
  
      </ul>
       
        </div>
        </div>
        </nav>
   </>
  )
}

export default Navbar;