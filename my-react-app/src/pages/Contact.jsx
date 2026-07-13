import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './contact.css'

export default function Contact () {
  return (
    <div className='contactBody'>
      <Header />
      <span id='contactForm'>
        <ContactForm />
      </span>
      <Footer />
    </div>
  )
};