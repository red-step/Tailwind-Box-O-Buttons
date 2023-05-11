//import React from 'react';
//import HelloWorld from './helloworld';
//import './App.css';

// App.js 

import { useState } from 'react';
import {classnames} from 'tailwindcss-classnames';
//import Calendar from 'react-calendar';
import Box from  './pieces.js';
import {MyButton} from './pieces.js';
import './App.css';
import {DiffuseColor} from './pieces.js';


function App() {
  const [date, setDate] = useState(new Date());
  var color = '808080'
  var newcolor = DiffuseColor(color)
  console.log(newcolor)
  return (
    <div className='app'>
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
    </div>
  );
}

export default App;