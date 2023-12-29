import React from 'react'
import Nav from '../Nav & Footer/Nav'
import '../Css/IET.css'
import Footer from '../Nav & Footer/Footer'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
import { ReactComponent as CustomArrowIcon } from '../imgs/icons-scroll-up-100.svg';
import DeanPhoto from '../imgs/Dean-photo.jpg'
import InformationCommunicationTechnology from '../imgs/Information&CommunicationTechnology.jpg'
import RailwaysTechnology from '../imgs/RailwaysTechnology.jpg'
import FoodProcessingTechnology from '../imgs/FoodProcessingTechnology.jpg'
import TractorsAndAgriculturalEquipmentTechnology from '../imgs/TractorsAndAgriculturalEquipmentTechnology.jpg'
import TextileTechnology from '../imgs/TextileTechnology.jpg'
import ComingSoon from '../imgs/Coming-Soon-wallpaper.jpg'
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal'

export default function IET() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.dean-photo', {
      origin: 'left', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

    ScrollReveal().reveal('#dean-text', {
      origin: 'right', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
  }, []);
  const {t} = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto', // You can change this to 'auto' for an instant jump
    });
  };
  useEffect(() => {
    // Set the document title when the component mounts
    document.title = t("IET - BATU");

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
    <div className="cover-section11">
      <div id="cover-text" className="text-center text-white">
        <h2>{t("FacultyofIndustry")}</h2>
        <p><Link to='/'>{t("home")}</Link> / {t("FacultyofIndustry")}</p>
      </div>
    </div>
  </div>
  {/*------------------------------------------------- Dean Section -----------------------------------------------------------*/}
  <div className="containerP dean-section" style={{marginTop: '3em', marginBottom: '3em'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="dean-photo ms-5">
            <img src={DeanPhoto} alt="img" className="img-fluid" />
          </div>
        </div>
        <div id='dean-text' className="col-md-8">
          <h3 style={{textTransform: 'uppercase', fontSize: '25px'}}><b>{t("DeanWord")}</b></h3>
          <h5>{t("Prof.Dr.IbrahimAl-Faham")}</h5>
          <p>{t("Technologyeducation1")}
          </p>
        </div>
      </div>
    </div>
  </div>
  <hr style={{borderTop: '2px solid #4fb2b2', width: '100%', borderBottom: '2px'}} />
  {/*------------------------------------ About Faculty ---------------------------------------*/}
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="text-lg-start">
          <h2 className="text-center" style={{textTransform: 'uppercase', fontSize: '25px', borderBottom: 'solid #4fb2b2', width: '16%', marginBottom: '0.5em'}}>{t("AboutFaculty")}</h2>
          <p className="text">
            {t("AFacultyofIndustryand")}
            <br />
            {t("Researchandinnovation")}
            <br />
            {t("Interdisciplinary2")}
            <br />
          </p>
        </div>
      </div>
    </div>
  </div>
  <hr style={{borderTop: '2px solid #4fb2b2', width: '100%', borderBottom: '2px'}} />
  {/*------------------------------------ University-Programs-photo  ---------------------------------------*/}
  <section class="wrapper">
    <div class="container-fostrap">
        <div class="content">
            <div class="container">
                {/* <!-- First Row of Cards --> */}
                <div class="row">
                    {/* <!-- Card 1 --> */}
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <Link class="img-card" to='/InformationCommunicationTechnology' onClick={scrollToTop}>
                                <img src={InformationCommunicationTechnology} alt='img' />
                            </Link>
                            <div class="card-content">
                                <h4 class="card-title2">
                                    <Link to='/InformationCommunicationTechnology' onClick={scrollToTop}> {t("Information&CommunicationTechnology")}
                                  </Link>
                                </h4>
                                <p class="">
                                    {t("Comprehensive")}
                                </p>
                            </div>
                            <div class="card-read-more">
                                <Link to='/InformationCommunicationTechnology' class="btn btn-link btn-block" onClick={scrollToTop}>
                                    {t("Read")}
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Card 2 --> */}
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <Link class="img-card" to='/RailwaysTechnology' onClick={scrollToTop}>
                                <img src={RailwaysTechnology} alt='img' />
                            </Link>
                            <div class="card-content">
                                <h4 class="card-title2">
                                    <Link to='/RailwaysTechnology' onClick={scrollToTop}> {t("RailwaysTechnology")}
                                  </Link>
                                </h4>
                                <p class="">
                                    {t("Hands-on1")} 
                                </p>
                            </div>
                            <div class="card-read-more">
                                <Link to='/RailwaysTechnology' class="btn btn-link btn-block" onClick={scrollToTop}>
                                    {t("Read")}
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Card 3 --> */}
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <Link class="img-card" to='/FoodProcessingTechnology' onClick={scrollToTop}>
                                <img src={FoodProcessingTechnology} alt='img' />
                            </Link>
                            <div class="card-content">
                                <h4 class="card-title2">
                                    <Link to='/FoodProcessingTechnology' onClick={scrollToTop}>{t("FoodProcessingTechnology")}
                                  </Link>
                                </h4>
                                <p class="">
                                    {t("Afoodprocessing1")}
                                </p>
                            </div>
                            <div class="card-read-more">
                                <Link to='/FoodProcessingTechnology' class="btn btn-link btn-block" onClick={scrollToTop}>
                                    {t("Read")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Second Row of Cards --> */}
                <div class="row">
                    {/* <!-- Card 4 --> */}
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <Link class="img-card" to='/TractorsAndAgriculturalEquipmentTechnology' onClick={scrollToTop}>
                                <img src={TractorsAndAgriculturalEquipmentTechnology} alt='img' />
                            </Link>
                            <div class="card-content">
                                <h4 class="card-title2">
                                    <Link to='/TractorsAndAgriculturalEquipmentTechnology' onClick={scrollToTop}> {t("TractorsAndAgriculturalEquipmentTechnology")}
                                  </Link>
                                </h4>
                                <p class="">
                                {t("ATractorsand")}
                                </p>
                            </div>
                            <div class="card-read-more">
                                <Link to='/TractorsAndAgriculturalEquipmentTechnology' class="btn btn-link btn-block" onClick={scrollToTop}>
                                    {t("Read")}
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Card 5 --> */}
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <Link class="img-card" to='/TextileTechnology' onClick={scrollToTop}>
                                <img src={TextileTechnology} alt='img' />
                            </Link>
                            <div class="card-content">
                                <h4 class="card-title2">
                                    <Link to='/TextileTechnology' onClick={scrollToTop}> {t("TextileTechnology")}
                                  </Link>
                                </h4>
                                <p class="">
                                {t("ATextileTechnology")} 
                                </p>
                            </div>
                            <div class="card-read-more">
                                <Link to='/TextileTechnology' class="btn btn-link btn-block" onClick={scrollToTop}>
                                    {t("Read")}
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Card 6 --> */}
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <Link class="img-card" to='/UnderConstruction' onClick={scrollToTop}>
                                <img src={ComingSoon} alt='img' />
                            </Link>
                            <div class="card-content">
                                <h4 class="card-title2">
                                    <Link to='/UnderConstruction' onClick={scrollToTop}>{t("ComingSoon")}
                                  </Link>
                                </h4>
                                <p class="">
                                {t("ComingSoon")}
                                </p>
                            </div>
                            <div class="card-read-more">
                                <Link to='/UnderConstruction' class="btn btn-link btn-block" onClick={scrollToTop}>
                                {t("ComingSoon")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
</section>




        <Footer />
        <ScrollToTop
          smooth
          component={<CustomArrowIcon />}
          style={{
            background: 'white',
            borderRadius: '50%', // Border radius for a circular button
            // boxShadow: '1px 2px 25px rgba(0, 0 , 0, 0.5)',
            width: '50px',
            height: 'auto',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          }}
        />
        </>
  )
}
