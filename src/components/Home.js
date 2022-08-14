import React from 'react'
import video from '../video/video.mp4'

import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom"
const Home = () => {

  function toggle() {
    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');


    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');


  }


  return (
    <div>
  
        <section className="showcase">
          <header>
            <h2 className="logo">Travel</h2>
            <div onClick={toggle} className="toggle"></div>
          </header>
          <video muted loop autoPlay >
            <source src={video} type="video/mp4" />
          </video>

          <div className="overlay"></div>
          <div className="text">
            <h2>Never Stop To </h2>
            <h3>Exploring The World</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.</p>
            <a href="/">Explore</a>
          </div>
          <ul className="social">
            <li><a href="/"><img src="https://i.ibb.co/x7P24fL/facebook.png" alt="logo" /></a></li>
            <li><a href="/"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="logo" /></a></li>
            <li><a href="/"><img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="logo" /></a></li>
          </ul>
        </section>
        <div className="menu">
          <ul>
            <li ><NavLink to="/">Home </NavLink></li>
            <li ><NavLink to="/about">About</NavLink></li>
            <li ><NavLink to="/contact">Contact</NavLink></li>
            <li ><NavLink to="/login">Login</NavLink></li>
            <li ><NavLink to="/signup">Registration</NavLink></li>
          </ul>
        </div>

  
    </div>
  )
}

export default Home
