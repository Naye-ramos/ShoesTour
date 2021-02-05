
import React, {} from 'react';
import Navbar from "./layout/navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {

  return (
 <Router>
    <div >
    <Navbar />
    <Routes />
    </div>
    </Router>
  );
}
export default App;
