import React from 'react'
import autoplayingPhoto1 from '../imgs/autoplaying-photo1.jpg'
import autoplayingPhoto2 from '../imgs/autoplaying-photo2.jpg'
import { useTranslation } from 'react-i18next';


export default function Carousel() {

  const {t} = useTranslation();
  return (
    <>
    <div id="carouselExampleAutoplaying" className="carousel slide carousel h-auto" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active dark-overlay"> 
      <div className="carousel-content text-center">
        <img src={autoplayingPhoto1} className="d-block w-100 img-fluid" style={{objectFit: 'cover', objectPosition: '0% 40%'}} alt="..." />
        <div id="welcome-letter" className="carousel-caption">
          <h5><b>{t("WelcomeTo")}<br />{t("Technological")}<br />{t("University")}</b></h5>
          <p><b /></p>
        </div>
      </div>
    </div>
    <div className="carousel-item dark-overlay"> 
      <div className="carousel-content text-center">
        <img src={autoplayingPhoto2} className="d-block w-100" style={{objectFit: 'cover', objectPosition: '0% 40%'}} alt="..." />
        <div className="carousel-caption">
          <h5 id="welcome-letter-2">{t("Borg")}</h5>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}
