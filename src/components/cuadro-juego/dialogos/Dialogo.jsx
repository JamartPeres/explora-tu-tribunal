import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dialogo.module.css';

function Dialogo({ character, text, OKbutton, onClose }) {
  return (
    <div className={styles.dialog}>
      <button className={styles.closeButton} onClick={onClose}>×</button>
      <h2>{character}</h2>
      <p>{text}</p>
      {OKbutton && <button className={styles.okButton}>OK</button>}
    </div>
  );
}

Dialogo.propTypes = {
  character: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  OKbutton: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Dialogo;



