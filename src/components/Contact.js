import React, { useState } from 'react';
import PropTypes from 'prop-types';
import submitArrow from '../images/SubmitArrow.svg';
import xImage from '../images/X.svg';
import './Contact.css';

function Contact({ closeContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [post, setPost] = useState('');

  const send = () => {
    console.log('Enviou a mensagem');
    closeContact();
  };

  return (
    <div className="contact-background">
      <form
        className="contact-container"
        onSubmit={ (event) => {
          event.preventDefault();
          send();
        } }
      >
        <button type="button" onClick={ closeContact } className="close-button">
          <img src={ xImage } alt="Close post" />
        </button>
        <h1>Contact</h1>
        <label htmlFor="name-input">
          <p>Name</p>
          <input
            id="name-input"
            name="name"
            type="text"
            value={ name }
            onChange={ ({ target: { value } }) => setName(value) }
            placeholder="Fill your full name"
          />
        </label>
        <label htmlFor="email-input">
          <p>E-mail</p>
          <input
            id="email-input"
            name="email"
            type="email"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            placeholder="Fill a valid e-mail"
          />
        </label>
        <label htmlFor="phone-input">
          <p>Phone</p>
          <input
            id="phone-input"
            name="phone"
            type="text"
            value={ phone }
            onChange={ ({ target: { value } }) => setPhone(value) }
            placeholder="Fill your phone"
          />
        </label>
        <label htmlFor="post-input">
          <p>Post</p>
          <textarea
            id="post-input"
            name="post"
            type="text"
            value={ post }
            onChange={ ({ target: { value } }) => setPost(value) }
            placeholder="Hello..."
            rows="4"
            cols="50"
          />
        </label>
        <button type="submit" className="submit-button">
          <img src={ submitArrow } alt="Submit post" />
          Submit
        </button>
      </form>
    </div>
  );
}

Contact.propTypes = {
  closeContact: PropTypes.func,
}.isRequired;

export default Contact;
