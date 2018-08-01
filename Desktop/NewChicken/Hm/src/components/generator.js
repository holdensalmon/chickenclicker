import React, { Component } from 'react';
import chick from './pics/chicken-sprite-main.png';

class Generator extends Component {

  constructor() {
    super();
 

    this.state = {
      chickCount: 0
    };
    this.click = this.click.bind(this);

  }

  click() {
    var element = document.getElementById("mainChick");
    element.classList.remove("size-norm");
    element.classList.add("size-up");
    setTimeout(this.shrink, 30);
    console.log("hello1");

    this.setState({
      chickCount: ++this.state.chickCount
    })

  }

  shrink() {
    var element = document.getElementById("mainChick");
    element.classList.remove("size-up");
    element.classList.add("size-norm");
  }




  render() {
    return (
      <div>
        <p id="clickNum">You currently have {this.state.chickCount} chickens</p>
        <img id="mainChick"
          className="size-norm"
          onClick={this.click}
          src={chick} />
      </div>
    )
  }
}

export default Generator;