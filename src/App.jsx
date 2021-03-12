import React from 'react'
import Navigation from './components/Navigation';
import Stack from "./components/Stack";
import Header from "./components/Header";
// import Contact from './components/Contact';

const App = () => {
    return (
      <>
        <Navigation/>
        <Header/>
        <Stack/>
        {/* <Contact/> */}
      </>
    );
  };

export default App;