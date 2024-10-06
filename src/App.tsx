import React from 'react';

import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>Hello React Typescript</h2>
      <Outlet></Outlet>

    </div>
  );
}

export default App;
