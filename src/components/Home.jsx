import React from 'react'
import Hero from "./Hero.jsx";
import Tournament from './Tournament/Tournament';
import Reel from './Tournament/Reel';
import About from './About/About.jsx';
import Courses from './Courses/Courses.jsx';
import Home_About from './HomeAbout/Home_About.jsx';
import WorkShow from './WorkShow/WorkShow.jsx';
import Trainers from './Trainers/Trainers.jsx';
import Experience from './Experience/Experience.jsx';
import UserNum from './User_Num/UserNum.jsx';
import Footer from './Footer/Footer.jsx';
import SwiperCompo from './WorkShow/SwiperCompo.jsx';
const Home = () => {
  return (
    <>
      <Hero/>
    <Tournament/>
    <Reel/>
    <div style={{marginTop:"150px"}}>

    <Home_About/>

    </div>
    {/* <About/> */}
    <div style={{marginTop:"150px"}}>

    <Courses />
    </div>
    <UserNum/>
 
    {/* <WorkShow/> */}
    <SwiperCompo/>
    
    <Trainers/>
    <Experience/>
   
     </>
  )
}

export default Home
