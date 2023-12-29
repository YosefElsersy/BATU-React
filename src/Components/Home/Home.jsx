import React from 'react'
import Carousel from './Carousel'
import PresidentSection from './PresidentSection'
import UniversityNews from './UniversityNews'
import YoutubeSection from './YoutubeSection'
import StatisticsSection from './StatisticsSection'
import Nav from '../Nav & Footer/Nav'
import Footer from '../Nav & Footer/Footer'
import { useTranslation } from 'react-i18next';
import { ReactComponent as CustomArrowIcon } from '../imgs/icons-scroll-up-100.svg';
import { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top'
import '../Css/Home.css'
import '../Css/Loader.css'
import '../Css/ar.css';


export default function Home() {

  const {t} = useTranslation();
  useEffect(() => {
    // Set the meta tags when the component mounts
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'Home';
    metaDescription.content = 'Borg Alarb Technological University aims to develop applied technology education and training in parallel with the academic education path.';

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'keywords, for, MyComponent';

    // Append meta tags to the head
    document.head.appendChild(metaDescription);
    document.head.appendChild(metaKeywords);

    // Optionally, you can remove the meta tags when the component unmounts
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  useEffect(() => {
    // Set the document title when the component mounts
    document.title = t("Home - BATU");

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
    <Carousel id='rtll' className={`container-fluid p-0 ${isRTL ? 'rtl' : ''}`} />
    <PresidentSection id='rtll' className={`container-fluid p-0 ${isRTL ? 'rtl' : ''}`} />
    <StatisticsSection id='rtll' className={`container-fluid p-0 ${isRTL ? 'rtl' : ''}`} />
    <YoutubeSection id='rtll' className={`container-fluid p-0 ${isRTL ? 'rtl' : ''}`} />
    <UniversityNews id='rtll' className={`container-fluid p-0 ${isRTL ? 'rtl' : ''}`} />
    <Footer  />
        {/* ScrollToTop component */}
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
