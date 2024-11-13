import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Dive = () => {
  return (
    <div>
      <Header />
      <main className="dive">
        <h1>Bienvenue dans la section Plongée</h1>
        <p>Enregistrez et consultez vos aventures de plongée.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Dive;
