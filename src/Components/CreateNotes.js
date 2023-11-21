import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateNotes() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate()

  const save = async () => {

    try {
        const token = sessionStorage.getItem('token');
      const response = await axios.post(`${process.env.REACT_APP_APIURL}create`, {
        title: title,
        content: content
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })

      if (response.data.statusCode === 200) {
        navigate('/dashboard');
        console.log("Note created successfully");
      } else {
        console.error('Error creating note:', response.data.message);
      }
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <>
    <h1 className='text-center'> Create Note </h1>
    <Form style={{ width: '70%', margin: 'auto' }}>
    <Form.Group className="mb-3" controlId="formNote">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formContent">
      <Form.Label>Notes</Form.Label>
      <Form.Control as="textarea" rows={3} required value={content} onChange={(e) => setContent(e.target.value)} />
    </Form.Group>
    <Button className='m-1 cus-bn' variant="success" onClick={save}>
      Save note
    </Button>
    {title && <h2>{title}</h2>}
  </Form>
  </>
  );
}

export default CreateNotes;
