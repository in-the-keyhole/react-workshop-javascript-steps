import React from "react";
import "./App.css";

function CounterButton() {
  return (
    <button
      onClick={() => {
        // TODO
      }}
    >
      ?
    </button>
  );
}

function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(5);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <CounterButton />
        <button
          onClick={() => {
            setCount(count + 1);
            // setCount(currentCount => currentCount + 1);
          }}
        >
          +
        </button>
        {count}

        <button
          onClick={() => {
            setCount(count - 1);
            // setCount(currentCount => currentCount + 1);
          }}
        >
          -
        </button>
      </header>
    </div>
  );
}

export default App;
