import React from 'react'
import {About, Header, Footer, Skills, Work} from './container/index'
import {Navbar} from './components/index'
import './App.scss'
const App = () => {
  return (
   <div className='app'>
     <Navbar />
     <About />
     <Footer />
     <Header />
     <Skills />
     <Work />
   </div>
    
    
  );
}

export default App;