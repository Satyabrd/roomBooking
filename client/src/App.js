import logo from './logo.svg';
import './App.css';
import React,{Component,useState,useContext} from 'react'
import Dashboard from './components/core/dashboardhooks/dashboardhooks'
import ThemeContext from './contexts/themecontext'

/*class App extends Component {
  render(){
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <Dashboard/>
      </div>
    );
  }
  
}*/

function App(props){
  const colors = useContext(ThemeContext);
  return(
    <div className="App" style={{background: colors.blue}}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Dashboard/>
    </div>
  )
}

export default App;
