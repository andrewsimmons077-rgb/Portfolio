import { useState } from 'react';
import './contactForm.css';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "9afd10d7-5fca-4f43-8a3c-9e691192ac1f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form className='contactForm' onSubmit={onSubmit}>
      <input type="text" name="name" placeholder='Your Name' required/>
      <input type="email" name="email" placeholder='Your Email' required/>
      <textarea name="message" placeholder='Your Message' required></textarea>
      <button type="submit">Submit Form</button>
      <span>{result}</span>
    </form>
  );
}