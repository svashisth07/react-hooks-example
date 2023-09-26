import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function InputComponent(_props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    },
  }));

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
});

export default function UseImperativeHandle() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
