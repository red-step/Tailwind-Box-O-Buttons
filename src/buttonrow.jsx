import React, { Component } from 'react';
import {Outline, Grad, ButtonOutline, ButtonSize, ButtonShape, ButtonColor} from './button_theme';



export const Title = () => (

  <h1 className="font-mono text-4xl font-bold text-sky-800 text-center my-8 ">Ultimate Box O' Tailwind Buttons</h1>
)


export const Subtitle = () => (

  <h2 className="font-mono text-2xl font-bold text-sky-800 text-center my-8 ">(click for more random buttons)</h2>
)


export class ButtonRow extends React.Component{

  state = {
    buttons: this.props.buttons
  }

  updateState = () =>{
    const newStyle = getRandomStyle()
    const newButton = {onClick: this.updateState, buttonStyle: newStyle};

    this.setState(state => ({
      buttons: [...this.state.buttons, newButton]

    }));

    return (
      this.makeNewButton(this.newStyle)  
    );
    }
  
  makeNewButton = (newStyle) => {
    return (
      <ClickableButton buttonStyle = {newStyle} onClick={() => this.updateState}>
    
      </ClickableButton>
      );
  }

  
  render() {
    //console.log("rendering row");
    const { buttons } = this.state;
    //console.log(this.state);
    return (

      <div className = "box-border border-4"> 
        {buttons.map((button, index) => (
          <ClickableButton
            //key = {index}
            onClick = {this.updateState}
            buttonStyle = {button.buttonStyle}
            //type = 'primary'
            />
        ))}
      </div>

    );
  }
}

export function ClickableButton(props){ 

    return (
      <button className = {props.buttonStyle}  onClick={props.onClick}>
      </button>
    );
}

//Utility functions


function randomProperty(obj){
  var keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
};
 

export function getRandomStyle(){
  var size =  randomProperty(ButtonSize);
  var shape = randomProperty(ButtonShape);
  var color = randomProperty(ButtonColor);
  var outline = randomProperty(Outline);
  return (color+" "+outline + " "+ size+" "+shape);

}
