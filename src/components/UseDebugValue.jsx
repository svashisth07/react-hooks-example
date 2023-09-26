import { useDebugValue, useState } from "react";

export default function UseDebugValue() {
  const [count, setCount] = useState(0);

  useDebugValue(count);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
}
