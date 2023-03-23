import React from 'react';
import Forms from "./views/Forms";
import Nav from './components/Nav';
import Home from './views/Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom'


//need a app fucntion 
export default function App(){
  return(
    <BrowserRouter>
      <div className="App">
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Forms' element={<Forms/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}





