import React, { useState } from 'react';
import { auth } from '../../config/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Login.scss';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    setIdentifier('');
    setPassword('');
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, identifier, password);
        navigate('/login');
      } else {
        await signInWithEmailAndPassword(auth, identifier, password);
        navigate('/dashboard'); // Redirige vers la page Dashboard après connexion
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Header />
      <main className="login">
        <h1>{isSignUp ? 'Créer un compte' : 'Connexion'}</h1>
        <form onSubmit={handleSubmit} className="login__form">
          <label htmlFor="identifier">Identifiant</label>
          <input
            type="email"
            id="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />

          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit">{isSignUp ? 'Créer son compte' : 'Connexion'}</button>
        </form>
        
        <button onClick={handleToggle} className="toggle-button">
          {isSignUp ? 'Déjà un compte ? Connexion' : "Pas de compte ? Créer un compte"}
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
