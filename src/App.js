import './App.css';
import { useState} from 'react';
import Child from './Child';
import SuperChild from './SuperChild';
import {CounterContext} from './CounterContext';

function App() {

  const [count,setCounter]=useState(0)
  
  return (
    <div className="App">
      <h3>Context API Examples</h3>
      <div style={{border:'1px solid',marginLeft:'480px',marginRight:'480px'}}>
      <div>{count}</div>
      <br/>
      <div className='container'>
      <div>
        <button onClick={()=>setCounter(count+1)}>Increment</button>
      </div>
      <div>
        <button onClick={()=>setCounter(count-1)}>Decrement</button>
      </div>
      <br/><br/>
      </div>
      </div>
      <br/>
      <CounterContext.Provider value={{count,setCounter}} >
      <Child />
      <SuperChild />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
