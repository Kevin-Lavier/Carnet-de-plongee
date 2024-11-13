import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const NotFound = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Page non trouvée</h1>
        <p>La page que vous recherchez n'existe pas.</p>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
