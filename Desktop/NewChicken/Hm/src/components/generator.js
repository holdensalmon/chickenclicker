import React, { Component } from 'react';
import chick from './pics/chicken-sprite-main.png';
import egg from './pics/upgrade1.png';
import Upgrade1 from './upgrade1';



class Generator extends Component {

  constructor() {
    super();

    this.state = {
      chickCount: 0,
      eggCount: 0
    };

    this.click = this.click.bind(this);
    this.eggClick = this.eggClick.bind(this);

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


  eggClick() {
    var element = document.getElementById("egg");
    element.classList.remove("egg-norm");
    element.classList.add("egg-up");
    setTimeout(this.eggTurn, 30);

    console.log("hello2");

    if (this.state.chickCount >= 20) {
      this.setState({
        chickCount: this.state.chickCount - 20
      })
      this.setState({
        eggCount: ++this.state.eggCount
      })
    }

  }

  eggTurn() {
    var element = document.getElementById("egg");
    element.classList.remove("egg-up");
    element.classList.add("egg-norm");
  }

  render() {

    return (
      <div>
        <p id="clickNum">You currently have {this.state.chickCount} chickens</p>,
        <p id="eggNum">You currently have {this.state.eggCount} eggs</p>
        <img id="mainChick"
          className="size-norm"
          onClick={this.click}
          src={chick} />,
        <img
          id="egg"
          className="egg-norm"
          onClick={this.eggClick}
          src={egg}
        />,
      </div>
    )
  }
}

export default Generator;