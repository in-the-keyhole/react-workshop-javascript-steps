import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(5);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
        {count > 10 ? <p>That's a lot!</p> : null}
      </header>
    </div>
  );
}

export default App;
