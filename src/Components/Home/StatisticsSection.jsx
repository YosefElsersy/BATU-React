import React, { useEffect } from 'react';
import staff2 from '../imgs/staff2.svg';
import student from '../imgs/student.svg';
import alumni from '../imgs/alumni.svg';
import employee1 from '../imgs/employee1.svg';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

export default function StatisticsSection() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.statistic-item', {
      origin: 'bottom', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

    ScrollReveal().reveal('.statistic-item', {
      origin: 'bottom', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
  }, []);
  useEffect(() => {
    // Function to update the statistic number with a smooth animation
    function updateStatisticNumber(statNumber, finalNumber, duration) {
      const frameDuration = 1000 / 50; // 60 FPS
      const totalFrames = Math.ceil(duration / frameDuration);
      const increment = finalNumber / totalFrames;
      let frame = 0;
      let currentNumber = 0;

      const update = () => {
        currentNumber += increment;
        statNumber.textContent = Math.round(currentNumber);
        frame++;

        if (frame < totalFrames) {
          requestAnimationFrame(update);
        } else {
          statNumber.textContent = finalNumber;
        }
      };

      update();
    }

    // Get all statistic items
    const statisticItems = document.querySelectorAll('.statistic-item');

    statisticItems.forEach((item) => {
      const statNumber = item.querySelector('.statistic-number');
      const finalNumber = parseInt(statNumber.textContent, 10); // Get the actual number from the HTML

      // Set the initial text content to 0
      statNumber.textContent = '0';

      // Animate the statistic number from 0 to the actual number with a slower pace (e.g., 10000 milliseconds)
      updateStatisticNumber(statNumber, finalNumber, 10000);
    });
  }, []); // Empty dependency array ensures that this effect runs only once on mount
  const { t } = useTranslation();
  return (
    <>
      <div id="statistic" >
        <div className="row">
          <div className="col-md-3">
            <div className="statistic-item">
              <img src={staff2} alt="Staff Icon" className="statistic-icon" />
              <div className="statistic-number">75</div>
              <div className="statistic-label">{t("Staff")}</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statistic-item">
              <img src={student} alt="Student Icon" className="statistic-icon" />
              <div className="statistic-number">1600</div>
              <div className="statistic-label">{t("Student")}</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statistic-item">
              <img src={alumni} alt="Alumni Icon" className="statistic-icon" />
              <div className="statistic-number">0</div>
              <div className="statistic-label">{t("Alumni")}</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statistic-item">
              <img src={employee1} alt="Employee Icon" className="statistic-icon" />
              <div className="statistic-number">215</div>
              <div className="statistic-label">{t("Employee")}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
