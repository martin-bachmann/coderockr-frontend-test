import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import './Header.css';

function Header() {
  const [showContact, setShowContact] = useState(false);

  const closeContact = () => { setShowContact(false); };

  return (
    <div className="header-wrapper">
      <header>
        <h1>Rockr Blog</h1>
        <nav>
          <Link to="/">Posts</Link>
          <button type="button" onClick={ () => setShowContact(true) }>Contact</button>
        </nav>
      </header>
      { showContact && <Contact closeContact={ closeContact } /> }
    </div>
  );
}

export default Header;
