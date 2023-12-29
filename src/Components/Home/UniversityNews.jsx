import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import card1Pg1 from '../imgs/card1-pg1.jpg';
import card1Pg2 from '../imgs/card1-pg2.jpg';
import card3Pg1 from '../imgs/card3-pg1.jpg';

export default function UniversityNews() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.row', {
      origin: 'bottom', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto', // You can change this to 'auto' for an instant jump
    });
  };
  const {t} = useTranslation();
  return (
    <>
    <div>
  <div id="news-cards" className="container mt-5 align-items-sm-center">
    <center >
    <div className="col-md-8 text-center">
      <h2>{t("UniversityNews")}</h2>
      <div className="d-flex justify-content-center">
        <hr style={{borderTop: '2px solid #4fb2b2', width: '150px',marginBottom:'2em'}} />
      </div>
    </div>
    </center>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <Link to="/News" onClick={scrollToTop}> {/* Add the link you want to open here */}
          <div className="bg-image">
      <img
        src={card1Pg1}
        className="w-100"
        alt='img'
      />
    </div>

          </Link>
          <div className="card-body mt-1">
            <h5 className="card-title1">{t("Card1-pg1-title")}</h5>
            <p className="card-text1">{t("Card1-pg1-date")}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <Link to="/News" onClick={scrollToTop}> {/* Add the link you want to open here */}
            <div className="bg-image">
              <img src={card1Pg2}  className="w-100" alt='img' />
            </div>
          </Link>
          <div className="card-body">
            <h5 className="card-title1">{t("Card1-pg2-title")}</h5>
            <p className="card-text1">{t("Card1-pg2-date")}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <Link to="/News" onClick={scrollToTop}> {/* Add the link you want to open here */}
            <div className="bg-image">
              <img src={card3Pg1} className="w-100" alt='img' />
            </div>
          </Link>
          <div className="card-body">
            <h5 className="card-title1">{t("Card3-pg1-title")}</h5>
            <p className="card-text1">{t("Card3-pg1-date")}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}
