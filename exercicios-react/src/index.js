import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponent from './components/PrimeiroComponent'

const root = document.getElementById('root')

ReactDOM.render(
   <div>
      <PrimeiroComponent valor='1' aBcD={2**8}/>
   </div>, root)
