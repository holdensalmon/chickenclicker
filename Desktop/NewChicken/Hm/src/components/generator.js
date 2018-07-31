import React, { Component } from 'react';
import chick from './pics/chicken-sprite-main.png';

class Generator extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.tap = this.tap.bind(this);
    // this.clicks = document.getElementById("clickNum");

  }

    tap() {
      this.setState({
        count: ++this.state.count
      })
    }

    expand() {
      var element = document.getElementById("mainChick");
      element.classList.remove("size-up");
      element.classList.add("size-norm");
    }

    Click() {
      // var element = document.getElementById("mainChick");
      // element.classList.remove("size-norm");
      // element.classList.add("size-up");
      // setTimeout(expand, 30);
      // this.count += 1;
      // clicks.innerHTML = "Clicks: " + this.count;

    }

    


  render() {
    return (
      <div>
        <p>This button was clicked { this.state.count } times!</p>
        <img id="mainChick"
        class="size-norm"
        onClick={ this.tap } 
        src={chick} />
      </div>
    )
  }
}

export default Generator;