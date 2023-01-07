import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calendar from './pages/Calendar.jsx';
import Login from './pages/Login';

// this is a commit comment test

function App() {



  return (
      <Routes>

        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Calendar />}/>

      </Routes>

    
  );
}

export default App;
