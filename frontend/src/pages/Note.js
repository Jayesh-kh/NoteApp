import React, { useState, useEffect } from "react";
import "./notes.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import axios from "axios";
import toast from "react-hot-toast";
import { notesArray } from "../Notes";


const Note = () => {
  const [note, setNote] = useState([]);
  //const [password, setPassword] = useState('');
  //const [showNote, setShowNote] = useState()
  const [auth, setAuth] = useAuth();

  const showNote = () =>{
    setNote(notesArray)
    console.log(note)
  }

  
  
  // const createNote = async (e) => {
  //   try {
      
  //     const response = await axios.post(
  //       'http://localhost:8080/api/v1/note/createNote',
  //       {
  //         note
         
  //       }
  //     );
  //      //console.log(response);
    
  //   if (response && response.data.success) {
  //     toast.success(response && response.data.message);
  //     setAuth({
  //       ...auth,
  //       user: response.data.user,
  //       token: response.data.token,
  //     });
  //     localStorage.setItem("auth", JSON.stringify(response.data));
  //   } else {
  //     console.log('somthing wrong')
  //     toast.error(response.data.message);
  //   }
  // } catch (error) {
  //   console.log(error);
  //   toast.error("Something went wrong");
  // }
  // };

   
  // const fetchNotes = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8080/api/v1/note/getNotes');
  //     const data = await response.json();
  //     setNote(data);
  //     console.log(data)
  //   } catch (error) {
  //     console.error('Error fetching notes:', error);
  //   }
  // };
  useEffect(() => {
    showNote();
  }, []);

  return (
    <div>
      <div className="header">
        <h1>welcome, {auth?.user?.username}</h1>
        <Link to={'/'}><button className="logout">Logout</button></Link>
        
      </div>
      <div className="side">
        <div className="addnote">
          <div className="heading">Add my Note</div>
          <textarea className="textbox" />
          <button className="button" >Save</button>
        </div>

        <div className="allnotes">
          <div className="heading">All Notes</div>
          <hr />
          <div className="notes">
  
            <ul >
        {note.map((elem,i) => (
          <li key={i}>
            <h3 className="note">{elem.note}</h3>
            <div className="time">{elem.time}</div>
          </li>
        ))}
      </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
