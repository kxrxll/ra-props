import React from 'react';
import Stars from './Stars';
import Listing from './Listing';
import './App.css';

function App() {
  return (
    <>
      <Stars count={4} />
      <Listing />
    </>
  )
}

export default App;
