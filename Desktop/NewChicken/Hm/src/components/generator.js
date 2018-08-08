import React, { Component } from 'react';
import chick from './pics/chicken-sprite-main.png';
import egg from './pics/upgrade1.png';
import lamp from './pics/heatLamp.png';
import mutant from './pics/mutant.png';
import Upgrade1 from './upgrade1';

var eggCost = 100;
var lampCost = 250;
var mutantCost = 375;
var totalSeconds = 0;





class Generator extends Component {

  constructor() {
    super();


    this.state = {
      chickCount: 0,
      eggCount: 0,
      lampCount: 0,
      mutantCount: 0
    };

    this.click = this.click.bind(this);
    this.eggClick = this.eggClick.bind(this);
    this.lampClick = this.lampClick.bind(this);
    this.mutantClick = this.mutantClick.bind(this);
    this.incrementSeconds = this.incrementSeconds.bind(this);
  }



  incrementSeconds() {
    totalSeconds += 1;
    this.setState({
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
    
    var crit = Math.floor((Math.random() * 10) + 1);
    console.log(crit);

    if (this.state.mutantCount == 1 && crit <= 3) {
      this.setState({
        chickCount: (this.state.chickCount + 2 + this.state.eggCount)
      })
    }
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

      eggCost = eggCost * 1.35;
      eggCost = Math.round(eggCost);
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
      lampCost = lampCost * 1.35;
      lampCost = Math.ceil(lampCost);
    }
  }

  mutantClick() {
    var mutant = document.getElementById("mutant");
    mutant.classList.remove("mutant-norm");
    mutant.classList.add("mutant-up");
    setTimeout(this.Turn, 30);
    console.log("mutant works");

    if (this.state.chickCount >= mutantCost) {
      
      this.setState({
        chickCount: this.state.chickCount - mutantCost
      })
      this.setState({
        mutantCount: ++this.state.mutantCount
      })
      mutantCost = mutantCost * 3;
      mutantCost = Math.ceil(mutantCost);
    }
  }

  Turn() {
    var egg = document.getElementById("egg");
    var lamp = document.getElementById("lamp");
    var mutant = document.getElementById("mutant");
    egg.classList.remove("egg-up");
    egg.classList.add("egg-norm");
    lamp.classList.remove("lamp-up");
    lamp.classList.add("lamp-norm");
    mutant.classList.remove("mutant-up");
    mutant.classList.add("mutant-norm");
  }

  render() {

    return (
      <div>
        <p id="clickNum">You currently have {this.state.chickCount} chickens. <br/> Click on me so I can lay more!</p>
        <p id="eggNum">You currently have {this.state.eggCount} max egg+, another will cost {eggCost}. <br/>Increase the amount of eggs your chick lays per click</p>
        <p id="lampNum">You currently have {this.state.lampCount} lamps, another will cost {lampCost}. <br/> Lamps will increase your chickens mood, <br/> making it lay eggs without having to click</p>
        <p id="mutantNum">You currently have {this.state.mutantCount} mutants, another will cost {mutantCost}. <br/> This gives your chicken the chance to lay a mutant egg, <br/> Mutant chickens are worth two chicks in one! </p>
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
        <img
          id="mutant"
          className="mutant-norm"
          onClick={this.mutantClick}
          src={mutant}
        />
        <p id="cpc">You get {this.state.lampCount} chickens a second</p>
        <p id="cps">You get {this.state.eggCount + 1} chickens per click</p>

      </div>
    )
  }
}

export default Generator;