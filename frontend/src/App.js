import React from "react";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Note from "./pages/Note";

function App() {
  return (
    <>
<Router>
  <Routes>
    <Route path="/" element={<Main/>}/>
     <Route path="/signup" element={<SignUp/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/addNote" element={<Note/>}/>
  </Routes>
</Router>
    
    </>
      
  );
}

export default App;
