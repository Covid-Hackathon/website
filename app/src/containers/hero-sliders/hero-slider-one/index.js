import React from "react";
import classes from '../../../components/BackgroundVideo.module.css';

import sliderData from "../../../data/hero-sliders/hero-slider-one.json";
import HeroSliderOneSingle from "../../../components/hero-sliders/hero-slider-one";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from "./HeroSliderOne.module.scss";

import networkloop from "../../../assets/videos/network-loop.mp4";

const HeroSliderOne = () => {
    const videoSource = networkloop
    // loop: true,
    // speed: 1000,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false
    // },
    // watchSlidesVisibility: true,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true
    // },
    // renderPrevButton: () => (
    //   <button
    //     className={`${styles.swiperButtonPrev} ${styles.htSwiperButtonNav} swiper-button-prev`}
    //   >
    //     <IoIosArrowBack />
    //   </button>
    // ),
    // renderNextButton: () => (
    //   <button
    //     className={`${styles.swiperButtonNext} ${styles.htSwiperButtonNav} swiper-button-next`}
    //   >
    //     <IoIosArrowForward />
    //   </button>
    // )
  return (
    
    <div className={`hero-slider ${styles.heroSlider} ${styles.sliderOne}`}>
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

  );
};

export default HeroSliderOne;
