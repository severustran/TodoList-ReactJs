import React, { Component } from 'react';
import TodoFilter from './TodoFilter';
import Todos from './Todos';
import NewTodo from './NewTodo';

export default class TodoContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: false,
            show: 'all',
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

    delTodo = item => {
        this.setState({
            todoLists: this.state.todoLists.filter(i => i!==item)
        });
    }

    addNewTodo = value => {
        if(value) {
            const todoLists = [...this.state.todoLists];
            todoLists.push({title: value, isCompleted: false});
            this.setState({
                todoLists,
                toggle: true
            });
        } else {
            alert("Enter your todos");
        }
    }

    toggleAll = () => {
        const todoLists = [...this.state.todoLists];
        if(!this.state.toggle) {
            this.setState({
                todoLists: todoLists.map( item => {
                    return ({...item, isCompleted: true});
                }),
                toggle: true
            });
        } else {
            this.setState({
                todoLists: todoLists.map( item => {
                    return ({...item, isCompleted: false});
                }),
                toggle: false
            });
        }
    }

    updateShow = condition => {
        this.setState({show: condition});
    }

    render() {
        let todos = [];
        if(this.state.show === 'all') {
            todos = this.state.todoLists;
        } else if (this.state.show === 'completed') {
            todos = this.state.todoLists.filter(item => item.isCompleted);
        } else if (this.state.show === 'uncompleted') {
            todos = this.state.todoLists.filter(item => !item.isCompleted);
        }
        return (
            <div className="container">
                <NewTodo 
                    fooAddTodo={this.addNewTodo} 
                    fooToggleAll={this.toggleAll}/>
                {
                    todos.length > 0 && todos.map((item, index) => (
                    <Todos 
                        key={ index } 
                        item={ item } 
                        onClick={ this.onItemClicked(item)}
                        fooDel={() => this.delTodo(item)}/>
                    ))
                }
                {
                    todos.length === 0 && 'Nothing show up here'
                }
                <TodoFilter 
                    fooFilter={this.updateShow}
                    itemsCount={todos.length}/>
            </div>
        )
    }
}