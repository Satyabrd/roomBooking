import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Dashboard from './components/core/dashboard'

class App extends Component {
  render(){
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <Dashboard/>
      </div>
    );
  }
  
}

export default App;
