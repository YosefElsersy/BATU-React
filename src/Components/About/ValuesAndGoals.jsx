import React from 'react'
import '../Css/ValuesAndGoals.css'
import { Link } from 'react-router-dom'
import Nav from '../Nav & Footer/Nav'
import Footer from '../Nav & Footer/Footer'
import GoodWork from '../imgs/Good work ethics and behaviour.svg'
import LeaderShip from '../imgs/Leadership and teamwork.svg'
import Integrity from '../imgs/Integrity.svg'
import Intellectual from '../imgs/intellectual-property.svg'
import Justice from '../imgs/Justice and equality.svg'
import Cooperation from '../imgs/cooperation.svg'
import Diversity from '../imgs/Diversity and sustainability.svg'
import { useEffect } from 'react'
import ScrollToTop from 'react-scroll-to-top'
import { ReactComponent as CustomArrowIcon } from '../imgs/icons-scroll-up-100.svg';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal'

export default function ValuesAndGoals() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.text', {
      origin: 'left', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
    ScrollReveal().reveal('#c1', {
      origin: 'bottom', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
    ScrollReveal().reveal('#c2', {
      origin: 'bottom', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });


  }, []);
  const {t} = useTranslation();
  useEffect(() => {
    // Set the document title when the component mounts
    document.title = t("Values And Goals - BATU");

    // Optionally, you can clear the title when the component unmounts
    return () => {
      document.title = 'BATU'; // Reset the document title
    };
  }, [t]);
  return (
    <>
    <Nav/>
  {/*------------------------------------  About-photo  ---------------------------------------*/}
  <div className="container-fluid p-0">
    {/* Section with image and text centered */}
    <div className="cover-section4">
      <div id="cover-text" className="text-center text-white">
        <h2 style={{ textTransform: "uppercase" }}>{t("ValuesandGoals")}</h2>
        <p>
          <Link to='/'>{t("home")}</Link> / {t("ValuesandGoals")}
        </p>
      </div>
    </div>
  </div>
  {/*------------------------------------  About-photo  ---------------------------------------*/}
  <h1
    className="hover-effect mt-5"
    style={{
      textTransform: "uppercase",
      fontSize: "3em",
      paddingBottom: "0.5em",
      textAlign: "center"
    }}
  >
    {t("ValuesandGoals")}
  </h1>
  <div className="container">
    <div className="row">
      <div className="col-7 mx-auto">
        <div className="d-flex">
          <span className="pe-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              style={{ fill: "rgba(79, 178, 178, 1)", transform: "msFilter" }}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z" />
            </svg>
          </span>
          <span className="text">
            {t("Creatinganewintegrated")}
          </span>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-7 mx-auto">
        <div className="d-flex">
          <span className="pe-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              style={{ fill: "rgba(79, 178, 178, 1)", transform: "msFilter" }}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z" />
            </svg>
          </span>
          <span className="text">
            {t("Applyingandexploiting")}
          </span>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-7 mx-auto">
        <div className="d-flex">
          <span className="pe-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              style={{ fill: "rgba(79, 178, 178, 1)", transform: "msFilter" }}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z" />
            </svg>
          </span>
          <span className="text">
           {t("Providingtechnological")}
          </span>
        </div>
        <p />
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-7 mx-auto">
        <div className="d-flex">
          <span className="pe-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              style={{ fill: "rgba(79, 178, 178, 1)", transform: "msFilter" }}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z" />
            </svg>
          </span>
          <span className="text">
            {t("Preparingtechnologists")}
          </span>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-7 mx-auto">
        <div className="d-flex">
          <span className="pe-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              style={{ fill: "rgba(79, 178, 178, 1)", transform: "msFilter" }}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z" />
            </svg>
          </span>
          <span className="text">
            {t("Establishing1")}
          </span>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-7 mx-auto">
        <div className="d-flex">
          <span className="pe-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              style={{ fill: "rgba(79, 178, 178, 1)", transform: "msFilter" }}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z" />
            </svg>
          </span>
          <span className="text">
            {t("Participationofthe")}
          </span>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-7 mx-auto">
        <div className="d-flex">
          <span className="pe-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              style={{ fill: "rgba(79, 178, 178, 1)", transform: "msFilter" }}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z" />
            </svg>
          </span>
          <span className="text">
            {t("Providingtechnical")}
          </span>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-7 mx-auto">
        <div className="d-flex">
          <span className="pe-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              style={{ fill: "rgba(79, 178, 178, 1)", transform: "msFilter" }}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z" />
            </svg>
          </span>
          <span className="text">
            {t("Participationin")}
          </span>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-7 mx-auto">
        <div className="d-flex">
          <span className="pe-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              style={{ fill: "rgba(79, 178, 178, 1)", transform: "msFilter" }}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z" />
            </svg>
          </span>
          <span className="text">
            {t("Providingits")}
          </span>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-7 mx-auto">
        <div className="d-flex">
          <span className="pe-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              style={{ fill: "rgba(79, 178, 178, 1)", transform: "msFilter" }}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z" />
            </svg>
          </span>
          <span className="text">
            {t("Preparingstudies")}
          </span>
        </div>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-7 mx-auto">
        <div className="d-flex">
          <span className="pe-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              style={{ fill: "rgba(79, 178, 178, 1)", transform: "msFilter" }}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z" />
            </svg>
          </span>
          <span className="text">
            {t("Providingconsultations")}
          </span>
        </div>
      </div>
    </div>
  </div>
  {/*-------------- new-section -------------*/}
  <h1
    className="hover-effect mt-5"
    style={{
      textTransform: "uppercase",
      fontSize: "3em",
      paddingBottom: "0.5em",
      textAlign: "center"
    }}
  >
    {t("Universityvalues")}
  </h1>
  <div className="container">
    <div className="only d-flex justify-content-center">
      <div id='c1' className="card1 rounded-2 text-center">
        <img
          src={GoodWork}
          className="mb-2 mt-sm-3 mb-sm-3"
          alt=""
        />
        <h2>{t("Goodwork")}</h2>
      </div>
    </div>
    <div className="d-flex justify-content-around flex-wrap align-items-center">
      <div id='c2' className="card2 rounded-2 text-center mt-3">
        <img
          src={LeaderShip}
          className="mt-2 mb-3"
          alt=""
        />
        <h2>{t("Leadershipandteamwork")}</h2>
      </div>
      <div id='c2' className="card2 rounded-2 text-center mt-3">
        <img src={Integrity} className="mt-2 mb-3" alt="" />
        <h2>{t("Integrity")}</h2>
      </div>
      <div id='c2' className="card2 rounded-2 text-center mt-3">
        <img
          src={Intellectual}
          className="mt-2 mb-3"
          alt=""
        />
        <h2>{t("Respect")}</h2>
      </div>
      <div id='c2' className="card2 rounded-2 text-center mt-3">
        <img
          src={Justice}
          className="mt-2 mb-3"
          alt=""
        />
        <h2>{t("Justice")}</h2>
      </div>
      <div id='c2' className="card2 rounded-2 text-center mt-3">
        <img src={Cooperation} className="mt-2 mb-3" alt="" />
        <h2>{t("Openness")}</h2>
      </div>
      <div id='c2' className="card2 rounded-2 text-center mt-3">
        <img
          src={Diversity}
          className="mt-2 mb-3"
          alt=""
        />
        <h2>{t("Diversity")}</h2>
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
