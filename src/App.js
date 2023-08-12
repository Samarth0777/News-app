import './App.css';

import React, { Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';

export default class App extends Component {


  render() {
    return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route  path='/' element={<News key="business" category={"business"} high={"high"} heading={"Business"}/>}/>
          <Route  path='/entertainment' element={<News key="entertainment" category={"entertainment"} heading={"Entertainment"}/>}/>
          <Route  path='/general' element={<News key="general" category={"general"} heading={"General"}/>}/>
          <Route  path='/health' element={<News key="health" category={"health"} heading={"Health"}/>}/>
          <Route  path='/science' element={<News key="science" category={"science"} heading={"Science"}/>}/>
          <Route  path="/sports" element={<News key="sports" category={"sports"} heading={"Sports"}/>}/>
          <Route  path='/technology' element={<News key="technology" category={"technology"} heading={"Technology"}/>}/>
        </Routes>
      </Router>
    </div> 
    )
  }
}