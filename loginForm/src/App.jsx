import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.scss';
import Pages from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Pages.LoginPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
