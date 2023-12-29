import React from 'react'
import { Link } from 'react-router-dom';
import '../Css/VisionAndMission.css'
import Footer from '../Nav & Footer/Footer';
import Nav from '../Nav & Footer/Nav';
import ScrollToTop from 'react-scroll-to-top'
import { ReactComponent as CustomArrowIcon } from '../imgs/icons-scroll-up-100.svg';
import IconsIdea from '../imgs/icons-idea.svg'
import Mission from '../imgs/Mission.svg'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

export default function VisionAndMission() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.img55', {
      origin: 'right', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
    ScrollReveal().reveal('.text5', {
      origin: 'left', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

  }, []);
  const {t} = useTranslation();
  useEffect(() => {
    // Set the document title when the component mounts
    document.title = t("Vision And Mission - BATU");

    // Optionally, you can clear the title when the component unmounts
    return () => {
      document.title = 'BATU'; // Reset the document title
    };
  }, [t]);
  return (
    <>
    <Nav />
  {/*------------------------------------  About-photo  ---------------------------------------*/}
  <div className="container-fluid p-0">
    {/* Section with image and text centered */}
    <div className="cover-section3">
      <div id="cover-text" className="text-center text-white">
        <h2>
        {t("Visionandmission")}
        </h2>
        <p>
          <Link to='/'>{t("home")}</Link> / {t("Visionandmission")}
        </p>
      </div>
    </div>
  </div>
  {/*------------------------------------  About-photo  ---------------------------------------*/}
  <div className="container">
    <div id="box" className="box d-flex align-items-center p-3">
      <div className="img55">
        <img src={IconsIdea} alt="" />
      </div>
      <div className="text5">
        <h4 id="h4">{t("universityvision")}</h4>
        <p>
          {t("Tocontribute")}
        </p>
      </div>
    </div>
    <div className="box-1 d-flex align-items-center p-3">
      <div className="text5">
        <h4 id="h4">{t("universitymission")}</h4>
        <p>
          {t("Providing")}
        </p>
      </div>
      <div className="img55">
        <img src={Mission} alt="" />
      </div>
    </div>
  </div>

    <Footer />
    <ScrollToTop
        smooth
        component={<CustomArrowIcon />}
        style={{
          background: "white",
          borderRadius: '100%', // Border radius for a circular button
          boxShadow: '1px 2px 25px rgba(0, 0 , 0, 0.5)', 
          width: "50px",
          height: "auto",
        }}
      />
    </>
  )
}
