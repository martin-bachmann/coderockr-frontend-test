import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ContactContext from '../context/contactContext';
import './Header.css';

function Header() {
  const { setShowContact } = useContext(ContactContext);

  return (
    <header>
      <h1>Rockr Blog</h1>
      <nav>
        <Link to="/">Posts</Link>
        <button type="button" onClick={ () => setShowContact(true) }>Contact</button>
      </nav>
    </header>

  );
}

export default Header;
