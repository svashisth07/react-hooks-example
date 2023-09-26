import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseId from "./components/UseId";
import UseImperativeHandle from "./components/UseImperativeHandle";
import UseDebugValue from "./components/UseDebugValue";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/useId" element={<UseId />} />
        <Route path="/useImperativeHandle" element={<UseImperativeHandle />} />
        <Route path="/useDebugValue" element={<UseDebugValue />} />
      </Routes>
    </div>
  );
}

export default App;
