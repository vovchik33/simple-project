import React, {useEffect, useState} from 'react';

import './Counter.css';

function Counter() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(`value=${value}`);
  }, [value]);

  return <div className="counter">
    <span>{value}</span>
    <button onClick={()=>setValue(value+1)}>+</button>
    <button onClick={()=>setValue(value-1)}>-</button>
    <button onClick={()=>setValue(0)}>DROP</button>
  </div>
}

export default Counter;