import React from "react";
import "./App.css";

function CounterButton(props) {
  return <button onClick={props.handleClick}>{props.children}</button>;
}

function CounterControls(props) {
  return (
    <React.Fragment>
      <CounterButton handleClick={props.incrementCount}>
        Increment
      </CounterButton>
      {props.count}
      <CounterButton handleClick={props.decrementCount}>
        Decrement
      </CounterButton>
    </React.Fragment>
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
        <CounterControls
          count={count}
          incrementCount={() => {
            setCount(count + 1);
          }}
          decrementCount={() => {
            setCount(count - 1);
          }}
        />
        {count > 10 ? <p>That's a lot!</p> : null}
      </header>
    </div>
  );
}

export default App;
