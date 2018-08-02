import React, { Component } from 'react';
import egg from './pics/upgrade1.png';

class Upgrade1 extends Component {

    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
    }


    click() {
        //      this.props.view(); CHICKCOUNT VALUE
        var element = document.getElementById("egg");
        element.classList.remove("egg-norm");
        element.classList.add("egg-up");
        setTimeout(this.shrink, 30);

        switch (lvlOne) {
            case 1:
                if (totalCount>= 100) {
                    lvlOne++;
                    totalCount -= 100; 
                    // document.getElementById("u").innerHTML = "Upgrade for 200";
                }
                break;
            case 2:
                if (totalCount >= 200) {
                    lvlOne = 4;
                    totalCount -= 200; 
                    // document.getElementById("u").innerHTML = "Upgrade for 500";

                }
                break;
            case 4:

                if (totalCount >= 100) {
                    lvlOne = 8;
                    totalCount -= 500; document.getElementById("u").innerHTML = "Fully Upgraded";
                }
                break;
        }

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