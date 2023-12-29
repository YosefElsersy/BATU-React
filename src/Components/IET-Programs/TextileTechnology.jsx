import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/TextileTechnology.css'
import Nav from '../Nav & Footer/Nav'
import Footer from '../Nav & Footer/Footer'
import ScrollToTop from 'react-scroll-to-top'
import { ReactComponent as CustomArrowIcon } from '../imgs/icons-scroll-up-100.svg';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


export default function TextileTechnology() {
    useEffect(() => {
        // Set the document title when the component mounts
        document.title = 'TextileTechnology - BATU';
    
        // Optionally, you can clear the title when the component unmounts
        return () => {
          document.title = 'BATU'; // Reset the document title
        };
      }, []);
      const {t} = useTranslation();
  return (
    <>
    <Nav />
    <div>
  <div className="container-fluid p-0">
    {/* Section with image and text centered */}
    <div className="cover-section17">
      <div id="cover-text" className="text-center text-white">
        <h2>{t("TextileTechnology1")}</h2>
        <p><Link to='/'>{t("home")}</Link> / <Link to='/IET'>{t("FacultyofIndustry")}</Link> / {t("TextileTechnology1")}
        </p>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="width">
      <p>{t("Textiletechnology")}</p>
      <h5>{t("Hereare")}</h5>
      <ul>
        <li>{t("spinning")}
        </li>
        <li>{t("Fiberpreparation")}</li>
        <li>{t("Fabric")}</li>
        <li>{t("Chemical")}</li>
        <li>{t("Numerical")}</li>
        <li>{t("Smarttissue")}</li>
      </ul>
    
      <p>{t("Textiletechnology12")}</p>
    </div>
  </div>
</div>
    <Footer />
    <ScrollToTop
          smooth
          component={<CustomArrowIcon />}
          style={{
            background: 'white',
            borderRadius: '50%', // Border radius for a circular button
            boxShadow: '1px 2px 25px rgba(0, 0 , 0, 0.5)',
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
