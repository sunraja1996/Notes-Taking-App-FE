import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Note from './Note'
import axios from 'axios';
import Button from 'react-bootstrap/Button';


function Notes() {
    const [notes, setNotes] = useState([]);
  
    useEffect(() => {
      const fetchNotes = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_APIURL}all`);
          setNotes(response.data.notes);
        } catch (error) {
          console.error('Error fetching notes:', error);
        }
      };
  
      fetchNotes();
    }, []);
  
    const handleNoteDeleted = async (deletedNoteId) => {
      try {
        const response = await axios.delete(`${process.env.REACT_APP_APIURL}deletenote/${deletedNoteId}`);
        if (response.data.statusCode === 200) {
          setNotes((prevNotes) => prevNotes.filter((note) => note._id !== deletedNoteId));
        } else {
          console.error('Error deleting note:', response.data.message);
        }
      } catch (error) {
        console.error('Error deleting note:', error);
      }
    };
  
    return (
      <>
        <h1>Notes</h1>
  
        { notes && notes.map((note) => (
          <div key={note._id}>
            <Note note={note} onDelete={handleNoteDeleted} />
            <Button className='m-1 cus-bn' variant="danger" onClick={() => handleNoteDeleted(note._id)}>
              Delete Note
            </Button>
          </div>
        ))}
  
        <Link to='/createnote'>
          <Button className='m-1 cus-bn' variant="success">
            +
          </Button>
        </Link>
      </>
    );
  }
  
  export default Notes;  