import React, { Component } from 'react';
import egg from './pics/upgrade1.png';

class Upgrade1 extends Component {

    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
    }


    click() {
        var element = document.getElementById("egg");
        element.classList.remove("egg-norm");
        element.classList.add("egg-up");
        setTimeout(this.shrink, 30);

        console.log("hello2");
    }

    shrink() {
        var element = document.getElementById("egg");
        element.classList.remove("egg-up");
        element.classList.add("egg-norm");
    }


    render() {
        return (
            <div>
                <img
                    id="egg"
                    className="egg-norm"
                    onClick={this.click}
                    src={egg}
                />
            </div>
        )
    }
}


export default Upgrade1;