import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(5);
  }, []);

  return (
    <div className="App">
      <header className="App-header">{count}</header>
    </div>
  );
}

export default App;
