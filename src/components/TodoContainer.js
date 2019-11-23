import React, { Component } from 'react';
import TodoFilter from './TodoFilter';
import Todos from './Todos';
import NewTodo from './NewTodo';

export default class TodoContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: "",
            toggle: true,
            todoLists: [
          { 
            title: 'Go jogging',
            isCompleted: true
          },
          { 
            title: 'Reading book',
            isCompleted: false
          },
          { 
            title: 'Have breakfast',
            isCompleted: true
          },
          { 
            title: 'Hello Orla!',
            isCompleted: false
          },
        ]};
    }

    onItemClicked(item) {
        return (event) => {
          this.setState({
            todoLists: this.state.todoLists.map( i => i!==item ? {...i} : {...i, isCompleted: !item.isCompleted})
          });
          this.setState({
              toggle: false
          })
        }
    }

    addNewTodo = value => {
        if(value) {
            const todoLists = [...this.state.todoLists];
            todoLists.push({title: value, isCompleted: false});
            this.setState({
                todoLists,
                inputValue: "",
                toggle: true
            });
        } else {
            alert("Enter your todos");
        }
    }

    render() {
        return (
            <div className="container">
                <NewTodo 
                    fooAddTodo={this.addNewTodo} 
                    fooInputValue={this.state.inputValue}/>
                {
                    this.state.todoLists.length > 0 && this.state.todoLists.map((item, index) => (
                    <Todos 
                        key={ index } 
                        item={ item } 
                        onClick={ this.onItemClicked(item) }/>
                    ))
                }
                {
                    this.state.todoLists.length === 0 && 'Nothing show up here'
                }
                <TodoFilter />
            </div>
        )
    }
}