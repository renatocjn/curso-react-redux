import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponent from './components/PrimeiroComponent'
// import CompA, {CompB as B} from './components/DoisComponents'
// import MultiElementos from './components/MultiElementos'
// import FamiliaSilva from './components/FamiliaSilva'
import Familia from './components/Familia'
import Membro from './components/Membro'
const root = document.getElementById('root')

ReactDOM.render(
   <div>
      {/* <PrimeiroComponent valor='1' aBcD={2**8}/> */}
      {/* <CompA valor='Sou A'/> */}
      {/* <B valor='Sou B'/> */}
      {/*<MultiElementos/> */}
      {/* <FamiliaSilva/> */}
      <Familia>
         <Membro nome='Carlos' sobrenome='Roberto'/>
         <Membro nome='Carla' sobrenome='Roberto'/>
      </Familia>

      <Familia>
         <Membro nome='Felicia' sobrenome='Arruda'/>
         <Membro nome='Roberta' sobrenome='Arruda'/>
      </Familia>
   </div>, root)
