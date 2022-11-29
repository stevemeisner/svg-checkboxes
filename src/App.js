import React from 'react'
import CheckButton from './components/checkButton.tsx'

function App() {

  return (
    <div className="App">
      <div className="list">
        <CheckButton buttonText="pickup dog food" />
        <CheckButton buttonText="drop off car payment" />
        <CheckButton buttonText="finish blog post" />
      </div>
    </div>
  );
}

export default App;
