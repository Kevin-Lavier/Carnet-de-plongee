import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Bienvenue sur le Carnet de Plongée</h1>
        <p>Consignez toutes vos plongées, observations et souvenirs sous-marins !</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
