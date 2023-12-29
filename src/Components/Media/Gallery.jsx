import React from 'react'
import Nav from '../Nav & Footer/Nav'
import Footer from '../Nav & Footer/Footer'
import { Link } from 'react-router-dom'
import '../Css/Gallery.css'
import { useEffect } from 'react'
import TrainingPhoto from '../imgs/Training-photo.jpg'
import LabsPhoto from '../imgs/Labs-photo.jpg'
import ActivityPhoto from '../imgs/Activity-photo.jpg'
import { useTranslation } from 'react-i18next';


export default function Gallery() {

  useEffect(() => {
    const galleryLinks = document.querySelectorAll(".gallery-link");
    const photos = document.querySelectorAll(".photo");
    const popup = document.querySelector(".popup");

    // Function to show the pop-up
    function showPopup(imgSrc, imgAlt, description) {
      popup.querySelector("img").src = imgSrc;
      popup.querySelector("img").alt = imgAlt;
      popup.querySelector("p").textContent = description;
      popup.removeAttribute("hidden");
    }

    // Function to hide the pop-up
    function hidePopup() {
      popup.setAttribute("hidden", true);
    }

    galleryLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const category = this.getAttribute("data-category");

        // Hide all photos
        photos.forEach(photo => photo.style.display = "none");

        if (category === "all") {
          // Show all photos
          photos.forEach(photo => photo.style.display = "block");
        } else {
          // Show photos in the selected category
          photos.forEach(photo => {
            if (photo.getAttribute("data-category") === category) {
              photo.style.display = "block";
            }
          });
        }

        // Hide the pop-up when a category link is clicked
        hidePopup();
      });
    });

    photos.forEach(photo => {
      photo.addEventListener("click", function () {
        const imgSrc = this.querySelector("img").src;
        const imgAlt = this.querySelector("img").alt;
        const description = this.querySelector("p").textContent;

        // Show the pop-up when a photo is clicked
        showPopup(imgSrc, imgAlt, description);
      });
    });

    // Close the pop-up when clicking outside of the image
    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        // Hide the pop-up
        hidePopup();
      }
    });
  }, []);
  const {t} = useTranslation();
  useEffect(() => {
    // Set the document title when the component mounts
    document.title = t("Gallery - BATU");

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
    <div className="cover-section10">
      <div id="cover-text" className="text-center text-white">
        <h2>{t("Gallery")}</h2>
        <p><Link to='/'>{t("home")}</Link> / {t("Gallery")}</p>
      </div>
    </div>
  </div>
  {/*---------------------------------------------------- Section:News-of-the-day ---------------------------------------------------------------*/}
  <center>
    <a href="#" className="gallery-link" data-category="all">{t("All")}</a>
    <a href="#" className="gallery-link" data-category="training">{t("Training")}</a>
    <a href="#" className="gallery-link" data-category="labs">{t("Labs")}</a>
    <a href="#" className="gallery-link" data-category="activities" id="Act">{t("Activities")}</a>
  </center>
  <div className="photo-gallery">
    <div className="photo" data-category="training">
      <img src={TrainingPhoto} alt="Training 1" />
      <p>Training 1 description</p>
    </div>
    <div className="photo" data-category="training">
      <img src={TrainingPhoto} alt="Training 1" />
      <p>Training 1 description</p>
    </div>
    <div className="photo" data-category="training">
      <img src={TrainingPhoto} alt="Training 2" />
      <p>Training 2 description</p>
    </div>
    <div className="photo" data-category="training">
      <img src={TrainingPhoto} alt="Training 2" />
      <p>Training 2 description</p>
    </div>
    <div className="photo" data-category="training">
      <img src={TrainingPhoto} alt="Training 2" />
      <p>Training 2 description</p>
    </div>
    {/* Add more Labs with their descriptions */}
    <div className="photo" data-category="labs">
      <img src={LabsPhoto} alt="Labs 1" />
      <p>Labs 1 description</p>
    </div>
    <div className="photo" data-category="labs">
      <img src={LabsPhoto} alt="Labs 1" />
      <p>Labs 1 description</p>
    </div>
    <div className="photo" data-category="labs">
      <img src={LabsPhoto} alt="Labs 1" />
      <p>Labs 1 description</p>
    </div>
    <div className="photo" data-category="labs">
      <img src={LabsPhoto} alt="Labs 1" />
      <p>Labs 1 description</p>
    </div>
    <div className="photo" data-category="labs">
      <img src={LabsPhoto} alt="Labs 1" />
      <p>Labs 1 description</p>
    </div>
    {/* Add more activities with their descriptions */}
    <div className="photo" data-category="activities">
      <img src={ActivityPhoto} alt="Activity 1" />
      <p>Activity 1 description</p>
    </div>
    <div className="photo" data-category="activities">
      <img src={ActivityPhoto} alt="Activity 1" />
      <p>Activity 1 description</p>
    </div>
    <div className="photo" data-category="activities">
      <img src={ActivityPhoto} alt="Activity 1" />
      <p>Activity 1 description</p>
    </div>
    <div className="photo" data-category="activities">
      <img src={ActivityPhoto} alt="Activity 1" />
      <p>Activity 1 description</p>
    </div>
    <div className="photo" data-category="activities">
      <img src={ActivityPhoto} alt="Activity 1" />
      <p>Activity 1 description</p>
    </div>
    {/* Add more photos with their descriptions */}
  </div>
  <div className="popup" hidden>
    <img src alt="Popup Image" />
    <p>Popup Description</p>
  </div>
</div>


    <Footer />
    </>
  )
}
