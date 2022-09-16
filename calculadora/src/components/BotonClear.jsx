import React from 'react'
import '../hojas-de-estilo/BotonClear.css'

function BotonClear(props) {
  return (
    <div className='clear' onClick={()=> props.handleClear()}>
      {props.children}
      </div>
  )
}

export default BotonClear