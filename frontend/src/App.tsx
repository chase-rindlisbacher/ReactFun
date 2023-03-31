import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';



function GoButton(props:any) {
  
  return (
    <div>
      <button onClick={props.numClick /* Pointer to a function */}>Go!</button>
      <br />
    </div>
  )
}

function AmountOfGo (props: any) {
  return (
    <label>You've pressed the button: {props.num} time(s)!</label>
  )
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GoButton numClick={() => setCount(count + 1)} />
      <AmountOfGo num={count} />
    </div>
  );
}

export default App;
