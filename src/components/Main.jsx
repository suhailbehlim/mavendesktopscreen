import React from 'react'
import image from './img/about.png'
import man from './img/man.png'
const Main = () => {
  return (
    <>
    <div className='maincontent'>
    <div>
<img src={image}/>
</div>
<div className='man'>
<img src={man}/>

</div>
<div className='textside'>
<h2 style={{color:'white'}}>We Are</h2>
<h1 style={{color:'green'}}>MAVEN SILICON</h1>
<p style={{color:'white'}}>lorem ipsum lorem ipsum</p>
    </div>
    </div>
    </>
  )
}

export default Main