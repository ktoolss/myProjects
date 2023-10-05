import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for the editor

const TextEditor = () => {
  const [text, setText] = useState(''); // Initialize state to hold text data

  const handleChange = (value) => {
    setText(value); // Update the state when text changes
  };

  return (
    <ReactQuill value={text} onChange={handleChange} /> // Render the editor
  );
};

export default TextEditor;
