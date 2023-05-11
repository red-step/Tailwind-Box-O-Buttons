import React, { Component } from 'react';
import {ButtonType, ButtonSize} from './button_theme';

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export default Box;

function myrandom() {
  return Math.floor(Math.random() * 2) || -1;
}

export function DiffuseColor(prevColor){
  console.log(prevColor);
  var amt1 = myrandom();
  var amt2 = myrandom();
  var amt3 = myrandom();
  var num = parseInt(prevColor,16),
    R = (num >> 16) + amt1,
    B = (num >> 8 & 0x00FF) + amt2,
    G = (num & 0x0000FF) + amt3;

    return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
}

export class ButtonRow extends React.Component{

  state = {

    buttons: this.props.buttons
  }

  handleClick = (newButton) =>{

    this.setState(prevState => ({
      buttons: [...prevState.buttons, newButton]

    }));
  }
  render() {
    console.log(this.props);
    const { buttons } = this.state;
    console.log(this.state);
    return (
      <div>
        {buttons.map((button, index) => (
          <ClickableButton
            key = {index}
            onClick = {this.HandleClick}
            newButton = {{ onClick: this.handleClick, label: `button ${index + 2}`}}
            label = {button.label}
            />
        ))}
          <ClickableButton
            onClick = {this.HandleClick}
            newButton = {{ onClick: this.handleClick, label: `button ${buttons.length + 2}`}}
            label = "Add button"
            />
      </div>

    );
  }
}

export class ClickableButton extends React.Component {
  handleClick = () => {
    console.log(this.props);
    const {onClick, newButton} = this.props;
    onClick(newButton);
    console.log(`making a new button!`);
  }

  render() {
    const { label } = this.props;
    return (
      <button onClick={() => this.handleClick}>
        {label}
      </button>
    );
  }
}


export function MyButton({size, type, children}) {
  
    // This can be improved. I’m keeping it simple here by joining two strings.
    const classNames = ButtonType[type] + " " + ButtonSize[size];
  
    return (
      <button className={classNames}>{children}</button>
    )
  }


{/*export default function Box2() {
  return (
    <Box
      style={{
        backgroundColor: '#333',
        borderRadius: 4,
        color: '#eee',
        minHeight: 200,
        padding: 12,
        width: 300,
      }}
    >
      Sally Montgomery
    </Box>
  )
}*/}