import { useId } from "react";

function LabelInputPair() {
  const id = useId();
  return (
    <div style={{ marginBottom: "50px" }}>
      <label htmlFor={id}>
        Click on this label and it`ll highlight the input {id}
        <input id={id} placeholder={`input id: ${id}`} />
      </label>
    </div>
  );
}

export default function UseId() {
  return (
    <div>
      <LabelInputPair />
      <LabelInputPair />
      <LabelInputPair />
      <LabelInputPair />
    </div>
  );
}
