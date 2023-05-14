//import React from 'react';
//import HelloWorld from './helloworld';
//import './App.css';

// App.js 
import React from 'react';
import {ButtonRow} from './pieces'
import { useState } from 'react';
import {classnames} from 'tailwindcss-classnames';
import {Outline, Grad, ButtonOutline, ButtonSize, ButtonShape, ButtonColor} from './button_theme';
//import Calendar from 'react-calendar';
import Box from  './pieces.js';
import {MyButton} from './pieces.js';
import './App.css';
import {DiffuseColor} from './pieces.js';
import {getRandomStyle} from './pieces.js';
import {Title} from './pieces.js';


class App extends React.Component {
  handleClick = () => {
    console.log('Button Clicked! ');
  }

  render() {
    const buttons = [
      {onClick: this.handleClick, buttonStyle: getRandomStyle()}, 
      {onClick: this.handleClick, buttonStyle: getRandomStyle()},
      {onClick: this.handleClick, buttonStyle: getRandomStyle()},
    ];

    return(
      <div>
        <Title/>
        <ButtonRow buttons = {buttons} />
      </div>
    )

  }
}
    
    
    {/*<div className='app'>
      <h1 className='text-center'>React Calendar</h1>
        <div className='box'>
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
        </div>
        <div className = "myButton">
          <MyButton size="lg" type="secondary">Enable</MyButton>
        </div>

      {/*<div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
  </p>*/}



export default App;