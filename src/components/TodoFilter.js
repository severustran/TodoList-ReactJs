import React, { Component } from 'react'
import '../components/Todos.css'

class TodoFilter extends Component {
    filterTodos1 = () => {
        this.props.fooFilter('all');
    }

    filterTodos2 = () => {
        this.props.fooFilter('completed');
    }

    filterTodos3 = () => {
        this.props.fooFilter('uncompleted');
    }

    render(){
        return (
            <div className="footer">
                <button onClick={this.filterTodos1}>All</button>
                <button onClick={this.filterTodos2}>Completed</button>
                <button onClick={this.filterTodos3}>Uncompleted</button>
                <button>{this.props.itemsCount}</button>
            </div>)
    }
}

export default TodoFilter;