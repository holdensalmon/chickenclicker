import React, { Component } from 'react';
import chick from './pics/chicken-sprite-main.png';
import egg from './pics/upgrade1.png';
import lamp from './pics/heatLamp.png';
import Upgrade1 from './upgrade1';

var eggCost = 100;
var lampCost = 250;
var totalSeconds = 0;





class Generator extends Component {

  constructor() {
    super();



    this.state = {
      chickCount: 0,
      eggCount: 0,
      lampCount: 0
    };

    this.click = this.click.bind(this);
    this.eggClick = this.eggClick.bind(this);
    this.lampClick = this.lampClick.bind(this);
    this.incrementSeconds = this.incrementSeconds.bind(this);
  }



  incrementSeconds() {
    totalSeconds += 1;
    this.setState ({
      chickCount: this.state.chickCount + 1
    })
  }
  
  

  click() {
    var element = document.getElementById("mainChick");
    element.classList.remove("size-norm");
    element.classList.add("size-up");
    setTimeout(this.shrink, 30);
    console.log("chicken Works", totalSeconds);

    this.setState({
      chickCount: (this.state.chickCount + 1 + this.state.eggCount)
    })
  }

  shrink() {
    var element = document.getElementById("mainChick");
    element.classList.remove("size-up");
    element.classList.add("size-norm");
  }


  eggClick() {
    var egg = document.getElementById("egg");
    egg.classList.remove("egg-norm");
    egg.classList.add("egg-up");
    setTimeout(this.Turn, 30);
    console.log("egg works");

    if (this.state.chickCount >= eggCost) {
      this.setState({
        chickCount: this.state.chickCount - eggCost
      })
      this.setState({
        eggCount: ++this.state.eggCount
      })

      eggCost = eggCost * 2.5;
    }
  }

  lampClick() {


    var lamp = document.getElementById("lamp");
    lamp.classList.remove("lamp-norm");
    lamp.classList.add("lamp-up");
    setTimeout(this.Turn, 30);
    console.log("lamp works");

    if (this.state.chickCount >= lampCost) {
      setInterval(this.incrementSeconds, 1000);

      this.setState({
        chickCount: this.state.chickCount - lampCost
      })
      this.setState({
        lampCount: ++this.state.lampCount
      })
      lampCost = lampCost * 2.5;
    }
  }

  Turn() {
    var egg = document.getElementById("egg");
    var lamp = document.getElementById("lamp");
    egg.classList.remove("egg-up");
    egg.classList.add("egg-norm");
    lamp.classList.remove("lamp-up");
    lamp.classList.add("lamp-norm");
  }

  render() {

    return (
      <div>
        <p id="clickNum">You currently have {this.state.chickCount} chickens</p>
        <p id="eggNum">You currently have {this.state.eggCount} eggs, another will cost {eggCost}</p>
        <p id="lampNum">You currently have {this.state.lampCount} lamps, another will cost {lampCost}</p>
        <img id="mainChick"
          className="size-norm"
          onClick={this.click}
          src={chick} />
        <img
          id="egg"
          className="egg-norm"
          onClick={this.eggClick}
          src={egg}
        />
          <img
          id="lamp"
          className="egg-norm"
          onClick={this.lampClick}
          src={lamp}
        />
        <div id='seconds-counter'> </div>
      </div>
    )
  }
}

export default Generator;