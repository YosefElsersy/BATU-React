import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import { useEffect } from 'react'
import { ReactComponent as CustomArrowIcon } from '../imgs/icons-scroll-up-100.svg';
import Nav from '../Nav & Footer/Nav';
import Footer from '../Nav & Footer/Footer';
import DeanPhoto from '../imgs/Dean-photo.jpg'
import { Link } from 'react-router-dom';
import '../Css/HST.css'
import PharmaceuticalIndustryTechnology from '../imgs/Pharmaceutical-Industry-Technology.jpg'
import DentalProstheticsTechnology from '../imgs/Dental-Prosthetics-Technology.jpg'
import SpecializedHealthcareTechnician from '../imgs/Specialized-Healthcare-Technician.jpg'
import HealthInformaticsManagement from '../imgs/Health-Informatics-Management.jpg'
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

export default function HST() {
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
    document.title = t("HST - BATU");

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
    <div className="cover-section12">
      <div id="cover-text" className="text-center text-white">
        <h2>{t("FacultyofHealth")}</h2>
        <p><Link to='/'>{t("home")}</Link> / {t("FacultyofHealth")}</p>
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
          <h5>{t("Prof.Dr.RaniaElSharkawy")}</h5>
          <p>{t("Technologyeducationplays")}
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
          {t("AFacultyofHealth")}
            <br /> 
            {t("Typically")}<br />
             {t("Thisfaculty")}<br />
              {t("Facultymembers")}<br />
               {t("Interdisciplinary")}<br />
                {t("Itoften")}<br />
                 {t("Ethical")}<br />
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
                            <Link class="img-card" to='/PharmaceuticalIndustryTechnology' onClick={scrollToTop}>
                                <img src={PharmaceuticalIndustryTechnology} alt='img' />
                            </Link>
                            <div class="card-content">
                                <h4 class="card-title2">
                                    <Link to='/PharmaceuticalIndustryTechnology' onClick={scrollToTop}>{t("Pharmaceutical")}
                                  </Link>
                                </h4>
                                <p class="">
                                {t("TheDepartment")}
                                </p>
                            </div>
                            <div class="card-read-more">
                                <Link to='/PharmaceuticalIndustryTechnology' class="btn btn-link btn-block" onClick={scrollToTop}>
                                    {t("Read")}
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Card 2 --> */}
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <Link class="img-card" to='/DentalProstheticsTechnology' onClick={scrollToTop}>
                                <img src={DentalProstheticsTechnology} alt='img' />
                            </Link>
                            <div class="card-content">
                                <h4 class="card-title2">
                                    <Link to='/DentalProstheticsTechnology' onClick={scrollToTop}>{t("Dental")}
                                  </Link>
                                </h4>
                                <p class="">
                                {t("Hands-on")}
                                </p>
                            </div>
                            <div class="card-read-more">
                                <Link to='/DentalProstheticsTechnology' class="btn btn-link btn-block" onClick={scrollToTop}>
                                    {t("Read")}
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Card 3 --> */}
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <Link class="img-card" to='/SpecializedHealthcareTechnician' onClick={scrollToTop}>
                                <img src={SpecializedHealthcareTechnician} alt='img' />
                            </Link>
                            <div class="card-content">
                                <h4 class="card-title2">
                                    <Link to='/SpecializedHealthcareTechnician' onClick={scrollToTop}>{t("Specialized")}
                                  </Link>
                                </h4>
                                <p class="">
                                {t("Afoodprocessing")}
                                </p>
                            </div>
                            <div class="card-read-more">
                                <Link to='/SpecializedHealthcareTechnician' class="btn btn-link btn-block" onClick={scrollToTop}>
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
                            <Link class="img-card" to='/HealthInformaticsManagement' onClick={scrollToTop}>
                                <img src={HealthInformaticsManagement} alt='img' />
                            </Link>
                            <div class="card-content">
                                <h4 class="card-title2">
                                    <Link to='/HealthInformaticsManagement' onClick={scrollToTop}> {t("Health")}
                                  </Link>
                                </h4>
                                <p class="">
                                {t("HealthInformatics")}
                                </p>
                            </div>
                            <div class="card-read-more">
                                <Link to='/HealthInformaticsManagement' class="btn btn-link btn-block" onClick={scrollToTop}>
                                    {t("Read")}
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Card 5 --> */}
                    <div class="col-xs-12 col-sm-4">
                    <div class="card">
                            <Link class="img-card" to='/UnderConstruction' onClick={scrollToTop}>
                                <img src={PharmaceuticalIndustryTechnology} alt='img' />
                            </Link>
                            <div class="card-content">
                                <h4 class="card-title2">
                                    <Link to='/UnderConstruction' onClick={scrollToTop}>{t("ComingSoon")} </Link>
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
                    
                    {/* <!-- Card 6 --> */}
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <Link class="img-card" to='/UnderConstruction' onClick={scrollToTop}>
                                <img src={PharmaceuticalIndustryTechnology} alt='img' />
                            </Link>
                            <div class="card-content">
                                <h4 class="card-title2">
                                    <Link to='/UnderConstruction' onClick={scrollToTop}>{t("ComingSoon")} </Link>
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
