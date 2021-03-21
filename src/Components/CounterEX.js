import React, { useState } from 'react'

function CounterEX(){
  const [count, setCount] = useState(0)


  return(
    <div>
      <h3>
        {count}
      </h3>
      <h3 onClick={()=>setCount(count+1)}>
        UP
      </h3>
      <h3 onClick={()=>setCount(count-1)}>
        DOWN
      </h3>
    </div>
  )
}

export default CounterEX;
