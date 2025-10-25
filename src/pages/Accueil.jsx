import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/app.css';
import Hero from '../components/Hero';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';

export default function Accueil() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div className="page">

      <Hero />
      <Section2 />
      <Section3 />

    </div>
  );
}
