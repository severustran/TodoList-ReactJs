import React, { Component } from 'react'
import '../components/Todos.css'

class TodoFilter extends Component {
    render(){
        return (
            <div className="footer">
                <button>All</button>
                <button>Completed</button>
                <button>Uncompleted</button>
            </div>)
    }
}

export default TodoFilter;