import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HelloWorld from "./components/HelloWorld";
import Students from "./components/Students";
import Fruits from "./components/Fruits";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const name = "Nikola";

  return (
    <>
      <h1>Change Academy</h1>
      <p>{name}</p>
      <HelloWorld />
      <Students />
      <Fruits />
      <Counter />
    </>
  );
}

export default App;
