import React, { Component } from 'react'
import './Todos.css';

class Todos extends Component {
    render() {
        let { item, onClick } = this.props;
        //First way
        // let className = 'TodoItem';
        // if(item.isCompleted) {
        //     className += ' TodoItem-complete';
        // }

        //Second way - using npm classname
        let classNames = require('classnames');
        let className = classNames({
            'TodoItem': true, 'TodoItem-complete': item.isCompleted
        });

        let box = (item.isCompleted) ? 'fa-check-square' : 'fa-square'

        return (
            <div className={ className } >
                <span onClick={ onClick }><i className={ classNames('far', box) }></i></span>
                <p> { item.title } </p>
            </div>
        )
    }
}

export default Todos;