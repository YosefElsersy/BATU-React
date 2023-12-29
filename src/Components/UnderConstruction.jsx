import React from 'react'
import Nav from './Nav & Footer/Nav'
import Footer from './Nav & Footer/Footer'
import { useTranslation } from 'react-i18next';


export default function UnderConstruction() {
  const {t} = useTranslation();
  return (
    <>
    <Nav />
    <h1 style={{textAlign: 'center', color: '#4fb2b2', marginTop: '3rem'}}>{t("Under Construction")}</h1>
    <Footer />
    </>
  )
}
