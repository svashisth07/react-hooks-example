import { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);

  const expensiveFunction = () => {
    console.log("expensiveFunction called");
    let result = 0;
    for (let i = 0; i < count * 100000000; ++i) {
      result += i;
    }
    return result;
  };

  const memoizedValue = useMemo(expensiveFunction, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
