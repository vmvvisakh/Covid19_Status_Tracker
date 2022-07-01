
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Link ,Route, Switch   } from 'react-router-dom'
import React , {Component} from 'react'

import India from './Components/India'
import World from './Components/World'
import Header from './Components/Header'
import './App.css';

class App extends Component{
 
render(){
 return (
    <div className="Container_fluid">
      
      <Router>
      <Header />
      <Switch>
      <Route exact path="/">

        <India />
        </Route> 
        <Route path="/india">

        <India />
        </Route> 
        <Route path="/world">

        <World />
        </Route> 

        </Switch>
    
      </Router>

     
    </div>
  )
}
}
export default App;
