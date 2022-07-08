import React from 'react'
import image from './img/logo.png';

const Header = () => {
  return (
    <>

<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img className="logo" src={image}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">HOME <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">BLOG</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ABOUT MAVEN</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">COURCES</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">CORPORATE</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ACADEMIA</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">RESOURCES</a>
      </li>
    
    </ul>
 
  </div>
</nav>
  
  
    </>
  )
}

export default Header