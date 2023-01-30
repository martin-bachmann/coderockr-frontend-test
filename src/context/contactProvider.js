import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContactContext from './contactContext';

const INITIAL_STATE = false;

function Provider({ children }) {
  const [showContact, setShowContact] = useState(INITIAL_STATE);

  const value = { showContact, setShowContact };
  return (
    <ContactContext.Provider value={ value }>
      {children}
    </ContactContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
