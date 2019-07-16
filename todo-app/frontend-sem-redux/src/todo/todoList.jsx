import React from 'react'
import IconButton from '../template/iconButton'
import If from '../template/if'

export default props => {
   const renderRows = () => {
      const list = props.list || []
      return list.map(todo => (
         <tr key={todo._id}>
            <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
            <td>
               <IconButton btnstyle='success' icon='check' hide={todo.done}
                  onClick={() => props.handleMarkAsDone(todo)}/>
               <IconButton btnstyle='warning' icon='undo' hide={!todo.done}
                  onClick={() => props.handleMarkAsPending(todo)}/>
               <IconButton btnstyle='danger' icon='trash-o' hide={!todo.done}
                  onClick={() => props.handleRemove(todo)}/>
            </td>
         </tr>
      ))
   }

   return (
      <div>
         <table className='table'>
            <thead>
               <tr>
                  <th>Descrição</th>
                  <th className="tableActions">Ações</th>
               </tr>
            </thead>
            <tbody>
               {renderRows()}
            </tbody>
         </table>
      </div>
   )
}
