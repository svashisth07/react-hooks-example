import { useRef } from "react";
import "./UseRef.css";
export default function UseRef() {
  const boxRef = useRef(null);

  const handleClick = () => {
    boxRef.current.classList.add("animate");
  };

  return (
    <div>
      <div className="box" ref={boxRef}></div>
      <button onClick={handleClick}>Change to blue</button>
    </div>
  );
}
