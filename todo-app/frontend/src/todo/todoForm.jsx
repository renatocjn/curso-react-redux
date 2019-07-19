import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add } from './todoActions'

class TodoForm extends Component {
   constructor(props) {
      super(props)
      this.keyHandler = this.keyHandler.bind(this);
      this.componentWillMount = this.componentWillMount.bind(this);
   }

   componentWillMount() {
      this.props.search()
   }

   keyHandler (e) {
      const { add, search, description } = this.props
      if (e.key === 'Enter') {
         e.shiftKey ? search() : add(description)
      } else if (e.key === 'Escape') {
         this.props.handleClear()
      }
   }

   render() {
      const { add, search, description } = this.props
      return (
         <div role='form' className="todoForm">
            <Grid cols='12 9 10'>
               <input id='description'
                  className='form-control'
                  placeholder='Adicione uma tarefa'
                  onChange={this.props.changeDescription}
                  value={this.props.description}
                  onKeyUp={this.keyHandler}>
               </input>
            </Grid>

            <Grid cols='12 3 2'>
               <IconButton btnstyle='primary' icon='plus'
                  onClick={() => add(description)}>
               </IconButton>
               <IconButton
                  btnstyle="info" icon="search"
                  onClick={() => search()}>
               </IconButton>
               <IconButton
                  btnstyle="default" icon="close"
                  onClick={this.props.handleClear}>
               </IconButton>
            </Grid>
         </div>
      )
   }
}


const mapStateToProps = (state) => ({description: state.todo.description})
const mapDispatchToProps = (dispatch) =>
   bindActionCreators({ changeDescription, search, add }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
