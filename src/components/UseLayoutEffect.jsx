import { useLayoutEffect, useRef, useState } from "react";

export default function UseLayoutEffect() {
  const [position, setPosition] = useState(0);
  const ref = useRef(null);

  useLayoutEffect(() => {
    let animationFrameId;
    const animate = () => {
      setPosition((prevPosition) => prevPosition + 1);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  });

  useLayoutEffect(() => {
    ref.current.style.transform = `translateX(${position}px)`;
  }, [position]);

  return (
    <div>
      <div
        ref={ref}
        style={{ width: "50px", height: "50px", backgroundColor: "red" }}
      ></div>
    </div>
  );
}
