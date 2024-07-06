import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Bienvenida.module.css';
import dialogos from '../dialogos/dialogos.json';
import Dialogo from '../dialogos/Dialogo';

function Bienvenida({ id }) {
  const [dialogs, setDialogs] = useState([]);
  const [currentDialogIndex, setCurrentDialogIndex] = useState(-1); // Empieza en -1 para no mostrar ningún diálogo inicialmente
  const [showDialog, setShowDialog] = useState(false); // Estado para mostrar u ocultar el cuadro de diálogo

  useEffect(() => {
    const foundDialogs = dialogos.find(dialogo => dialogo.id === id);
    if (foundDialogs) {
      setDialogs(foundDialogs.dialogs);
      setCurrentDialogIndex(-1); // Reinicia el índice del diálogo actual
    } else {
      setDialogs([]);
      setCurrentDialogIndex(-1);
    }
  }, [id]);

  const handleNext = () => {
    if (currentDialogIndex < dialogs.length - 1) {
      setCurrentDialogIndex(currentDialogIndex + 1);
      setShowDialog(true); // Muestra el cuadro de diálogo cuando se presiona "Next"
    }
  };

  const handleClose = () => {
    setShowDialog(false); // Oculta el cuadro de diálogo cuando se presiona la "X"
  };

  const currentDialog = dialogs[currentDialogIndex];
  const isLastDialog = currentDialogIndex === dialogs.length - 1;

  return (
    <div className={styles.image}>
      {showDialog && currentDialog && (
        <Dialogo
          character={currentDialog.character}
          text={currentDialog.content}
          OKbutton={isLastDialog}
          onClose={handleClose}
        />
      )}
      <button className={styles.nextButton} onClick={handleNext}>Next</button>
    </div>
  );
}

Bienvenida.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Bienvenida;



