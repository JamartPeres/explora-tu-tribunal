import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bienvenida.module.css';
import Dialogo from '../dialogos/Dialogo';

function Bienvenida({ dialog, onNext, showDialog, onCloseDialog, isLastDialog }) {
  return (
    <div className={styles.image}>
      {dialog && showDialog && (
        <Dialogo
          character={dialog.character}
          text={dialog.content}
          OKbutton={false} // Puedes ajustar esto según sea necesario
          onClose={onCloseDialog}
        />
      )}
      {isLastDialog && (
        <button className={styles.continueButton} onClick={() => alert('Haz continuado a la siguiente sala')}>Continuar</button>
      )}
      <button className={styles.nextButton} onClick={onNext}>Next</button>
    </div>
  );
}

Bienvenida.propTypes = {
  dialog: PropTypes.object,
  onNext: PropTypes.func.isRequired,
  showDialog: PropTypes.bool.isRequired,
  onCloseDialog: PropTypes.func.isRequired,
  isLastDialog: PropTypes.bool.isRequired,
};

Bienvenida.defaultProps = {
  dialog: null,
};

export default Bienvenida;
