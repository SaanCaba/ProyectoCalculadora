import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'
function App() {
 
  const [input, setInput] = useState('');


const agregarInput = (valor) => {
  setInput(input + valor) 
};

const clearInput = () => {
  setInput('')
};

const calcularResultado = () =>{
  if(input){
    setInput(evaluate(input));
  }else{
    alert('Ingrese valores para realizar los cálculos')
  }
};

  return (
    <div className="App">
      <div  className='titulo'>
        <h2>
        Calculadora
      </h2>
      </div>
      <div className='cont-calculadora'>
        {/* //filas de la calculadora.4 filas el ultimo div es para el boton para limpiar */}
      <Pantalla input={input} />
      <div className='fila'>
        <Boton handleClick={agregarInput}>1</Boton>
        <Boton handleClick={agregarInput}>2</Boton>
        <Boton handleClick={agregarInput}>3</Boton>
        <Boton handleClick={agregarInput}>+</Boton>
      </div>
      <div className='fila'>       
        <Boton handleClick={agregarInput}>4</Boton>
        <Boton handleClick={agregarInput}>5</Boton>
        <Boton handleClick={agregarInput}>6</Boton>
        <Boton handleClick={agregarInput}>-</Boton></div>
      <div className='fila'>
        <Boton handleClick={agregarInput}>7</Boton>
        <Boton handleClick={agregarInput}>8</Boton>
        <Boton handleClick={agregarInput}>9</Boton>
        <Boton handleClick={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton handleClick={calcularResultado}>=</Boton>
        <Boton handleClick={agregarInput}>0</Boton>
        <Boton handleClick={agregarInput}>.</Boton>
        <Boton handleClick={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <BotonClear handleClear={clearInput}>
          CLEAR
        </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
