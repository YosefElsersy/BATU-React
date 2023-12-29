import React from 'react'
import Nav from './Nav & Footer/Nav'
import Footer from './Nav & Footer/Footer'
import ScrollToTop from 'react-scroll-to-top'
import { ReactComponent as CustomArrowIcon } from './imgs/icons-scroll-up-100.svg';
import { Link } from 'react-router-dom';
import './Css/ContactUs.css'
import ContactUsImage from './imgs/Contact Us.svg'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

export default function ContactUs() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('#ContactUs-img', {
      origin: 'left', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });

    ScrollReveal().reveal('#contact-form', {
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
    document.title = t("Contact Us - BATU");

    // Optionally, you can clear the title when the component unmounts
    return () => {
      document.title = 'BATU'; // Reset the document title
    };
  }, [t]);
  return (
<>
<Nav />
  {/*------------------------------------  About-photo  ---------------------------------------*/}
  <div className="container-fluid p-0">
    {/* Section with image and text centered */}
    <div className="cover-section7">
      <div id="cover-text" className="text-center text-white">
        <h2 className="display-4 display-md-3 display-lg-2">{t("ContactUs")}</h2>
        <p className="lead lead-md">
          {" "}
          <Link to='/'>{t("home")}</Link> / {t("ContactUs")}
        </p>
      </div>
    </div>
  </div>
  {/*------------------------------------  About-photo  ---------------------------------------*/}
  {/* Contact Form Section */}
  <div className="container mt-5">
    <div className="row">
      {/* Image (on the left) */}
      <div
        id="ContactUs-img"
        className="col-md-6 d-flex align-items-center justify-content-center"
      >
        <img
          src={ContactUsImage}
          alt="img"
          className="img-fluid img-small"
        />
      </div>
      {/* Contact Form (on the right) */}
      <div id="contact-form" className="col-md-6">
        <div className="contact-form-container">
          {/* <h2 class="text-center mb-4">Contact Us</h2> */}
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                {t("FullName")}
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder={t("Enteryour")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                {t("EmailAddress")}
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder={t("youremailaddress")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                {t("Mobile")}
              </label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                placeholder={t("yourmobilenumber")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                {t("Title")}
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder={t("yourtitle")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                {t("Subject")}
              </label>
              <textarea
                className="form-control"
                id="subject"
                rows={4}
                placeholder={t("Enteryourmessage")}
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-primary custom-button ">
              {t("Submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Contact Form Section */}
  <iframe
    title='map'
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13700.056935811244!2d29.5714673!3d30.8582765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145f7d35b368ca83%3A0x6b44d7cb3b2a22f8!2z2KzYp9mF2LnYqSDYqNix2Kwg2KfZhNi52LHYqCDYp9mE2KrZg9mG2YjZhNmI2KzZitip!5e0!3m2!1sar!2seg!4v1695229850716!5m2!1sar!2seg"
    width="100%"
    height={450}
    style={{
      border: "2px solid #4fb2b2",
      marginTop: "2rem",
      marginBottom: "-55px"
    }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
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
