import React, { Component } from 'react'
import './Todos.css';

class NewTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            tempValue: ""
        }
    }
    
    handleChange = e => {
        this.setState({
            tempValue: e.target.value
        });
    }

    clearInput = () => {
        document.getElementById('input-txt').value = "";
        this.setState({tempValue: ""});
    }

    addNewTodo = () => {
        this.props.fooAddTodo(this.state.tempValue);
        this.clearInput();
    }

    pressEnter = (e) => {
        if(e.key === 'Enter') {
            this.addNewTodo();
        }
    }

    toggleAll = () => {
        this.props.fooToggleAll();
    }

    render() {
        return (
            <div className="input-group">
                <div className="input-txt">
                    <span onClick={this.toggleAll}><i className="fas fa-check"></i></span>
                    <input 
                        type="text" 
                        placeholder="Enter your todo" 
                        onChange={this.handleChange}
                        onKeyPress={this.pressEnter}
                        id="input-txt" ></input>
                </div>
                <button onClick={this.addNewTodo}>Add</button>
            </div>
        )
    }
}

export default NewTodo;