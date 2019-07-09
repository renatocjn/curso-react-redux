import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
   displayValue: '0',
   clearDisplay: false,
   operation: null,
   values: [0, 0],
   current: 0
}

export default class Calculadora extends Component {
   state = { ...initialState }

   clearMemory() {
      this.setState({...initialState})
   }

   setOperation(operation) {
      if (this.state.current === 0) {
         this.setState({ operation, current: 1, clearDisplay: true })
      } else {
         const equals = operation === '='
         const currentOperation = this.state.operation

         const values = [...this.state.values]
         // TODO Replace this with something more safe
         try {
            values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
         } catch (e) {
            values[0] = this.state.values[0]
         }
         values[1] = 0

         this.setState({
            displayValue: values[0],
            operation: equals ? null : operation,
            current: equals ? 0 : 1,
            clearDisplay: !equals,
            values
         })
      }
   }

   addDigit(n) {
      if (n === '.' && this.state.displayValue.includes('.')) return

      const clearDisplay = this.state.displayValue === '0'
         || this.state.clearDisplay
      const currentValue = clearDisplay ? '' : this.state.displayValue
      const displayValue = currentValue + n

      this.setState({ displayValue, clearDisplay: false })

      if (n !== '.') {
         const i = this.state.current
         const newValue = parseFloat(displayValue)
         const values = [...this.state.values]
         values[i] = newValue
         this.setState({ values })
      }
   }

   render() {
      return (
         <div className="calculator">
            <Display value={this.state.displayValue}/>
            <Button click={() => this.clearMemory()} label="AC" triple/>
            <Button click={(op) => this.setOperation(op)} label="/" operation/>
            <Button click={(n) => this.addDigit(n)} label="7"/>
            <Button click={(n) => this.addDigit(n)} label="8"/>
            <Button click={(n) => this.addDigit(n)} label="9"/>
            <Button click={(op) => this.setOperation(op)} label="*" operation/>
            <Button click={(n) => this.addDigit(n)} label="4"/>
            <Button click={(n) => this.addDigit(n)} label="5"/>
            <Button click={(n) => this.addDigit(n)} label="6"/>
            <Button click={(op) => this.setOperation(op)} label="-" operation/>
            <Button click={(n) => this.addDigit(n)} label="1"/>
            <Button click={(n) => this.addDigit(n)} label="2"/>
            <Button click={(n) => this.addDigit(n)} label="3"/>
            <Button click={(op) => this.setOperation(op)} label="+" operation/>
            <Button click={(n) => this.addDigit(n)} label="0" double/>
            <Button click={(n) => this.addDigit(n)} label="."/>
            <Button click={(op) => this.setOperation(op)} label="=" operation/>
         </div>
      )
   }
}
