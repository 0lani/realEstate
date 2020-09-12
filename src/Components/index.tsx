import React, { FC, ReactElement } from 'react';
import NavBar from 'NavBar';
import Hero from 'Hero';
import Featured from 'Featured';
import Contact from 'Contact';
import Testimonials from 'Testimonials'


const App: FC = (): ReactElement => {
  return (
    <React.Fragment>
        <NavBar/>
        <Hero/>
        <Featured/>
        <Contact/>
        <Testimonials/>
    </React.Fragment>
  )
}

export default App;