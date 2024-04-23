import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src="src\assets\smart-parking-logo.png" alt="smart parking" />
      <h1>Smart Parking App</h1>
    </>
  );
}

export default App;
