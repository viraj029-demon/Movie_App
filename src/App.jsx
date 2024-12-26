// import styles from "./Components/Calculator/App.module.css"



import React from "react";
import "./App.css";
import {HashRouter as Router, Routes, Route} from "react-router-dom";


import ImageSliderani from "./Components/MovieApp/imagesliderani";
import Bannerani from "./Components/MovieApp/Bannerani";









// import { useState } from "react"
// import ButtonsContainer from "./Components/Calculator/ButtonsContainer"
// import Display from "./Components/Calculator/Display"
// // import Pr1 from "./Components/Pr1"
// import { Login } from "@mui/icons-material"
import Nav from "./Components/MovieApp/Nav"
// import SearchBox from "./Components/MovieApp/SearchBox"
// import {  Router, Routes} from 'react-router-dom';
// import MiddleMovie from "./Components/MovieApp/VideoSlider"
// import Pract2 from "./Components/Pract2"
// import Pract3 from './Pract3'
import VideoSlider from './Components/MovieApp/VideoSlider';
import MovieCards  from './Components/MovieApp/MovieCards';
import Moviecard2  from './Components/MovieApp/Moviecard2';
import Moviecard3  from './Components/MovieApp/Moviecard3';
import Moviecard4  from './Components/MovieApp/Moviecard4';
import Moviecard5  from './Components/MovieApp/Moviecard5';
import Moviecard6  from './Components/MovieApp/Moviecard6';

import Moviecard7  from './Components/MovieApp/Moviecard7';
import TrailerCard  from './Components/MovieApp/TrailerCard';
import CardSliderM  from "./Components/MovieApp/CardSliderM";
import Footer from "./Components/MovieApp/Footer";
import FooterList from "./Components/MovieApp/FooterList";
import FooterLast from "./Components/MovieApp/FooterLast";

// import PractiseReact from "./Components/MovieApp/PractiseReact"
// import PractiseReact2 from "./Components/MovieApp/PractiseReact2"

// import Moviecard2  from './Components/MovieApp/Moviecard2';

import GreatBeer  from './Components/MovieCards/GreatBeer'
import BadMonkey from "./Components/MovieCards/BadMonkey"

import Disclimer from "./Components/MovieCards/Disclimer"

import Cherry from "./Components/MovieCards/Cherry"
import Harper from "./Components/MovieCards/Harper"
import Palmer from "./Components/MovieCards/Palmer"
import SlowHorses from "./Components/MovieCards/SlowHorses"
import Badsis from "./Components/MovieCards/Badsis"
import Pachinko from "./Components/MovieCards/Pachinko"
// import Login from "./ChaiaurCode/Login"
// import Home from "./ChaiaurCode/Home";
// import cons from "./Simple/cons";
// import Profile from "./ChaiaurCode/Profile"
// import UseContextProvider from "./Simple/UserContextProvider"


// Line second

import Silo from "./Components/MovieCards/Silo"
import TheMorning from "./Components/MovieCards/TheMorning"
import Trying from "./Components/MovieCards/Trying"
import TedLasso from "./Components/MovieCards/TedLasso"
import Severance from "./Components/MovieCards/Severance"
import Shrinking  from "./Components/MovieCards/Shrinking"
import YouwouldDoIt from "./Components/MovieCards/YouwouldDoIt"
import GhostWriter from "./Components/MovieCards/GhostWriter"
// import CircuitBreakers from"./Components/MovieCards/CircuitBreakers"
// import VideoSlider from "./Components/MovieApp/VideoSlider";


// Line THREE
import CircuitBreakers from"./Components/MovieCards/CircuitBreakers"
// import CoolonyPit from "./Components/MovieCards/MovieCardsL3/CoolonyPit"

import GreatPumkin from "./Components/MovieCards/MovieCardsL3/GreatPumkin"

import TheCharlieCar from "./Components/MovieCards/MovieCardsL3/TheCharlieCar"
import TheInstigator from "./Components/MovieCards/MovieCardsL3/TheInstigator"
import Ghosted from "./Components/MovieCards/MovieCardsL3/Ghosted"
import ThefamilyPlan from "./Components/MovieCards/MovieCardsL3/ThefamilyPlan"
import TomHanks from "./Components/MovieCards/MovieCardsL3/TomHanks"


// Line Four

import Loot from "./Components/MovieCards/MovieCardsL4/Loot"
import PalmRoyal from "./Components/MovieCards/MovieCardsL4/PalmRoyal"
import FloraSon from "./Components/MovieCards/MovieCardsL4/FloraSon"
import Platonic from "./Components/MovieCards/MovieCardsL4/Platonic"
import TheBuccaners from "./Components/MovieCards/MovieCardsL4/TheBuccaners"
// import TedLasso2 from "./Components/MovieCards/MovieCardsL4/TedLasso2"



// Line 5
import Serverance2 from "./Components/MovieCards/MovieCardsL5/Serverance2";
import AllManK from "./Components/MovieCards/MovieCardsL5/AllManK";
import Invision from "./Components/MovieCards/MovieCardsL5/Invision";

import DarkMatter from "./Components/MovieCards/MovieCardsL5/DarkMatter";

import Fondation2 from "./Components/MovieCards/MovieCardsL5/Fondation2";
import Silo2 from "./Components/MovieCards/MovieCardsL5/Silo2";
// import TheInvestigator2 from "./Components/MovieCards/MovieCardsL6/TheInvestigator2";
// import { Foundation } from "@mui/icons-material";


// Line 6
import Argyyle from "./Components/MovieCards/MovieCardsL6/Argyyle";
import CowboyCartel from "./Components/MovieCards/MovieCardsL6/CowboyCartel";
import GreatestBeer2 from "./Components/MovieCards/MovieCardsL6/GreatestBeer2";
import Lucky from "./Components/MovieCards/MovieCardsL6/Lucky";
// import Nepolian" from "./Components/MovieCards/MovieCardsL6/Nepolian";
import Nepolian from "./Components/MovieCards/MovieCardsL6/Nepolian";
import Palmer2 from "./Components/MovieCards/MovieCardsL6/Palmer2";
// import PitWolffes2 from "./Components/MovieCards/MovieCardsL6/PitWolffes2";
import SheIsLast from "./Components/MovieCards/MovieCardsL6/SheIsLast";
import TheInvestigator2 from "./Components/MovieCards/MovieCardsL6/TheInvestigator2";
// import TomHanks from "./Components/MovieCards/MovieCardsL6/TomHanks";

// import TheCharlieCar from "./Components/MovieCards/MovieCardsL3/TheCharlieCar"


// Line 7

import BigBestes from "./Components/MovieCards/MovieCardsL7/BigBestes"
import LastWomen from "./Components/MovieCards/MovieCardsL7/LastWomen";
import CowBoyCartel2 from "./Components/MovieCards/MovieCardsL7/CowBoyCartel2"
import Planet from "./Components/MovieCards/MovieCardsL7/Planet"
import PresidentWar from "./Components/MovieCards/MovieCardsL7/PresidentWar"
import TinyWorld from "./Components/MovieCards/MovieCardsL7/TinyWorld"
import Omniore from "./Components/MovieCards/MovieCardsL7/Omniore"
import EarthSound from "./Components/MovieCards/MovieCardsL7/EarthSound"
import EarthAtNight from "./Components/MovieCards/MovieCardsL7/EarthAtNight"
import JohnLennon from "./Components/MovieCards/MovieCardsL7/JohnLennon"



import BadMonkeys1 from "./Components/MovieApp/MovieSeason/Line1/BadMonkeys1"


import Signin from "./Components/MovieApp/Signin/Signin"
function App(){


  return(
   
<>



 <Nav />


<VideoSlider  />

 <MovieCards  />
 
<Moviecard2 />
<Moviecard3 />
<Moviecard4 />
<Moviecard5 />
<Moviecard6 />
<Moviecard7 />

<CardSliderM />
<TrailerCard/>
 <Footer />



<FooterList />
<FooterLast />   


{/* Line1 */}

{/* <GreatBeer/> */}
  {/* <Cherry   /> */}
 {/* <Disclimer />   */}

 {/* <BadMonkey />  */}
 {/* <Badsis />    */}
 {/* <Harper /> */}

{/* <Palmer2 /> */}
 {/* <SlowHorses /> */}
{/* <Pachinko /> */}


  {/* MovieCards2 */}  */
 {/* <Silo /> */}
{/* <TheMorning/> */}
{/* <Trying /> */}
{/* <TedLasso/> */}
{/* <Severance /> */}
{/* <Shrinking /> */}
{/* <YouwouldDoIt/> */}
{/* <GhostWriter /> */}
{/* <CircuitBreakers /> */}
{/* <GreatPumkin />   */}


{/* // MovieCards3  */}
 {/* <CoolonyPit />  */}
{/* <TheCharlieCar /> */}
{/* <TheInstigator /> */}
{/* <Ghosted /> */}
{/* <ThefamilyPlan/> */}
{/* <TomHanks /> */}
{/* <Fondation2 /> */}




{/* // MovieCards4  */}
{/* <Loot /> */}
{/* <PalmRoyal/> */}
{/* <FloraSon/>  */}
{/* <Platonic />  */}
 {/* <TedLasso2 />  */}
{/* <TheBuccaners />  */}


{/* MovieCards5  */}

 {/* <Serverance2 /> */}
 {/* <AllManK /> */}
{/* <Invision /> */}
{/* <DarkMatter /> */}
{/* <Fondation2 /> */}
{/* <Silo2/>  */}


{/* MovieCards6  */}
{/* <Argyyle /> */}
{/* <CowboyCartel/> */}
{/* <GreatestBeer2/> */}
{/* <Lucky /> */}
{/* <Nepolian/> */}
{/* <Palmer2/> */}

{/* <SheIsLast /> */}
{/* <TheInvestigator2/> */}
{/* <TomHanks/> */}
{/* <PitWolffes2 /> */}



{/* MovieCards7  */}
{/* <LastWomen /> */}
{/* <CowBoyCartel2/>  */}

{/* <Planet /> */}
{/* <EarthSound /> */}
{/* <Omniore /> */}
{/* <TinyWorld /> */}
{/* <EarthAtNight /> */}
{/* <JohnLennon /> */}
{/* <PresidentWar />  */}
{/* <BigBestes /> */}
{/* <BadMonkeys1 /> */}




<Signin/>


















{/* 
<Router>
    <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/pastSeminar" element={<PastSeminar />} />
          <Route path="/register" element={<Register/>} />*/}
          {/* <Route path="/" element={<ImageSliderani/>}/> 
          <Route path="/movie/:title" element={<Bannerani/>}/>
        </Routes>
    </div>
    </Router> */} 
   </>
  
  )
}


export default App
