import React,{useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import joinus from './components/pages/joinus';
import { AnimatePresence } from 'framer-motion';

function App() {
  
  const [loading, setloading] = useState(false);
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
        setloading(false)
    }, 5000)
  },[])
  return (
    <div classname="App">
    {
      loading ?(
        <div classname="mode" id="preloader">
          <h2>ROTARACT CLUB </h2>
            <h3>OF </h3>
            <h4> PARUL UNIVERISTY</h4>
            <img src='WC.png' alt="" class="p"></img>
        </div>
        
      ):(

      <header>
       <AnimatePresence exitBeforeEnter>
        <Router>
          <Navbar/>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/joinus' component={joinus} />
            </Switch>
        </Router>
      </AnimatePresence>
      </header>
    )}
</div>
  
);
}

export default App;
