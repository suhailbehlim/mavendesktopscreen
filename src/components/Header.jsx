import React from 'react'
import image from './img/logo.png';

const Header = () => {
  return (
    <>
    <div className='navbar'>
<label className='logo'>
    <img src={image}/>
</label>
<nav>
<ul>
    <li><a href="/">HOME</a></li>
    <li><a href="/">BLOG</a></li>
    <li><a href="/">ABOUT MAVEN</a></li>
    <li><a href="/">COURCES</a></li>
    <li><a href="/">CORPORATE</a></li>
    <li><a href="/">ACADEMIA</a></li>
    <li><a href="/">RESOURCES</a></li>
   <input type={"text"} placeholder="What are you Lokking For?"/>
</ul>

</nav>

    </div>
    </>
  )
}

export default Header