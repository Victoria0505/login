import { Component } from "react";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<SignUp/>}/>
            <Route path ="/SignUp" element={<SignUp/>}/>
            <Route path= "/Login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
export default App