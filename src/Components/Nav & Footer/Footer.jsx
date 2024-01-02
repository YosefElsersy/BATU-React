import React from 'react'
import '../Css/Footer.css'
import Logo from '../imgs/Borg_El_Arab_Technological_University_logo.svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto', // You can change this to 'auto' for an instant jump
    });
  };
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('footer', {
      origin: 'bottom', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });


  }, []);
  const {t} = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
        <>
       <footer className="text-center text-lg-start bg-white text-muted">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
    </div>
  </section>
  <section className>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">{t("contactus")}</h6>
          <div className="text-center text-md-start">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: 'msFilter'}}><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z" /></svg>
            <p>
              {t("Borg")}<br />{t("Alexandria")}
            </p>
          </div>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: 'msFilter'}}><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" /></svg>  
            {" "}batu.mediadept@gmail.com
          </p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: 'msFilter'}}><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z" /></svg> + 01 234 567 88</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: 'msFilter'}}><path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z" /></svg> + 01 234 567 89</p>
        </div>
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-xl-5 mb-lg-5">
          {/* Quick Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            {t("QuickLinks")}
          </h6>
          <ul className="list-unstyled">
            <li>
              <p className="text-dark" href="#"><span className="dot" /> {t("GraduateStudies")}</p>
              <ul className="list-unstyled ml-4" style={{marginLeft: '25px'}}> {/* Adjust the margin here */}
                <li><Link className="text-dark" to='/UnderConstruction' onClick={scrollToTop}>{t("Master’s")}</Link></li>
                <li><Link className="text-dark" to='/UnderConstruction' onClick={scrollToTop}>{t("ProfessionalTechnology")}</Link></li>
                <li><Link className="text-dark" to='/UnderConstruction' onClick={scrollToTop}>{t("PostgraduateDiploma")}</Link></li>
              </ul>
            </li>
            <li><Link className="text-dark" to='/UnderConstruction' onClick={scrollToTop}><span className="dot" /> {t("Careers")}</Link></li>
            <li><Link className="text-dark" to='/UnderConstruction' onClick={scrollToTop}><span className="dot" /> {t("Services")}</Link></li>
            <li><Link className="text-dark" to="/CooperationProtocols" onClick={scrollToTop}><span className="dot" /> {t("CooperationProtocols")}</Link></li>
            <li><Link className="text-dark" to='/Gallery' onClick={scrollToTop}><span className="dot" /> {t("Labs&workshops")}</Link></li>
            <li><Link className="text-dark" to='/UnderConstruction' onClick={scrollToTop}><span className="dot" /> {t("Training&courses")}</Link></li>
            <li><Link className="text-dark" to='/ContactUs' onClick={scrollToTop}><span className="dot" /> {t("ContactUs")}</Link></li>
          </ul>
        </div>
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            {t("RELATEDWEBSITES")}
          </h6>
          <p>
            <a id="to-blue" className="text-decoration-none text-dark" href="http://portal.mohesr.gov.eg/ar-eg/Pages/Home.aspx" target="_blank" rel="noreferrer"> {t("MinistryofHigher")}</a>
          </p>
          <p>
            <a id="to-blue" className="text-decoration-none text-dark" href="https://moe.gov.eg/" target="_blank" rel="noreferrer"> {t("TheMinistryofEducation")}</a>
          </p>
          <p>
            <a id="to-blue" className="text-decoration-none text-dark" href="http://www.scu.eun.eg/" target="_blank" rel="noreferrer"> {t("SupremeCouncil")}</a>
          </p>
          <p>
            <a id="to-blue" className="text-decoration-none text-dark " href="https://scu.eg/" target="_blank" rel="noreferrer"> {t("EgyptianUniversities")}</a>
          </p>
        </div>
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <Link className to='/' onClick={scrollToTop}>
              <img id="footer-logo" src={Logo} alt="" srcSet />
            </Link>
          </h6>
          <p>
            {t("Technologicaluniversitiesare")}
          </p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
  {t("Copyright ©")} {currentYear}{' '}
      <a className="text-reset fw-bold text-decoration-none" href="https://github.com/YosefElsersy" target="_blank" rel="noreferrer">
        Yosef Elsersy
      </a>
      {t(". All rights reserved")}
    </div>
  {/* Copyright */}
</footer>

        </>
  )
}
