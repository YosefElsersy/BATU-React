import React, { useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav & Footer/Nav';
import Footer from '../Nav & Footer/Footer';
import '../Css/ar.css';
import '../Css/Cooperation protocols.css';
import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as CustomArrowIcon } from '../imgs/icons-scroll-up-100.svg';
import { useTranslation } from 'react-i18next';

export default function CooperationProtocols() {
  const { t} = useTranslation();
  useEffect(() => {
    // Set the document title when the component mounts
    document.title = t("Cooperation Protocols - BATU");

    // Optionally, you can clear the title when the component unmounts
    return () => {
      document.title = 'BATU'; // Reset the document title
    };
  }, [t]);
  const {i18n} = useTranslation();
  const [isRTL, setIsRTL] = useState(false);
  useEffect(() => {
    // Update RTL direction based on language change
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);


  return (
<>
<Nav />
  {/*------------------------------------  About-photo  ---------------------------------------*/}
  <div  className="container-fluid p-0">
    {/* Section with image and text centered */}
    <div className="cover-section6">
      <div id="cover-text" className="text-center text-white">
        <h2 style={{ textTransform: "uppercase", fontSize: "xxx-large" }}>
          {t("Cooperationprotocolss")}
        </h2>
        <p>
          <Link to='/'>{t("home")}</Link> / {t("Cooperationprotocolss")}
        </p>
      </div>
    </div>
  </div>
  {/*------------------------------------  About-photo  ---------------------------------------*/}
 <div id='rtll' className={`container-fluid p-0 ${isRTL ? 'rtl' : ''}`}>

  <strong />
  <h1
    className="hover-effect mt-5"
    style={{
      textAlign: "center",
      textTransform: "uppercase",
      fontSize: "1.5em"
    }}
    >
    {t("Cooperationprotocolss")}
  </h1>
  <h3
    className="mt-xl-5"
    style={{
      color: "#7e8890",
      maxWidth: "95em",
      paddingLeft: "3em",
      paddingRight: "3em"
    }}
    >
    {t("TheSupreme")}
    <br />
    <br />
    {t("Developing")}
    <br />
    <br />
    {t("Technology")}
    <br />
    <br />
    {t("Raising")}
    <br />
    <br />
    {t("Ensuring")}
    <br />
    <br />
    {t("Approving")}
    <br />
    <br />
    {t("Drawing")}
    <br />
    <br />
    {t("Establishing")}
    <br />
    <br />
    {t("Determining")}
    <br />
    <br />
    {t("Forming")}
    <br />
    <br />
    {t("Approvingthe")}
    <br />
    <br />
    {t("Discussing")}
    <br />
    <br />
  </h3>
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
