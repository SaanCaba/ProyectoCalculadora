import React from 'react'
import '../hojas-de-estilo/Boton.css'
function Boton(props) {
    const esOperador = (valor) => {
        if(valor === '+' || valor === '-' || valor === '/' || valor === '*') return true
        return false
    };
  return (
    <div 
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
    onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
  )
}

export default Boton