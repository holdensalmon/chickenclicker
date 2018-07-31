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
    setTimeout(this.expand, 30);

    this.setState({
      chickCount: ++this.state.chickCount
    })
  }

  expand() {
    this.element = document.getElementById("mainChick");
    element.classList.remove("size-up");
    element.classList.add("size-norm");
  }




  render() {
    return (
      <div>
        <p id="clickNum">You currently have {this.state.chickCount} chickens</p>
        <img id="mainChick"
          class="size-norm"
          onClick={this.click}
          src={chick} />
      </div>
    )
  }
}

export default Generator;