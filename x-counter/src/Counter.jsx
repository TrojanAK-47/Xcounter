import { useState } from "react";

function Counter () {

const [Count,setCount] = useState(0)
    return (<div> 
        
        <h1>Counter App</h1>
        <label>Count: {Count}</label>
        <br/>
        <br/>
        <div>
        <button onClick={()=>setCount(Count+ 1)}>Increment</button>
        <button onClick={()=>setCount(Count - 1)}>Decrement</button>
        </div>
        <div></div>
        
         </div>);

}

export default Counter;