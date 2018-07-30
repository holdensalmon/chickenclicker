import React, { Component } from 'react';


class MainChick extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.onClick.bind(this)}>Count Up!!</button>
            </div>
        )
    }
}

React.render(
    <App/>,
    document.getElementById('app-container')
);
export default MainChick;