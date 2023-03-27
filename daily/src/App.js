import React from 'react';
import Forms from "./views/Forms";
import Nav from './components/Nav';
import Home from './views/Home';
import Register from './views/Register'
import Page from './views/Page'
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
          <Route path='/Register' element={<Register/>} />
          <Route path='/Page' element={<Page/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}





