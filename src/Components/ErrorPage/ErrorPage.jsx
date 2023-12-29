import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Logo from '../imgs/Borg_El_Arab_Technological_University_logo.svg'

export default function ErrorPage() {
  useEffect(() => {
    // Set the document title when the component mounts
    document.title = '404 Error.';

    // Optionally, you can clear the title when the component unmounts
    return () => {
      document.title = 'BATU'; // Reset the document title
    };
  }, []);
  const error = useRouteError();
  console.error(error);

  return (
<>
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n    * {\n    font-family: sans-serif;\n    color: rgba(0,0,0,0.75);\n  }\n  body {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100vh;\n    padding: 0px 30px;\n    background: #ddd;\n  }\n  \n  .wrapper {\n    max-width: 960px;\n    width: 100%; \n    margin: 30px auto;\n    transform: scale(0.8);\n  }\n  .landing-page {\n    max-width: 960px;\n    height: 475px;\n    margin: 0;\n    box-shadow: 0px 0px 8px 1px #ccc;\n    background: #fafafa;\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  img {\n    width:100%;\n    max-height: 225px;\n    height: auto;\n    margin: 0 0 15px;\n  }\n  h1 {\n    font-size: 48px;\n    margin: 0;\n  }\n  p {\n    font-size: 16px;\n    width: 35%; \n    margin: 16px auto 24px;\n    text-align: center;\n  }\n  a {\n    border-radius: 50px;\n    padding: 8px 24px;\n    font-size: 16px;\n    cursor: pointer;\n    background: #4fb2b2;\n    color: #fff !important;\n    border: none;\n    box-shadow: 0 4px 8px 0 #ccc;\n    text-decoration: none !important;\n  }\n"
  }}
/>

<div className="wrapper">
  <div className="landing-page">
    <div style={{ textAlign: "center" }} className="icon__download">

      <img src={Logo} alt="" />

    </div>
    <h1> 404 Error.</h1>
    <p> We can't find the page you're looking for.<br />
        {/* {error.statusText || error.message} */}
    </p>
    <Link to='/'>Back to home</Link>
  </div>
</div>

</>
  );
}
