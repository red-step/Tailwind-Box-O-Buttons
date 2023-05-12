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

  updateState = () =>{
    const newButton = {onClick: this.updateState, label: this.newLabel};
    console.log("this buttons");
    console.log(this.state.buttons);
    const nextlabel = 'b'+ (this.state.buttons.length + 2);
    console.log(nextlabel);
    console.log("update state");
    this.setState(state => ({
      buttons: [...this.state.buttons, newButton]

    }));

    return (
      this.makeNewButton(this.newLable)  //RECURSION HERE IS CONFUSING ME!!
    );
    }
  
  makeNewButton = (newLabel) => {
    return (
      <ClickableButton onClick={() => this.updateState}>
        {newLabel}
      </ClickableButton>
      );
  }



  
  render() {
    //console.log("rendering row");
    const { buttons } = this.state;
    //console.log(this.state);
    return (
      <div>
        {buttons.map((button, index) => (
          <ClickableButton
            key = {index}
            onClick = {this.updateState}
            label = {button.label}
            type = 'primary'
            />
        ))}
          <ClickableButton
            key = {500}
            onClick = {this.updateState}
            label = "Add button"
            type = 'primary'
            />
      </div>

    );
  }
}

export class ClickableButton extends React.Component {
  //handleClick = () => {
  //
    // USE THIS FUNCTION TO CREATE A NEW BUTTON: the new button function actually gets passed in.

  //  const {handleClick, newLabel} = this.props;
   // console.log(`making a new button!`);
 
  //}

  render() {
    //console.log("new clickable button");
    //console.log(this.props);
    const {thisClick, newLabel} = this.props;
    //console.log("this click fun");
    //console.log(thisClick);
    //console.log(newLabel)
    const type = 'me';
    const size = 'lg'
    const classstr = "bg-[#808080]" + ButtonType[type] + " " + ButtonSize[size] ;
    return (
      <button className = {classstr}  onClick={this.props.onClick}>
        HI:  {this.props.label}
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