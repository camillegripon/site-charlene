import React from 'react';
import '../styles/Tarif.css';

export default function Tarif() {
  return (
    <div className="page">
      <div className='cards' id='tarif'>
        <div className='card'>
          <h2>Séance de psychologie</h2>
          <p>Individuelle : 60 euros</p>

        </div>
        <div className='card'>
          <h2>Séance de sexologie</h2>
          <p>Individuelle : 60 euros</p>

        </div>
      </div>
      <div className='cards'>
        <div className='card' id='rdv'>
          <img src="/photo/cabinet.jpeg" alt="photo du cabinet" />
          <p>Vous pouvez prendre rendez vous directement par telephone au 06.20.47.59.35 ou par <button><a href="https://www.doctolib.fr/psychologue/herouville-saint-clair/charlene-guerard">Doctolib</a></button></p>

        </div></div>
    </div>
  );
}

