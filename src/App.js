// App.js 
import React from 'react';
import {ButtonRow} from './buttonrow'
import { useState } from 'react';
import {classnames} from 'tailwindcss-classnames';
import {Outline, Grad, ButtonOutline, ButtonSize, ButtonShape, ButtonColor} from './button_theme';
//import Calendar from 'react-calendar';
import Box from  './buttonrow';
import {MyButton} from './buttonrow';
import './App.css';
import {DiffuseColor} from './buttonrow';
import {getRandomStyle} from './buttonrow';
import {Title, Subtitle} from './buttonrow';


class App extends React.Component {

  render() {
    const buttons = [
      {onClick: this.handleClick, buttonStyle: getRandomStyle()}, 
      {onClick: this.handleClick, buttonStyle: getRandomStyle()},
      {onClick: this.handleClick, buttonStyle: getRandomStyle()},
    ];

    return(
      <div>
        <Title/>
        <Subtitle/>
        <ButtonRow buttons = {buttons} />
      </div>
    )

  }
}


export default App;