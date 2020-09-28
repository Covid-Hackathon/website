import React from 'react';
import classes from './BackgroundVideo.module.css';
import networkloop from '../assets/videos/network-loop.mp4';

import BuildWithAI from '../assets/images/awards/BuildWithAI.png';

import sliderData from "../data/hero-sliders/hero-slider-one.json";
import HeroSliderOneSingle from "../components/hero-sliders/hero-slider-one";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from "../containers/hero-sliders/hero-slider-one/HeroSliderOne.module.scss";

// Creates a functional (stateless) component
const BackgroundVideo = () => {
    const videoSource = networkloop
    const Hackmakers = BuildWithAI
    return (
        <div className={classes.Container}>
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={`hero-slider ${styles.heroSlider} ${styles.sliderOne}`}>
      
      <div className="slideActivation">
        <div>
          {sliderData &&
            sliderData.map((single, key) => {
              return (
                <HeroSliderOneSingle
                  data={single}
                  key={key}
                  styles={styles}
                />
              );
            })}
        </div>
      </div>
    </div>

        <div className={classes.Content} >
            <div className={classes.SubContent} >
            <img
                        src={Hackmakers}
                        alt="profile"
                        />
                <h1>Forecast, Estimate, and Anticipate with AI </h1>
                <p>An award winning model recognized by Oracle, Google, AWS, and IBM</p>
                <button type="button" className="btn btn-outline-dark">Get T-CUBE Today</button>
            </div>
            </div>
        </div>  
    )
}

export default BackgroundVideo