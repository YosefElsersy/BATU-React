import React, { useState } from 'react';
import Nav from '../Nav & Footer/Nav';
import Footer from '../Nav & Footer/Footer';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as CustomArrowIcon } from '../imgs/icons-scroll-up-100.svg';
import card1Pg1 from '../imgs/card1-pg1.jpg';
import card2Pg1 from '../imgs/card2-pg1.jpg';
import card3Pg1 from '../imgs/card3-pg1.jpg';
import card4Pg1 from '../imgs/card4-pg1.jpg';
import card5Pg1 from '../imgs/card5-pg1.jpg';
import card6Pg1 from '../imgs/card6-pg1.jpg';
import card1Pg2 from '../imgs/card1-pg2.jpg';
import card2Pg2 from '../imgs/card2-pg2.jpg';
import card3Pg2 from '../imgs/card3-pg2.jpg';
import card4Pg2 from '../imgs/card4-pg2.jpg';
import card5Pg2 from '../imgs/card5-pg2.jpg';
import card6Pg2 from '../imgs/card6-pg2.jpg';
import card1Pg3 from '../imgs/card1-pg3.jpg';
import card2Pg3 from '../imgs/card2-pg3.jpg';
import card3Pg3 from '../imgs/card3-pg3.jpg';
import card4Pg3 from '../imgs/card4-pg3.jpg';
import card5Pg3 from '../imgs/card5-pg3.jpg';
import card6Pg3 from '../imgs/card6-pg3.jpg';
import card1Pg4 from '../imgs/card1-pg4.jpg';
import card2Pg4 from '../imgs/card2-pg4.jpg';
import card3Pg4 from '../imgs/card3-pg4.jpg';
import card4Pg4 from '../imgs/card4-pg4.jpg';
import card5Pg4 from '../imgs/card5-pg4.jpg';
import card6Pg4 from '../imgs/card6-pg4.jpg';
import card1Pg5 from '../imgs/card1-pg5.jpg';
import card2Pg5 from '../imgs/card2-pg5.jpg';
import card3Pg5 from '../imgs/card3-pg5.jpg';
import card4Pg5 from '../imgs/card4-pg5.jpg';
import card5Pg5 from '../imgs/card5-pg5.jpg';
import card6Pg5 from '../imgs/card6-pg5.jpg';
import '../Css/News.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function News() {

  const [currentPage, setCurrentPage] = useState(1);

  const pages = Array.from({ length: 5 }, (_, index) => index + 1);

  function changePage(page) {
    setCurrentPage(page);

    // Scroll to the top of the page with smooth behavior
    window.scrollTo({ top: 400, behavior: 'smooth' });
  }

  function previousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  }
  const {t} = useTranslation();
  useEffect(() => {
    // Set the document title when the component mounts
    document.title = t("News - BATU");

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
    <div className="cover-section9">
      <div id="cover-text" className="text-center text-white">
        <h2>{t("News")}</h2>
        <p><Link to='/'>{t("home")}</Link> / {t("News")}</p>
      </div>
    </div>
  </div>
  {/*---------------------------------------------------- Section:News-of-the-day ---------------------------------------------------------------*/}
      <div className="container">

        {pages.map((page) => (
  <div key={page} className={`page col-md-12 mb-4 ${currentPage === page ? '' : 'd-none'}`}>
    {page === 1 && (
            
           <div className="row gx-5">{/* row 1 */}
              <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
            <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02u6o1qA9MaTajVwfRmqkQFzRdnZx9eDKpE1CtgwYZo2kK7CRgeS5XbS6ij7SqsfNxl&id=100085885038638' target='_blank' rel='noreferrer'  >
              <img src={card1Pg1} className="img-fluid"  alt='Photo1'/></a> 
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card1-pg1-date")}</span>
            <h4><strong>{t("Card1-pg1-title")}</strong></h4>
            <p className="text-muted">
              {t("Card1-pg1-text")}
            </p>
          </div>
            {/* row 2 */}
              <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
             <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02wemqXmoyXARiqsKNNpEzzWGsmMHUg7xtwCq2qnahNzmf7GaEVk73qgsbP7wUz3Jrl&id=100085885038638' target='_blank' rel='noreferrer'  ><img src={card2Pg1} className="img-fluid"  alt='Photo1'/></a> 
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card2-pg1-date")}</span>
            <h4><strong>{t("Card2-pg1-title")}</strong></h4>
            <p className="text-muted">
              {t("“BorgElArab")}
            </p>
          </div>
            {/* row 3 */}
              <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
             <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02NopehscFonijs85tZsmzhVLjNoJx6zEUv5d5uMZTa4BXyiCwSuCB2Uks8unqvfbjl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card3Pg1} className="img-fluid"  alt='Photo1'/></a> 
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card3-pg1-date")}</span>
            <h4><strong>{t("Card3-pg1-title")}</strong></h4>
            <p className="text-muted">
              {t("Card3-pg1-text")}
            </p>
          </div>
            {/* row 4 */}
              <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
             <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid0F8MZiQwiRGhHj26LBqJu8tx7g9qUgGHFb3FauPKEqyf9PSmn71CQyEzdtsuMz1JEl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card4Pg1} className="img-fluid"  alt='Photo1'/></a> 
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card4-pg1-date")}</span>
            <h4><strong>{t("Card4-pg1-title")}</strong></h4>
            <p className="text-muted">
              {t("Card4-pg1-text")}
            </p>
          </div>
            {/* row 5 */}
              <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
             <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid0jfyq2rj4W9QDUP8bkz3XszTUPgstgiX13L7KS9GhDTXFgfrfqu17uKBJgj1vYaunl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card5Pg1} className="img-fluid"  alt='Photo1'/></a> 
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card5-pg1-date")}</span>
            <h4><strong>{t("Card5-pg1-title")}</strong></h4>
            <p className="text-muted">
              {t("Card5-pg1-text")}
            </p>
          </div>
            {/* row 6 */}
              <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
             <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid025fMXT9MQEfHfcnhD9oL3HPzv8xqPuQnqdQKnMEQxcLaVNY3Jaf9evyFiJdznnGPml&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card6Pg1} className="img-fluid"  alt='Photo1'/></a> 
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card6-pg1-date")}</span>
            <h4><strong>{t("Card6-pg1-title")}</strong></h4>
            <p className="text-muted">
              {t("Card6-pg1-text")}
            </p>
          </div>
              </div>
    )}
    {page === 2 && (
     
         <div className="row gx-5"> {/* row 1 */}
              <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
              <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid0382nxCkh8mdieCECDoFk1d5UZ6jrs4L2XQg5RxXkRJMW4MLXE9Q5U9gadHJCc5bsl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card1Pg2} className="img-fluid"  alt='Photo1'/></a> 
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card1-pg2-date")}</span>
            <h4><strong>{t("Card1-pg2-title")}</strong></h4>
            <p className="text-muted">
              {t("Card1-pg2-text")}
            </p>
          </div>     
              {/* row 2 */}
              <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
              <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02b6CYjsk9ZhNsYpRLdu35gByuueqawfd2agUdnTKQ2jTxDBXSCDfredEQ8VdFzE6fl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card2Pg2} className="img-fluid"  alt='Photo1'/></a> 
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card2-pg2-date")}</span>
            <h4><strong>{t("Card2-pg2-title")}</strong></h4>
            <p className="text-muted">
              {t("Card2-pg2-text")}
            </p>
          </div>            
              {/* row 3 */}
              <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
              <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid0RYqG6wmB77qBQDtYcD89SGwpeacg3RiGXgfGDQdSMiYygvK4Phj24e56mTCSt9Kxl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card3Pg2} className="img-fluid"  alt='Photo1'/></a> 
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card3-pg2-date")}</span>
            <h4><strong>{t("Card3-pg2-title")}</strong></h4>
            <p className="text-muted">
              {t("Card3-pg2-text")}
            </p>
          </div>            
              {/* row 4 */}
              <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
              <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid034PkFQZQEvRf93aCs3vozjbCJWzbTtQan2PVgS6TpCxDH3QicJRADbggbVxvTu19vl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card4Pg2} className="img-fluid"  alt='Photo1'/></a> 
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card4-pg2-date")}</span>
            <h4><strong>{t("Card4-pg2-title")}</strong></h4>
            <p className="text-muted">
              {t("Card4-pg2-text")}
            </p>
          </div>            
              {/* row 5 */}
              <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
              <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid0VF6xbpC6Qai2EU9V6Wvm43V6arbvg3J6swa1xe4fEpcGwF43zH1hywqbDCQq1dxWl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card5Pg2} className="img-fluid"  alt='Photo1'/></a> 
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card5-pg2-date")}</span>
            <h4><strong>{t("Card5-pg2-title")}</strong></h4>
            <p className="text-muted">
              {t("Card5-pg2-text")}
            </p>
          </div>            
              {/* row 6 */}
              <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
              <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02JR9L1FZprPg8rjnmz5jJA4FsNidEHvSxCtMpimPT6nMmR2j3sCQSaFBGMxo6BwMCl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card6Pg2} className="img-fluid"  alt='Photo1'/></a> 
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card6-pg2-date")}</span>
            <h4><strong>{t("Card6-pg2-title")}</strong></h4>
            <p className="text-muted">
              {t("Card6-pg2-text")}
            </p>
          </div>            
      </div>

    )}
    {page === 3 && (
      
      <div className="row gx-5">
        {/* row 1 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
       <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02w2QaVX88DDCv39ciPV6nrnfPfkKNfgEaz64wyGdUX1aBCjU4k9GDhPT7fzDX4Qbrl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card1Pg3} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card1-pg3-date")}</span>
       <h4><strong>{t("Card1-pg3-title")}</strong></h4>
       <p className="text-muted">
         {t("Card1-pg3-text")}
       </p>
     </div>
        {/* row 2 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
       <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid0hAWh8uRFv8M29RmVyY7bF62gjzd1Vy6Gp6rmcKT4KtnSiN9ci6zimx4gbdbPGJ9Xl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card2Pg3} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card2-pg3-date")}</span>
       <h4><strong>{t("Card2-pg3-title")}</strong></h4>
       <p className="text-muted">
         {t("Card2-pg3-text")}
       </p>
     </div>
        {/* row 3 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
       <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02sYFzvP7HoHz4DC7d2z3gV6ZcZjbyDhTJHtY3jKRQWgYqBpEiR7W85L9nxE9o7QEml&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card3Pg3} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card3-pg3-date")}</span>
       <h4><strong>{t("Card3-pg3-title")}</strong></h4>
       <p className="text-muted">
         {t("Card3-pg3-text")}
       </p>
     </div>
        {/* row 4 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
       <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02YLXy5aKeHVvYHUBdUbuWdNFSwhj3Tx6J2LL9qh8ryc4v9kZ6oYAQc9HPrss1Codvl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card4Pg3} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card4-pg3-date")}</span>
       <h4><strong>{t("Card4-pg3-title")}</strong></h4>
       <p className="text-muted">
         {t("Card4-pg3-text")}
       </p> 
     </div>
        {/* row 5 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
       <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid0ioXSBE3BbZF8Xa42r52aHT69yU9QGQG1pMeEoj1q6d1GUcxernnUFUEowaCqY3mcl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card5Pg3} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card5-pg3-date")}</span>
       <h4><strong>{t("Card5-pg3-title")}</strong></h4>
       <p className="text-muted">
         {t("Card5-pg3-text")}
       </p>
     </div>
        {/* row 6 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
       <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02mQnDthSsxQy49nBVX4onbpDPE9JykXTbsBo5nYmqFEuVa85N9y7DHGKWbMRCgNUTl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card6Pg3} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card6-pg3-date")}</span>
       <h4><strong>{t("Card6-pg3-title")}</strong></h4>
       <p className="text-muted">
         {t("Card6-pg3-text")}
       </p>
     </div>
         </div>
)}
    {page === 4 && (
      
      <div className="row gx-5">
        {/* row 1 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
       <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid0jpHE8G5w4MNyBc1CrEKGNPBL6qiAao9gM2BggkpzRX2Hg9osVoED7fUzQGLkyoekl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card1Pg4} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card1-pg4-date")}</span>
       <h4><strong>{t("Card1-pg4-title")}</strong></h4>
       <p className="text-muted">
         {t("Card1-pg4-text")}
       </p>
     </div>
        {/* row 2 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
       <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid0zRXqvZKVMFbkU2pRxjnwiZbgqUd1FqBhUgrgHVHxMYvpKHKEXhvKKRhQL4NyNaTDl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card2Pg4} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card2-pg4-date")}</span>
       <h4><strong>{t("Card2-pg4-title")}</strong></h4>
       <p className="text-muted">
         {t("Card2-pg4-text")}
       </p>
     </div>
        {/* row 3 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
       <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02fCiQnW5w88dtsxCNxgfvfFgNnut1RCuP9ijyGYATAFENmBsr2hbYLk4SYmbwgsncl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card3Pg4} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card3-pg4-date")}</span>
       <h4><strong>{t("Card3-pg4-title")}</strong></h4>
       <p className="text-muted">
         {t("Card3-pg4-text")}
       </p>
     </div>
        {/* row 4 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
       <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02rKpT1fJezyewfnNKNYs72qBToQKr1QQa1SifLWQU1rweUyUne8SELA4FntaZJhnwl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card4Pg4} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card4-pg4-date")}</span>
       <h4><strong>{t("Card4-pg4-title")}</strong></h4>
       <p className="text-muted">
         {t("Card4-pg4-text")}
       </p>
     </div>
        {/* row 5 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
       <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid0Wwq4f2UMew2ZpfibtU8wz2ZKYrZkDfm3vVbueCe34T3SwyE95SGmr6x4hDnZ2vN4l&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card5Pg4} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card5-pg4-date")}</span>
       <h4><strong>{t("Card5-pg4-title")}</strong></h4>
       <p className="text-muted">
         {t("Card5-pg4-text")}
       </p>
     </div>
        {/* row 6 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
       <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02usTkGX7NxdAYjYDHw4Fz17VCgcYUSeqfoUd4VbLCPurbXh3Avo8ZYfohsXsmLEMUl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card6Pg4} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card6-pg4-date")}</span>
       <h4><strong>{t("Card6-pg4-title")}</strong></h4>
       <p className="text-muted">
         {t("Card6-pg4-text")}
       </p>
     </div>
         </div>
)}
    {page === 5 && (
      
      <div className="row gx-5">
        {/* row 1 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
         <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid0Rsj6mEyHZ8znFvPLYppuW75tjNiE5q5Zzw6GBBw7vVcRqis5mcmMWGzizjtowr4fl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card1Pg5} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card1-pg5-date")}</span>
       <h4><strong>{t("Card1-pg5-title")}</strong></h4>
       <p className="text-muted">
         {t("Card1-pg5-text")}
       </p>
     </div>
        {/* row 2 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
         <a href='https://www.facebook.com/profile.php?id=100085885038638' target='_blank' rel='noreferrer' ><img src={card2Pg5} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card2-pg5-date")}</span>
       <h4><strong>{t("Card2-pg5-title")}</strong></h4>
       <p className="text-muted">
         {t("Card2-pg5-text")}
       </p>
     </div>
        {/* row 3 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
         <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid0D2Fwjq9gWAcmbptddG6jf9bmmW1k9WPpQptxFKLmqbn8FmypXnCtkcYherY4C6PQl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card3Pg5} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card3-pg5-date")}</span>
       <h4><strong>{t("Card3-pg5-title")}</strong></h4>
       <p className="text-muted">
         {t("Card3-pg5-text")}
       </p>
     </div>
        {/* row 4 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
         <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02VHivKTQXFkmmc9RE54W5wrPh24HUM2obHHRba3V1PX5ud354i5c7nvAVATh7LeGMl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card4Pg5} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card4-pg5-date")}</span>
       <h4><strong>{t("Card4-pg5-title")}</strong></h4>
       <p className="text-muted">
         {t("Card4-pg5-text")}
       </p>
     </div>
        {/* row 5 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
         <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02ur9gocmt9G2y17FwYc9EQGiyySeuKWC5LvMwgoEf6aZkbopCjMcLv5qNfB4tCBTol&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card5Pg5} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card5-pg5-date")}</span>
       <h4><strong>{t("Card5-pg5-title")}</strong></h4>
       <p className="text-muted">
         {t("Card5-pg5-text")}
       </p>
     </div>
        {/* row 6 */}
         <div className="col-md-6 mb-4" style={{maxWidth: '30em'}}>
       <div className="bg-image hover-overlay ripple shadow-2-strong rounded-1" data-mdb-ripple-color="light">
         <a href='https://www.facebook.com/permalink.php?story_fbid=pfbid02swrD3PmiAkM2JVnzGUxPCK52kFeF5HNy1h8pHQJoR5o6rZkiCGc2LmrwGNKrWDHYl&id=100085885038638' target='_blank' rel='noreferrer' ><img src={card6Pg5} className="img-fluid"  alt='Photo1'/></a> 
         <a href="#!">
           <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
         </a>
       </div>
     </div>
     <div className="col-md-6 mb-4">
       <span className="badge bg-info px-2 py-1 shadow-1-strong mb-3">{t("Card6-pg5-date")}</span>
       <h4><strong>{t("Card6-pg5-title")}</strong></h4>
       <p className="text-muted">
         {t("Card6-pg5-text")}
       </p>
     </div>
         </div>
)}
  </div>
))}
    


          {/* Pagination */}
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-custom me-3" onClick={previousPage}>&lt;</button>
            {pages.map((page) => (
              <button
                key={page}
                className={`btn btn-custom me-3 ${currentPage === page ? 'active' : ''}`}
                onClick={() => changePage(page)}
              >
                {page}
              </button>
            ))}
            <button className="btn btn-custom" onClick={nextPage}>&gt;</button>
          </div>
          {/* End of Pagination */}
        </div>
      

      <Footer />
      <ScrollToTop
        smooth
        component={<CustomArrowIcon />}
        style={{
          background: 'white',
          borderRadius: '50%',
          boxShadow: '1px 2px 25px rgba(0, 0 , 0, 0.5)',
          width: '50px',
          height: 'auto',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}
      />
    </>
  );
}
