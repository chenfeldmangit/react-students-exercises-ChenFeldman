import React from 'react';
import './App.css';
import LiveExample from './LiveExample';
import LiveExampleFormsFunction from './LiveExample-Forms-Function';
import LiveExampleForms from './LiveExample-Forms';
import LiveExampleFormsUnControlled from './LiveExample-Forms-Uncontrolled';
import LiveExampleLifeCycle from './LiveExample-LifeCycle';

function App() {

  return (
    <div className="App">
      <h1>
        Hello Gong!
      </h1>
      
      <LiveExampleForms/>
      <LiveExampleFormsUnControlled/>
      <LiveExampleLifeCycle />
    </div>
  );
}

export default App;
