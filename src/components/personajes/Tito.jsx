import { useState } from 'react';
import styles from './Tito.module.css';
import tito01 from '../../assets/tito/Tito_01.png';

function Tito() {
  const [isAnimating] = useState(true);

  return (
    <div 
      className={`${styles.character} ${isAnimating ? styles.pulsing : ''}`} 
      onClick={() => alert('¡Tito fue clickeado!')}
    >
      <img src={tito01} alt="Tito" />
    </div>
  );
}

export default Tito;
