// import logo from './logo.svg';
import React from 'react';
import MemeBody from './components/MemeBody';
import MemeNav from './components/MemeNav';

 
function App(){
  return(
    <div className='MemeMain'>
      <MemeNav />
      <MemeBody />
    </div>
  )
}

export default App