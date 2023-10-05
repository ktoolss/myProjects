import React, { useState } from 'react';

const OneNotePage = () => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(null);
    const [newNoteContent, setNewNoteContent] = useState('');

    const handleNoteClick = (index) => {
        setCurrentNote(notes[index]);
    };

    const handleEditorChange = (e) => {
        setNewNoteContent(e.target.value);
    };

    const saveNewNote = () => {
        setNotes([...notes, { text: newNoteContent }]);
        setNewNoteContent('');
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Notes List */}
            <div style={{
                flex: 1,
                background: '#f7f7f7',
                padding: '10px',
                borderRight: '1px solid #e0e0e0',
                overflowY: 'auto'
            }}>
                {notes.map((note, idx) => (
                    <div key={idx} style={{
                        padding: '10px',
                        marginBottom: '5px',
                        borderRadius: '4px',
                        background: note === currentNote ? '#e0e0e0' : '#f7f7f7',
                        cursor: 'pointer',
                        transition: 'background 0.3s'
                    }} onClick={() => handleNoteClick(idx)}>
                        {note.text.substring(0, 50)}...
                    </div>
                ))}
            </div>

            {/* Note Editor */}
            <div style={{ flex: 2, padding: '20px', background: '#fff' }}>
                {currentNote ? (
                    <div>
                        <h2>Editing Note</h2>
                        <textarea 
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '4px',
                                border: '1px solid #e0e0e0',
                                minHeight: '200px',
                                resize: 'none'
                            }}
                            value={currentNote.text}
                            onChange={(e) => {
                                const updatedNotes = [...notes];
                                updatedNotes[notes.indexOf(currentNote)].text = e.target.value;
                                setNotes(updatedNotes);
                            }}
                        />
                    </div>
                ) : (
                    <div>
                        <h2>New Note</h2>
                        <textarea
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '4px',
                                border: '1px solid #e0e0e0',
                                minHeight: '200px',
                                resize: 'none'
                            }}
                            value={newNoteContent}
                            onChange={handleEditorChange}
                            placeholder="Start typing your new note..."
                        />
                        <button 
                            style={{
                                marginTop: '10px',
                                padding: '8px 12px',
                                background: '#007BFF',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                            onClick={saveNewNote}
                        >
                            Save Note
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OneNotePage;
