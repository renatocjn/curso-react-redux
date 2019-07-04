import React from 'react'
import Membro from './Membro'

export default (props) =>
   <div>
      <Membro nome='Carlos'  sobrenome={props.sobrenome}/>
      <Membro nome='Roberto' sobrenome={props.sobrenome}/>
      <Membro nome='Rafaela' sobrenome={props.sobrenome}/>
   </div>
