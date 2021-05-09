import React from "react";
import "./App.css";

const CounterContext = React.createContext(undefined);

function CounterButton(props) {
  return <button onClick={props.handleClick}>{props.children}</button>;
}

function CounterControls(props) {
  const context = React.useContext(CounterContext);

  if (!context) return null;

  return (
    <React.Fragment>
      <CounterButton handleClick={context.incrementCount}>
        Increment
      </CounterButton>
      {context.count}
      <CounterButton handleClick={context.decrementCount}>
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

  // React.useEffect(() => {
  //   console.log("count", count);
  // }, [count]);

  return (
    <CounterContext.Provider
      value={{
        count: count,
        incrementCount: () => {
          setCount(count + 1);
        },
        decrementCount: () => {
          setCount(count - 1);
        },
      }}
    >
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
    </CounterContext.Provider>
  );
}

export default App;
