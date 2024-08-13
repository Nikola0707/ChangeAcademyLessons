import { useState } from "react";

function Counter() {
  //   let count = 1;
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter Example</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      {/* Home work */}
      {/* Decrement */}
      {/* Reset  to 0*/}
    </div>
  );
}
export default Counter;
