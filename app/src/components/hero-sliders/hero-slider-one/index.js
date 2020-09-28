import PropTypes from "prop-types";
import React from "react";
import Button from "../../UI/button";

import networkloop from '../../../assets/videos/network-loop.mp4';
import classes from '../../BackgroundVideo.module.css';
import styles from "../../../containers/hero-sliders/hero-slider-one/HeroSliderOne.module.scss";

import BuildWithAI from '../../../assets/images/awards/BuildWithAI.png';

const HeroSliderOneSingle = ({ data, styles, sliderClassName }) => {
  return (
    <div
      className={`${styles.slide} ${styles.sliderFixedHeight} ${
        styles.graBg1
      } ${sliderClassName ? sliderClassName : ""} d-flex align-items-center`}
    >
      <div className={classes.Container}>
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={networkloop} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
      <div className={classes.Content} >
          <div className={classes.SubContent} >
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-xl-12">
            <div className={`${styles.content}`}>
              <h1>{data.title}</h1>
              <p>{data.text}</p>
              <Button type="link" url={data.url} text="Learn More Here" />
            </div>
          </div>
          
<div className="col-12 col-12 col-12">
    <div className="col-12 col-12 col-12"> 
      <img
        src={require('../../../assets/images/awards/BuildWithAI.png')}
        alt="T-CUBE"
      />
    </div>
    
          </div>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default HeroSliderOneSingle;
