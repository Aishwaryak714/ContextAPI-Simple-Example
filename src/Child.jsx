import React from 'react';
import { useContext } from 'react';
import {CounterContext} from './CounterContext';

function Child() {
    const {count,setCounter}=useContext(CounterContext)
  return (
    <div>
      <h3>Child Component</h3>
      <div style={{border:'1px solid',marginLeft:'480px',marginRight:'480px'}}>
      <div>{count}</div>
      <br/>
      <div className='container'>
      
      <div>
      <button onClick={()=>setCounter(count+1)}>Increment</button>
      </div>
      {/* <div>
        <button onClick={()=>setCounter(count-1)}>Decrement</button>
      </div> */}
      <br/><br/>
      </div>
      </div>
    </div>
  )
}

export default Child