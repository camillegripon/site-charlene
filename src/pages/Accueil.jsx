import { Link } from 'react-router-dom';
import '../styles/app.css'; 
import Hero from '../components/Hero';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';

export default function Accueil() {
  return (
    <div className="page">

      <Hero/>
      <Section2/>
      <Section3/>

    </div>
  );
}
