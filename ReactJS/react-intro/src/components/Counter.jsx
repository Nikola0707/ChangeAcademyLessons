import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => setCount((prevCount) => prevCount + 1);
  // Decrement function
  const decrement = () => setCount((prevCount) => prevCount - 1);
  // Reset function
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter;
