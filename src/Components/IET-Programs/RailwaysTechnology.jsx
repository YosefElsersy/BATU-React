import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/InformationCommunicationTechnology.css'
import Nav from '../Nav & Footer/Nav'
import Footer from '../Nav & Footer/Footer'
import ScrollToTop from 'react-scroll-to-top'
import { ReactComponent as CustomArrowIcon } from '../imgs/icons-scroll-up-100.svg';
import { useEffect } from 'react';
import '../Css/RailwaysTechnology.css'
import { useTranslation } from 'react-i18next';

export default function RailwaysTechnology() {
    useEffect(() => {
        // Set the document title when the component mounts
        document.title = 'RailwaysTechnology - BATU';
    
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
    <div className="cover-section14">
      <div id="cover-text" className="text-center text-white">
        <h2>{t("RailwaysTechnology")}</h2>
        <p><Link to='/'>{t("home")}</Link> / <Link to='/IET'>{t("FacultyofIndustry")}</Link> / {t("RailwaysTechnology")}
        </p>
      </div>
    </div>
  </div>
  <div class="container">
        <div class="width">
            <p>{t("TheDepartment3")}</p>
            <h5>{t("Areasofstudy")}</h5>
            <ul>
                <li>{t("Railroad")}</li>
                <li>{t("TrainTechnology")}</li>
                <li>{t("Signaling")}</li>
                <li>{t("Preventive")}
</li>
                <li>{t("Trainschedule")}
</li>
                <li>{t("Rail")}</li>
                <p>{t("Thisdepartment11")}
</p>
            </ul>
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
