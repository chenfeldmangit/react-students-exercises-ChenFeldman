import React from 'react';
import './App.css';

function LiveExampleFormsFunction(props) {
  const newsFeedItems = ["item","new data","my data"];

  return (
    <div>
      {newsFeedItems.map(item => {
        return <div>{item}</div>
      })}
    </div>
  )
}

export default LiveExampleFormsFunction;
