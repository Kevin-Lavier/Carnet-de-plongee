import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Dashboard.scss';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <main className="dashboard">
        <h1>Bienvenue dans votre espace</h1>
        <div className="dashboard__buttons">
          <button
            className="dashboard__button"
            onClick={() => navigate('/dashboard/plongee')}
          >
            Plongée
          </button>
          <button className="dashboard__button">Apnée</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
