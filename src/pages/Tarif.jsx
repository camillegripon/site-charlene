import React from 'react';
import '../styles/Tarif.css';

export default function Tarif() {
  return (
    <div className="page">
      <div className='cards' id='tarif'>
        <div className='card'>
          <h2>Séance de psychologie</h2>
          <p>Individuelle : 60 euros</p>
          <p>En couple : 80 euros</p>
        </div>
        <div className='card'>
          <h2>Séance de sexologie</h2>
          <p>Individuelle : 60 euros</p>
          <p>En couple : 80 euros</p>
        </div>
      </div>
      <div className='cards'>
        <div className='card' id='acces'>
          <p>Le site se trouve au 53 rue de Strasbourg et dispose d'un accès PMR</p>
          <img src="/photo/acces.jpeg" alt="Accès PMR - Cabinet accessible" />
        </div>
      </div>
      <div className='cards'>
        <div className='card' id='rdv'>
<img src="/photo/cabinet.jpeg" alt="photo du cabinet" />
          <p>Vous pouvez prendre rendez vous directement sur <button><a href="https://www.doctolib.fr/psychologue/herouville-saint-clair/charlene-guerard">doctolib</a></button> ou par telephone au 06.36.27.54.80</p>

        </div></div>
    </div>
  );
}

