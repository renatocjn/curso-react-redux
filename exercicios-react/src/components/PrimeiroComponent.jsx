import React from 'react'

let isLegal = true
export default (props) =>
   <div>
      <h1>{props.valor}</h1>
      <h2>{Math.random()}</h2>
      <h2>{isLegal ? 'Sim' : 'Nao'}</h2>
   </div>
