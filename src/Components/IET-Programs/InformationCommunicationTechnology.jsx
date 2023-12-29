import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/InformationCommunicationTechnology.css'
import Nav from '../Nav & Footer/Nav'
import Footer from '../Nav & Footer/Footer'
import ScrollToTop from 'react-scroll-to-top'
import { ReactComponent as CustomArrowIcon } from '../imgs/icons-scroll-up-100.svg';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


export default function InformationCommunicationTechnology() {
    useEffect(() => {
        // Set the document title when the component mounts
        document.title = 'InformationCommunicationTechnology - BATU';
    
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
    <div className="cover-section13">
      <div id="cover-text" className="text-center text-white">
        <h2>{t("Information")}</h2>
        <p><Link to='/'>{t("home")}</Link> / <Link to='/IET'>{t("FacultyofIndustry")}</Link> / {t("Information")}
        </p>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="width">
      <p>{t("Thisprogram")}</p>
      <h5>{t("Areasof")}</h5>
      <ul>
        <li>{t("InformationTechnologybasics.")}</li>
        <li>{t("ComputerScienceandComputerEngineering.")}</li>
        <li>{t("Databases")}</li>
        <li>{t("Electronic")}</li>
        <li>{t("Communication")}</li>
        <li>{t("Informationandnetworksystems.")}</li>
      </ul>
      <h5>{t("FunctionalTasks")}</h5>
      <ul>
        <li>{t("Planning")}</li>
        <li>{t("Using")}</li>
        <li>{t("Managing")}</li>
        <li>{t("Usingthe")}</li>
        <li>{t("Strategic")}</li>
        <li>{t("Developing1")}</li>
        <li>{t("Manager1")}</li>
        <li>{t("Executive")}</li>
        <li>{t("Software")}</li>
      </ul>
      <p className="over">{t("Besides")}</p>
      <p>{t("Salaries")}</p>
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
