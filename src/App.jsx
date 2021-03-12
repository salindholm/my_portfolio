import React from 'react'
import Navigation from './components/Navigation';
import Stack from "./components/Stack";
import Header from "./components/Header";
import Contact from './components/Contact';
import Work from './components/Work';

const App = () => {
    return (
      <>
        <Navigation/>
        <Header/>
        <Stack/>
        <Work/>
        <Contact/>
      </>
    );
  };

export default App;