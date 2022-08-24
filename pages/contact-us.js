import React from 'react'
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import MetaSeo from "../utils/MetaSeo";

const ContactUs = () => {
  return (
    <>
    <MetaSeo title={`Contact Us`}/>
    <NavBar/>
    <ContactForm/>
    <ContactInfo/>
    <Footer/>
    </>
  )
}

export default ContactUs