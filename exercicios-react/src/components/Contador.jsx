import React, {Component} from 'react'

export default class Contador extends Component {
   // Solucao verbosa ao problema do 'this'
   // constructor (props) {
   //    super(props)
   //    this.maisUm = this.maisUm.bind(this)
   // }

   state = {
      numero: this.props.numeroInicial || 0,
      step: this.props.step || 1
   }

   maisUm = () => {
      this.setState({ numero: this.state.numero + this.state.step })
   }

   menosUm = () =>
      this.setState({ numero: this.state.numero - this.state.step })

   alterarNumero = diferenca => {
      this.setState({ numero: this.state.numero + diferenca })
   }

   render () {
      return (
         <div>
            <div> Numero: {this.state.numero} </div>
            <button onClick={this.maisUm}>Inc</button>
            <button onClick={this.menosUm}>Dec</button>
            <button onClick={() => this.alterarNumero(10)}>Mais 10</button>
            <button onClick={() => this.alterarNumero(-10)}>Menos 10</button>
         </div>
      )
   }
}
