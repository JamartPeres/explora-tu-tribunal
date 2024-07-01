import styles from './Tito.module.css';
import tito01 from '../../assets/tito/Tito_01.png';


function Tito() {
  

  return (
    <div className={styles.character} >
      <img src={tito01} alt="" />
    </div>
  )
}

export default Tito