import React from 'react'
import { Link } from 'react-router-dom'
import './Css/FAQs.css'
import ScrollToTop from 'react-scroll-to-top'
import { ReactComponent as CustomArrowIcon } from './imgs/icons-scroll-up-100.svg';
import Nav from './Nav & Footer/Nav';
import Footer from './Nav & Footer/Footer';
import FAQsImage from './imgs/FAQs.svg'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

export default function FAQs() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('#faqs-img', {
      origin: 'left', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

    ScrollReveal().reveal('.accordion-item', {
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
    document.title = t("FAQs - BATU");

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
    <div className="cover-section8">
      <div id="cover-text" className="text-center text-white">
        <h2>{t("FAQs")}</h2>
        <p><Link to='/'>{t("home")}</Link> / {t("FAQs")}</p>
      </div>
    </div>
  </div>
  {/*------------------------------------  FAQs-Section  ---------------------------------------*/}
  <div id="faqs" className="container">
    <div className="row">
      <div className="col-md-6">
        <img id='faqs-img' className="ms-5" width="55%"  src={FAQsImage} alt="img" />
      </div>
      <div id="accordion" className="col-md-6">
        <div style={{marginTop: '5rem'}} className="accordion accordion-flush" id="accordionFlushExample">
          {/* Accordion Item #1 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                {t("DoesBorg")}
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">{t("No")}</div>
            </div>
          </div>
          {/* Accordion Item #2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                {t("Whatare")}
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                • {t("Pass")}<br />
                • {t("Obtain")}
              </div>
            </div>
          </div>
          {/* Accordion Item #3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                {t("Whatisthevalue")}
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                • {t("First")}<br />
                • {t("Second")}<br />
                • {t("third")}<br />
                • {t("fourth")}<br />
              </div>
            </div>
          </div>
          {/* Accordion Item #4 (New) */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                {t("study")}
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                • {t("system")}<br />
                • {t("student")}<br />
                • {t("specialization")}<br />
              </div>
            </div>
          </div>
        </div>
      </div>
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
