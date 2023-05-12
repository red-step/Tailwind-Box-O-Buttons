import React, { Component } from 'react';
import {ButtonOutline, ButtonSize, ButtonShape, ButtonColor} from './button_theme';

//function Box({ children, ...props }) {
//  return <div {...props}>{children}</div>
//}

//export default Box;

function myrandom() {
  return Math.floor(Math.random() * 2) || -1;
}

function randomProperty(obj){
  var keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
};

export function getRandomStyle(){
  var outline = randomProperty(ButtonOutline);
  var size =  randomProperty(ButtonSize);
  var shape = randomProperty(ButtonShape);
  var color = randomProperty(ButtonColor);
  return (color+" "+outline+" "+size+" "+shape);
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

export const Title = () => (

      <h1 className="font-mono text-4xl font-bold text-sky-800 text-center my-8 ">Tailwind/React Button Generator</h1>

)


export class ButtonRow extends React.Component{

  state = {
    buttons: this.props.buttons
  }

  updateState = () =>{
    //const lastColor = this.state.buttons.at(-1).buttonColor
    const newStyle = getRandomStyle()
    //console.log(newStyle)
    const newButton = {onClick: this.updateState, buttonStyle: newStyle};
    //console.log("this buttons");
    //console.log(this.state.buttons);
    
    //const nextlabel = 'b'+ (this.state.buttons.length + 2);
    //console.log(nextlabel);
    //console.log("update state");
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
        B
      </ClickableButton>
      );
  }



  
  render() {
    //console.log("rendering row");
    const { buttons } = this.state;
    //console.log(this.state);
    return (
      <div class = "box-border border-4"> 
        {buttons.map((button, index) => (
          <ClickableButton
            key = {index}
            onClick = {this.updateState}
            buttonStyle = {button.buttonStyle}
            type = 'primary'
            />
        ))}
          {/*<ClickableButton
            key = {500}
            onClick = {this.updateState}
            label = "Add button"
            type = 'primary'
        />*/}
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
    //const {thisClick, newColor} = this.props;
    //console.log("this click fun");
    //console.log(thisClick);
    //console.log("here's the button style");
    //console.log(this.props.buttonStyle);
    //const classstr = this.props.buttonStyle + ButtonType[type] + " " + ButtonSize[size] ;
    //console.log(classstr)
    return (
      <button className = {this.props.buttonStyle}  onClick={this.props.onClick}>
      A</button>
    );
  }
}


//export function MyButton({size, type, children}) {
  
    // This can be improved. I’m keeping it simple here by joining two strings.
//    const classNames = ButtonType[type] + " " + ButtonSize[size];
  
//    return (
//      <button className={classNames}>{children}</button>
//    )
//  }


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