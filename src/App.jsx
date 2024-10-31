import "./App.css";
import HookForm from "./components/hookform/HookForm";
import RefForm from "./components/refForm/RefForm";
import SimpleForm from "./components/simpleForm/SimpleForm";
import StateFulForm from "./components/stateFulForm/StateFulForm";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      <HookForm></HookForm>
    </>
  );
}

export default App;
