import { useState } from 'react';
import styles from './Itzel.module.css';
import itzel01 from '../../assets/tito/Itzel_01.png';

function Itzel() {
  const [isAnimating] = useState(true);

  return (
    <div 
      className={`${styles.character} ${isAnimating ? styles.pulsing : ''}`} 
      onClick={() => alert('¡Itzel fue clickeada!')}
    >
      <img src={itzel01} alt="Itzel" />
    </div>
  );
}

export default Itzel;
