import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponent from './components/PrimeiroComponent'
// import CompA, {CompB as B} from './components/DoisComponents'
// import MultiElementos from './components/MultiElementos'
// import FamiliaSilva from './components/FamiliaSilva'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponentComFuncao from './components/ComponenteComFuncao'
// import Pai from './components/Pai'
// import ComponentClasse from './components/ComponenteClasse'
// import Contador from './components/Contador'
// import Hook from './components/Hook'
// import Field from './components/Field'
// import FieldReducer from './components/FieldReducer'
import Counter from './components/Counter'
import CounterReducer from './components/CounterReducer'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

const reducers = combineReducers({
   // field: FieldReducer
   counter: CounterReducer
})

const root = document.getElementById('root')

ReactDOM.render(
   <Provider store={createStore(reducers)}>
      {/* <div> */}
      {/* <PrimeiroComponent valor='1' aBcD={2**8}/> */}
      {/* <CompA valor='Sou A'/> */}
      {/* <B valor='Sou B'/> */}
      {/* <FamiliaSilva sobrenome='Silva'/> */}
      {/* <MultiElementos/> */}

      {/* <Familia sobrenome="Batista">
            <Membro nome="Carlos"/>
            <Membro nome="Carla"/>
      </Familia> */}

      {/* <Familia sobrenome="Arruda">
            <Membro nome="Felicia"/>
            <Membro nome="Carlos"/>
      </Familia> */}

      {/* <ComponentComFuncao/> */}

      {/* <Pai/> */}

      {/* <ComponentClasse valor="Sou um componente de classe"/> */}

      {/* <Contador/> */}

      {/* <Hook/> */}
      {/* <Field /> */}
      <Counter />
      {/* </div> */}
   </Provider>, root)
