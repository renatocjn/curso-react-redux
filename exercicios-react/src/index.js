import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponent from './components/PrimeiroComponent'
// import CompA, {CompB as B} from './components/DoisComponents'
// import MultiElementos from './components/MultiElementos'
// import FamiliaSilva from './components/FamiliaSilva'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponentComFuncao from './components/ComponenteComFuncao'
import Pai from './components/Pai'

const root = document.getElementById('root')

ReactDOM.render(
   <div>
      {/* <PrimeiroComponent valor='1' aBcD={2**8}/> */}
      {/* <CompA valor='Sou A'/> */}
      {/* <B valor='Sou B'/> */}
      {/* <MultiElementos/> */}
      {/* <FamiliaSilva sobrenome='Silva'/> */}

      {/* <Familia sobrenome="Batista">
         <Membro nome="Carlos"/>
         <Membro nome="Carla"/>
      </Familia> */}

      {/* <Familia sobrenome="Arruda">
         <Membro nome="Felicia"/>
         <Membro nome="Carlos"/>
      </Familia> */}

      {/* <ComponentComFuncao/> */}

      <Pai/>

   </div>, root)
