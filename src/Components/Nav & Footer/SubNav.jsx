import React from 'react'
import '../Css/Nav.css'
import Logo from '../imgs/Borg_El_Arab_Technological_University_logo.svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function SubNav() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto', // You can change this to 'auto' for an instant jump
    });
  };
  const { t, i18n } = useTranslation();
  return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid">
  <Link className="navbar-brand" to='/' onClick={scrollToTop}>
            <img
              style={{ marginLeft: 50 }}
              src={Logo}
              alt=""
              srcSet=""
            />
          </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav mx-4">
        {" "}
        {/* Added "mx-4" class to add spacing between list items */}
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to='/' onClick={scrollToTop}
          >
            {t(`home`)}
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to='/about'
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {t("About")}
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to='/about' onClick={scrollToTop}>
                {t("AboutUniversity")}
              </Link>
            </li>
            <li>
              <Link
               onClick={scrollToTop}
                className="dropdown-item"
                to='/UniversityPresident'
              >
                {t("University'spresident")}
              </Link>
            </li>
            <li>
              <Link
               onClick={scrollToTop}
                className="dropdown-item"
                to='/VisionAndMission'
              >
                {t("Visionandmission")}
              </Link>
            </li>
            <li>
              <Link
                 onClick={scrollToTop}
                className="dropdown-item"
                to='/ValuesAndGoals'
              >
                {t("ValuesandGoals")}
                {" "}
              </Link>
            </li>
            <li>
              <Link
                onClick={scrollToTop}
                className="dropdown-item"
                to='/SupremeCouncil'
              >
                {t("SupremeCouncilforTechnologicalEducation")}
              </Link>
            </li>
            <li>
              <Link
                onClick={scrollToTop}
                className="dropdown-item"
                to='/CooperationProtocols'
              >
                {t("Cooperationprotocols")}
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {t("Faculties")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                onClick={scrollToTop}
                className="dropdown-item"
                to='/IET'
              >
                {t("FacultyofIndustry")}
              </Link>
            </li>
            <li>
              <Link
                onClick={scrollToTop}
                className="dropdown-item"
                to='/HST'
              >
                {t("FacultyofHealth")}
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            {t("Media")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to='/News' onClick={scrollToTop}>
                {t("News")}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to='/Gallery' onClick={scrollToTop}>
                {t("Gallery")}
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/ContactUs' onClick={scrollToTop}>
            {t("contactus")}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/FAQs' onClick={scrollToTop}>
            {t("FAQs")}
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="languageDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-translate="Language"
          >
            {t("Language")}
          </a>
          <ul className="dropdown-menu" aria-labelledby="languageDropdown">
            <li>
              <button className="dropdown-item"  onClick={() => i18n.changeLanguage('ar')}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAANlBMVEUAYjMTYDs3R0AvV0NObzE3dSoTWzhAZjgyfEY0gl1EcDFqpIhKj28TVzaLs41ol1JSaF1JW1NzUHm9AAAAPUlEQVR4AY2MtQEAMAgE447tv2xKvuQqeEtRcikZ/9p6b9X/Mdfeaw4PnPvehQhNvpcnJYiInIqraqYpyAd1AAFxIEreLQAAAABJRU5ErkJggg=="
                  alt="العربية"
                  width={16}
                  height={11}
                  style={{
                    width: 16,
                    height: 11,
                    marginRight: 2,
                    marginBottom: 2
                  }}
                />{" "}
                العربية
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => i18n.changeLanguage('en')}>  
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII="
                  alt="English"
                  width={16}
                  height={11}
                  style={{
                    width: 16,
                    height: 11,
                    marginRight: 2,
                    marginBottom: 2
                  }}
                />{" "}
                English
              </button>
            </li>
          </ul>
        </li>
        <Link to="/UnderConstruction" onClick={scrollToTop}>
          <button type="button" className="btn btn-primary custom-button" id='custom-button'>
            {t("Login")}
          </button>
        </Link>
      </ul>
    </div>
  </div>
</nav>


        </>
  )
}
