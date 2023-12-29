import React, { useEffect } from 'react';
import PresidentPhoto from '../imgs/president-photo.jpg';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

export default function PresidentSection() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.president-photo', {
      origin: 'left', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

    ScrollReveal().reveal('#president-text', {
      origin: 'right', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div className="container president-section">
        <div className="container">
          <div className="row">
            <div id="president-photo" className="col-md-6 col-lg-4">
              <div className="president-photo ms-5 me-0">
                <img src={PresidentPhoto} alt="img" className="img-fluid" />
              </div>
            </div>
            <div id="president-text" className="col-md-6">
              <h3 style={{ textTransform: 'uppercase', fontSize: '25px' }}>
                <b>{t("Presidentof")}</b>
              </h3>
              <h5>{t("Prof.Dr")}</h5>
              <p style={{ textAlign: 'start', width: '55vw' }}>
                {t("Technologyeducation")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
