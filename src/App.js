import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Deletenote from './Pages/Deletenote';
import Dashboard from './Components/Dashboard';
import CreateNotes from './Components/CreateNotes';

function App() {


  return (
    <BrowserRouter>
          <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createnote" element={<CreateNotes />} />
          <Route path="/delete/:id" element={<Deletenote />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
