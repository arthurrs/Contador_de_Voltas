import React, {useState, useEffect} from 'react'
import './style.css'

import MostrarVolta from './MostrarVoltas'
import MostrarTempo from './MostrarTempo'
import Button from './Button'


function App() {
  const [NumVoltas, setNumVoltas] = useState(0)
  const [running, setRunning] = useState(false)
	const [tempo, setTempo] = useState(0)

	useEffect(() => {
    let timer = null
    if(running) {
      timer = setInterval( () => {
        setTempo( old => old +1)
        //console.log('Chamou!')
      }, 1000)

      return () => {
        if(timer) {
          clearInterval(timer)
        }
      }
    }},[running])
    
  const toogleRunning = () => {
    setRunning(!running)
  }
	

    const increment = () => {
    setNumVoltas(NumVoltas+1)
    
  }
  const decrement = () => {
     if(NumVoltas > 0){
      setNumVoltas(NumVoltas-1)
     }
    
     
  }

  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }
  return (
    <div>
    
      <MostrarVolta  voltas={NumVoltas}/>
      <Button text='+' onClick={increment} className="bigger" />
      <Button text='-' onClick={decrement} className="bigger"/>
      {
        NumVoltas > 0 && 
        <MostrarTempo tempo={Math.round(tempo/NumVoltas)}/>
      }
      <Button text={running ? 'Pausar' : 'Iniciar'} onClick={toogleRunning} />
      <Button text='Reiniciar' onClick={reset} />

    </div>
  );
}

export default App;
