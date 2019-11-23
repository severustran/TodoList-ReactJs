import React, { Component } from 'react'
import '../components/Todos.css'

class TodoFilter extends Component {
    filterTodos = condition => {
        
    }

    render(){
        return (
            <div className="footer">
                <button onClick={this.filterTodos('all')}>All</button>
                <button onClick={this.filterTodos('completed')}>Completed</button>
                <button onClick={this.filterTodos('uncompleted')}>Uncompleted</button>
                <button>No</button>
            </div>)
    }
}

export default TodoFilter;