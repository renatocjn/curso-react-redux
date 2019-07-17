import { combineReducers } from 'redux'

const rootReducers = combineReducers({
   todo: () => ({
      description: "Ler livro",
      list: [{
         _id: 1,
         description: "Pagar fatura do cartao",
         done: true
      }, {
         _id: 2,
         description: "Reuniao com a equipe as 10h",
         done: false
      }, {
         _id: 3,
         description: "Consulta medica na terca depois do almoco",
         done: false
      }]
   })
})

export default rootReducers
