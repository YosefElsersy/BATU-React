import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from './Components/Home/Home';
import AboutUniversity from './Components/About/AboutUniversity';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import UniversityPresident from './Components/About/UniversityPresident';
import VisionAndMission from './Components/About/VisionAndMission.jsx';
import ValuesAndGoals from './Components/About/ValuesAndGoals.jsx';
import SupremeCouncil from './Components/About/SupremeCouncil.jsx';
import CooperationProtocols from './Components/About/CooperationProtocols.jsx';
import ContactUs from './Components/ContactUs.jsx';
import FAQs from './Components/FAQs.jsx';
import News from './Components/Media/News.jsx';
import Gallery from './Components/Media/Gallery.jsx';
import IET from './Components/Faculties/IET.jsx';
import HST from './Components/Faculties/HST.jsx';
import InformationCommunicationTechnology from './Components/IET-Programs/InformationCommunicationTechnology.jsx';
import RailwaysTechnology from './Components/IET-Programs/RailwaysTechnology.jsx';
import FoodProcessingTechnology from './Components/IET-Programs/FoodProcessingTechnology.jsx';
import UnderConstruction from './Components/UnderConstruction.jsx';
import TractorsAndAgriculturalEquipmentTechnology from './Components/IET-Programs/TractorsAndAgriculturalEquipmentTechnology.jsx';
import TextileTechnology from './Components/IET-Programs/TextileTechnology.jsx';
import PharmaceuticalIndustryTechnology from './Components/HST-Programs/PharmaceuticalIndustryTechnology.jsx';
import DentalProstheticsTechnology from './Components/HST-Programs/DentalProstheticsTechnology.jsx';
import SpecializedHealthcareTechnician from './Components/HST-Programs/SpecializedHealthcareTechnician.jsx';
import HealthInformaticsManagement from './Components/HST-Programs/HealthInformaticsManagement.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));



const router = createBrowserRouter([
    {
      path: "/",
      element:<Home />,
      errorElement: <ErrorPage />

    },
    {
      path: "/about",
      element: <AboutUniversity />,
      errorElement: <ErrorPage />
    },
    {
      path: "/UniversityPresident",
      element: <UniversityPresident />,
      errorElement: <ErrorPage />
    },
    {
      path:'/VisionAndMission',
      element: <VisionAndMission />,
      errorElement: <ErrorPage />
    },
    {
      path:'/ValuesAndGoals',
      element: <ValuesAndGoals />,
      errorElement: <ErrorPage />
    },
    {
      path:'/SupremeCouncil',
      element:<SupremeCouncil />,
      errorElement: <ErrorPage />
    },
    {
      path: '/CooperationProtocols',
      element:<CooperationProtocols />,
      errorElement:<ErrorPage />  
    },
    {
      path: '/ContactUs',
      element:<ContactUs />,
      errorElement:<ErrorPage />  
    },
    {
      path: '/FAQs',
      element:<FAQs />,
      errorElement:<ErrorPage />
    },
    {
      path:'/News',
      element:<News />,
      errorElement:<ErrorPage />
    },
    {
      path:'/Gallery',
      element:<Gallery />,
      errorElement:<ErrorPage />
    },
    {
      path:'/IET',
      element:<IET />,
      errorElement:<ErrorPage />
    },
    {
      path:'/HST',
      element:<HST />,
      errorElement:<ErrorPage />
    },
    {
      path:'/InformationCommunicationTechnology',
      element:<InformationCommunicationTechnology />,
      errorElement:<ErrorPage />
    },
    {
      path:'/RailwaysTechnology',
      element:<RailwaysTechnology />,
      errorElement:<ErrorPage />
    },
    {
      path:'/FoodProcessingTechnology',
      element:<FoodProcessingTechnology />,
      errorElement:<ErrorPage />
    },
    {
      path:'/TractorsAndAgriculturalEquipmentTechnology',
      element:<TractorsAndAgriculturalEquipmentTechnology />,
      errorElement:<ErrorPage />
    },
    {
      path:'/TextileTechnology',
      element:<TextileTechnology />,
      errorElement:<ErrorPage />
    },
    {
      path:'/PharmaceuticalIndustryTechnology',
      element:<PharmaceuticalIndustryTechnology />,
      errorElement:<ErrorPage />
    },
    {
      path:'/DentalProstheticsTechnology',
      element:<DentalProstheticsTechnology />,
      errorElement:<ErrorPage />
    },
    {
      path:'/SpecializedHealthcareTechnician',
      element:<SpecializedHealthcareTechnician />,
      errorElement:<ErrorPage />
    },
    {
      path:'/HealthInformaticsManagement',
      element:<HealthInformaticsManagement />,
      errorElement:<ErrorPage />
    },
    {
      path:'/UnderConstruction',
      element:<UnderConstruction />,
      errorElement:<ErrorPage />
    },
  ]);
  
  createRoot(document.getElementById("root")).render(
    
  );


root.render(

  <RouterProvider router={router} />

);

reportWebVitals();
