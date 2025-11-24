import React from 'react';
import Navbar from '../components/Navbar';

export default function Contact(){
  return (
    <>
      <Navbar />
      <main className="container contact-container">
        <h2>Contact Us</h2>
        <p>Email: support@mystore.com</p>
      </main>
    </>
  );
}
