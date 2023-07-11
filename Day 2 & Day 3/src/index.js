import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Preregister from './preregistration';
import Home from './homepage';
import StudentRegister from './studentregister';
import reportWebVitals from './reportWebVitals';
import TutorRegister from './tutorregister';
import { Route } from 'react-router-dom';
import About from './about';
import Edit from './edit';
import Dashboard from './dashboard';
import C from './c';
// import Sidebar from './sidebar';
// import Preregister from './preregistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<About />}></Route>
    <Route path="/studentregister" element={ <StudentRegister/>}></Route>
    <Route path="/tutorregister" element={<TutorRegister/>}></Route>
    <Route path="/app" element={<App />}></Route>
    <Route path="/homepage" element={<Home />}></Route>
    <Route path="/preregister" element={ <Preregister/>}></Route>
    <Route path="/edit" element={ <Edit/>}></Route>
    <Route path="/dashboard" element={ <Dashboard/>}></Route>
    <Route path="/c" element={ <C/>}></Route>
    {/* <Route path="/sidebar" element={ <Sidebar/>}></Route> */}
      {/* <Route path="/profile" element={ <Profile/>}></Route>
    <Route path="/vclassroom" element={ <Virtualclassroom/>}></Route>  */}
  </Routes> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
