import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addbtn = () => {
    console.log("Add Button is clicked");
    setCounter(counter + 1);
  }

  const removebtn = () => {
    console.log("Remove Button is clicked");
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Chai au code</h1>
      <h2>Counter Value :  {counter} </h2>
      <button onClick={addbtn}>Add Value</button>
      <br></br>
      <button onClick={removebtn}>Remove Value</button>
    </div>
  )
}

export default App;