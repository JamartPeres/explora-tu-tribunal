

import styles from './App.module.css'
import Tito from './components/personajes/Tito.jsx'
import Itzel from './components/personajes/Itzel.jsx'
import Bienvenida from './components/cuadro-juego/escenarios/Bienvenida.jsx'

function App() {
  

  return (
    <div className={styles.wrapper}>
      <div>
       <Tito/>
      </div>
      <div className={`${styles.gameContainer} ${styles.centerContent}`}>
        <Bienvenida/>
      </div>
      <div>
        <Itzel/>
      </div>
    </div>
  )
}

export default App
