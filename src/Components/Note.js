import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Note({ note, onDelete }) {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_APIURL}deletenote/${note._id}`);
      if (response.data.statusCode === 200) {
        onDelete(note._id);
      } else {
        console.error('Error deleting note:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div>
      <p>{note.title}</p>
      <p>{note.content}</p>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
}

export default Note;
