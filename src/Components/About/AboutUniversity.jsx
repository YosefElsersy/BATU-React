import React from 'react'
import Nav from '../Nav & Footer/Nav'
import Footer from '../Nav & Footer/Footer'
import '../Css/About.css'
import AutoPlayingPhoto1 from '../imgs/autoplaying-photo1.jpg'
import AutoPlayingPhoto2 from '../imgs/autoplaying-photo2.jpg'
import ScrollToTop from 'react-scroll-to-top'
import { ReactComponent as CustomArrowIcon } from '../imgs/icons-scroll-up-100.svg';
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal'

export default function AboutUniversity() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('#part-1', {
      origin: 'left', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

    ScrollReveal().reveal('#part-2', {
      origin: 'right', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
  }, []);
  const {t} = useTranslation();
  useEffect(() => {
    // Set the document title when the component mounts
    document.title = t("About University - BATU");
    

    // Optionally, you can clear the title when the component unmounts
    return () => {
      document.title = 'BATU'; // Reset the document title
    };
  }, [t]);
  
  return (
    <>
      <Nav />

      <div>
  {/*------------------------------------  About-photo  ---------------------------------------*/}
  <div className="container-fluid p-0">
    {/* Section with image and text centered */}
    <div className="cover-section1">
      <div id="cover-text" className="text-center text-white">
        <h2>{t("ABOUTUNIVERSITY")}</h2>
        <p><a href="/">{t("home")}</a> / {t("ABOUTUNIVERSITY")}</p>
      </div>
    </div>
  </div>
  {/*------------------------------------  About-photo  ---------------------------------------*/}
  <div className="container mt-5">
    {/* First Section */}
    <div className="row for">
      <div id="part-1" className="col-md-6 ">
        <h2>Section 1</h2>
        <p> {t("BorgElArabTechnological")} <br /> {t("BorgElArabTechnological2")}
        </p>
      </div>
      <div id="part-2" className="col-md-6">
        <img src={AutoPlayingPhoto1} alt="img" className="img-fluid" />
      </div>
    </div>
    {/* Second Section */}
    <div className="row mt-4 for">
      <div id="part-1" className="col-md-6">
        <h2>Section 2</h2>
        <p>{t("BorgElArabTechnological")} <br /> {t("BorgElArabTechnological2")}
        </p>
      </div>
      <div id="part-2" className="col-md-6">
        <img src={AutoPlayingPhoto1} alt="img" className="img-fluid" />
      </div>
    </div>
    {/* Third Section */}
    <div className="row mt-4 for">
      <div id="part-1" className="col-md-6">
        <h2>Section 3</h2>
        <p>{t("BorgElArabTechnological")} <br /> {t("BorgElArabTechnological2")}
        </p>
      </div>
      <div id="part-2" className="col-md-6">
        <img src={AutoPlayingPhoto1} alt="img" className="img-fluid" />
      </div>
    </div>
    {/* Forth Section */}
    <div className="row mt-4 for">
      <div id="part-1" className="col-md-6">
        <h2>Section 4</h2>
        <p>{t("BorgElArabTechnological")} <br /> {t("BorgElArabTechnological2")}
        </p>
      </div>
      <div id="part-2" className="col-md-6">
        <img src={AutoPlayingPhoto2} alt="img" className="img-fluid" />
      </div>
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
