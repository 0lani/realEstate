import React, { FC, ReactElement } from 'react';
import NavBar from 'NavBar';
import Hero from 'Hero';
import Featured from 'Featured';
import Contact from 'Contact';


const App: FC = (): ReactElement => {
  return (
    <React.Fragment>
        <NavBar/>
        <Hero/>
        <Featured/>
        <Contact/>
    </React.Fragment>
  )
}

export default App;