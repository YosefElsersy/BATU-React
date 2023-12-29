import React from 'react';
import Nav from '../Nav & Footer/Nav';
import Footer from '../Nav & Footer/Footer';
import { Link } from 'react-router-dom';
import '../Css/UniversityPresident.css';
import PresidentPhoto from '../imgs/president-photo.jpg'
import ScrollToTop from 'react-scroll-to-top'
import { ReactComponent as CustomArrowIcon } from '../imgs/icons-scroll-up-100.svg';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

export default function UniversityPresident() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('#OPENING-SPEECH', {
      origin: 'top', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

    ScrollReveal().reveal('#president-photo', {
      origin: 'bottom', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
  }, []);
  const {t} = useTranslation();
  useEffect(() => {
    // Set the document title when the component mounts
    document.title = t("University President - BATU");

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
    <div className="cover-section2">
      <div id="cover-text" className="text-center text-white">
        <h2 style={{ textTransform: "uppercase" }}>{t("University'spresident")}</h2>
        <p>
          <Link to='/'>{t("home")}</Link> / {t("University'spresident")}
        </p>
      </div>
    </div>
  </div>
  {/*------------------------------------  About-photo  ---------------------------------------*/}
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-md-6">
        <h2
          id="h2-head"
          className="mt-5"
          style={{ textTransform: "uppercase" }}
        >
          {t("Prof.Dr.Mohamed")}
        </h2>
        <div className="d-flex justify-content-center">
          <img
            id="president-photo"
            src={PresidentPhoto}
            className="img-fluid mt-5 mb-4"
            alt="img"
          />
        </div>
      </div>
    </div>
  </div>
 <div id='OPENING-SPEECH'>
  <h1
    className="hover-effect mt-3"
    style={{
      textTransform: "uppercase",
      fontSize: "1.5em",
      paddingLeft: "1.9em",
      paddingBottom: "0.5em"
    }}
  >
    {t("Openingspeech")}
  </h1>
  <p
    style={{
      color: "#7e8890",
      maxWidth: "95em",
      paddingLeft: "3em",
      paddingRight: "3em"
    }}
  >
    {t("Technologicaleducation")}
    <br />
    <br />
    {t("Technologicaleducation")}
    <br />
    <br />
    {t("Technologicaleducation")}
    <br />
    <br />
    {t("Technologicaleducation")}
  </p>
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
