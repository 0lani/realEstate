import React, { FC } from 'react';
import NavBar from 'NavBar';
import Hero from 'Hero'
import Featured from 'Featured'


const App: FC = () => {
  return (
    <React.Fragment>
        <NavBar/>
        <Hero/>
        <Featured/>
    </React.Fragment>
  )
}

export default App;