import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for the editor

const WordPage = () => {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('Document Title');

    const handleChange = (value) => {
        setText(value);
    };

    const modules = {
        toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
             {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            [{'color': []}, {'background': []}],
            [{'align': []}],
            ['clean']
        ],
    };

    return (
        <div style={{ padding: '20px' }}>
            <button style={{ marginBottom: '20px' }} onClick={() => alert('Document Saved (mock)!')}>Save</button>
            <input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                style={{ width: '100%', fontSize: '24px', marginBottom: '20px' }}
            />
            <ReactQuill 
                value={text} 
                onChange={handleChange} 
                modules={modules} 
                style={{ height: '500px' }} // Adjust the height as desired
            />
        </div>
    );
};

export default WordPage;
