
import './App.css';

 import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
 export default class App extends Component {
   render() {
     return (
      <>
       <div>
        <Router> 
          <Navbar/>
        <Switch>
       
        <Route exact path="/"><News key="sports" pageSize={5} country="in" category="sports" />
        <Link to="/sports"></Link> </Route>  
    <Route exact path="/general"><News key= "general2"pageSize={5} country="in" category="general"/>
    <Link to="/general"></Link> </Route>
    <Route exact path="/business"><News key="business" pageSize={5} country="in" category="business"/></Route>
    <Route exact path="/science"><News key="science"pageSize={5} country="in" category="science"/></Route>
    <Route exact path="/health"><News key="health" pageSize={5} country="in" category="health"/></Route>
  <Route exact path="/technology"><News key="technology1" pageSize={5} country="in" category="technology"/>
   <Link to="/technology"></Link> 
  </Route>
    <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" category="entertainment" /></Route>
             
        </Switch>
         
             </Router>
            
       </div>
       </>
     )
   }
 }
   