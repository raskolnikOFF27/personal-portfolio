import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          asd is {count}
        </button>

        <p>asdasdasdasdasd</p>
        <span>yooooooo</span>
      </div>
      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
