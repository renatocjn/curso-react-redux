import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponent from './components/PrimeiroComponent'
import {CompA, CompB as B} from './components/DoisComponents'

const root = document.getElementById('root')

ReactDOM.render(
   <div>
      {/* <PrimeiroComponent valor='1' aBcD={2**8}/>*/}
      <CompA valor='Sou A'/>
      <B valor='Sou B'/>
   </div>, root)
