import React from 'react'
import { filhosComProps } from '../utils/utils'

export default (props) =>
   <div>
      <h1>Familia {props.sobrenome}</h1>
      { filhosComProps(props) }
      {/*React.Children.map(props.children, child =>
         React.cloneElement(child, {...props})
      )*/}
      {/*React.cloneElement(props.children,
         {sobrenome: props.sobrenome}) */}
      {/*props.children*/}
   </div>
