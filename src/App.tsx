import React from 'react';
import './App.scss';
import { Home } from './page/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
