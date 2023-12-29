import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';
export default function YoutubeSection() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.youtube-video', {
      origin: 'left', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

    ScrollReveal().reveal('.article', {
      origin: 'right', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
  }, []);
  const {t} = useTranslation();
  return (
<>
<div>
  <div className="container president-section">
    <div className="container">
      <div className="youtube-container row">
        <div className="col-md-6 col-sm-6">
          <div id="youtube-video" className="youtube-video">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title='youtube' width={600} height={300} className="embed-responsive-item" src="https://www.youtube.com/embed/tnWUiBwOAJ8" allowFullScreen />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="article">
            <h2>{t("President")}</h2>
            <p>
              {t("PresidentSisi's")}
            </p>
            <p>
             {t("BorgElArab")}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr className="line" />
</div>

</>
  )
}
