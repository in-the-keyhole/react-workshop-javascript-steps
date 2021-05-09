import React from "react";
import { Route, Routes, useNavigate } from "react-router";
import { Link } from "react-router-dom";
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
    function getCount() {
      fetch("/number")
        .then(res => res.json())
        .then(res => {
          setCount(res.number);
        });
    }
    getCount();
  }, []);

  let navigate = useNavigate();
  React.useEffect(() => {
    console.log("count", count);

    if (count > 10) {
      // navigate(`/status`);
    }
  }, [count, navigate]);

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
          <div style={{ display: "flex", padding: 10 }}>
            <Link to="/">Home</Link>
            <div style={{ width: 10 }} />
            <Link to="/status">Status</Link>
          </div>
          <Routes>
            <Route path="/" element={<CounterControls />} />
            <Route
              path="/status"
              element={count > 10 ? <p>That's a lot!</p> : null}
            />
          </Routes>
        </header>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
