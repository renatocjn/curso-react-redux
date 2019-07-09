import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculadora extends Component {
   clearMemory() {
      console.log('limpar')
   }

   setOperation(operation) {
      console.log(operation)
   }

   addDigit(n) { 
      console.log(n)
   }

   render() {
      return (
         <div className="calculator">
            <Display value={100}/>
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
