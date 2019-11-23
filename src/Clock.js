import React, {Component} from 'react';

class Clock extends Component {
    constructor(){
        super();
        this.state = {
            clock: new Date().toLocaleTimeString()
        }

        setInterval(() => {
            this.setState({
                clock: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    render() {
        return (
            <h1>It is { this.state.clock }</h1>
        )
    }
}

export default Clock;