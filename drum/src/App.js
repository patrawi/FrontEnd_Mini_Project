import React, {Component} from 'react';
import {bankOne, bankTwo} from './data/data';
import SoundPad from './soundpad';
import ControlPad from './controlPad';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type : `${String.fromCharCode(160)}`,
      set1 : bankOne,
      set2 : bankTwo,
      value : 0.3,
      power : true,
      soundSet : true,
    }
    this.handleClick = this.handleClick.bind(this);
    this.powerCheck = this.powerCheck.bind(this);
    this.bankCheck = this.bankCheck.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }
  handleClick(keyID) {
    this.setState({
      type : keyID
    })
 
  }
  
  powerCheck() {
    console.log('hello from powerCheck')
    this.setState({
      power : !this.state.power
    })
  }
  bankCheck() {
    console.log('hello');
    this.setState({
      soundSet : !this.state.soundSet
    })
    if(!this.state.soundSet) {
      this.setState({
        type : 'Heater Kit'
      })
    } else {
      this.setState({
        type : 'Smoother Piano Kit'
      })
    }
  }
  handleVolume(e) {
    this.setState({
      value : e.target.value, 
      type : `Volume : ${Math.round(e.target.value*100)}`
    })
    setTimeout(() => this.clearDisplay(),1000);
  }
  clearDisplay() {
        this.setState({
          type : String.fromCharCode(160)
        })
  }
  render() {
    return (
      <main id="drum-machine">
        <div className = 'title'>
          <h1>Drum Machine</h1>
          <div className = 'underline'></div>
        </div>
        <div id="display" className = 'container'>
          <div className = 'pads'>
          {
            this.state.soundSet ? this.state.set1.map((item) => {
              return <SoundPad key = {item.id} chord = {item} handleClick = {this.handleClick} power = {this.state.power} volume = {this.state.value}  />
            }) : this.state.set2.map((item) => {
              return <SoundPad key = {item.id} chord = {item}  handleClick = {this.handleClick} power = {this.state.power} volume = {this.state.value}/>
            })
          }
          </div>
          <div className = 'control'>
            <ControlPad type = {this.state.type} value = {this.state.value} handleBank = {this.bankCheck} handlePower ={this.powerCheck} handleVolume = {this.handleVolume} power = {this.state.power} />
          </div>
          
        
          
        </div>
      </main>
    )
  }
}
export default App;
