import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Routes from './Routes';
import Provider from './context/contactProvider';

function App() {
  return (
    <Provider>
      <div className="background">
        <Header />
        <Contact />
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
