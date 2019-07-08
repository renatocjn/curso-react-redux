import React, { useState, useEffect } from 'react'

export default props => {
   const [contador, setContador] = useState(0)
   const [parOuImpar, setParOuImpar] = useState('Par')

   // Exemplo de hook de evento de ciclo de vida do componente
   useEffect(() => {
      contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
   })

   return (
      <div>
         <h1> {contador} </h1>
         <button onClick={() => setContador(contador+1)}> Inc </button>
         <h3> O valor e {parOuImpar} </h3>
      </div>
   )
}

// https://reactjs.org/docs/hooks-intro.html
