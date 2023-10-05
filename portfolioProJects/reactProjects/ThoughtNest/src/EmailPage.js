import React, { useState } from 'react';

const mockEmails = [
    { id: 1, sender: "john@example.com", subject: "Meeting Tomorrow", content: "Hi, can we reschedule the meeting?" },
    // ... add more mock emails as needed
];

const EmailPage = () => {
    const [emails, setEmails] = useState(mockEmails);
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [showComposeForm, setShowComposeForm] = useState(false);
    const [newEmail, setNewEmail] = useState({ sender: "", subject: "", content: "" });

    const handleEmailClick = (email) => {
        setSelectedEmail(email);
    };

    const handleEmailSubmit = () => {
        setEmails([...emails, { ...newEmail, id: emails.length + 1 }]);
        setNewEmail({ sender: "", subject: "", content: "" });
        setShowComposeForm(false);
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: 1, borderRight: '1px solid #eee', padding: '20px' }}>
                <button 
                    onClick={() => setShowComposeForm(true)}
                    style={{
                        marginBottom: '20px',
                        padding: '10px 15px',
                        borderRadius: '4px',
                        background: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Compose
                </button>
                {emails.map(email => (
                    <div 
                        key={email.id} 
                        onClick={() => handleEmailClick(email)}
                        style={{
                            padding: '10px',
                            borderBottom: '1px solid #eee',
                            cursor: 'pointer'
                        }}
                    >
                        <strong style={{ display: 'block', marginBottom: '5px' }}>{email.sender}</strong>
                        <p style={{ margin: 0 }}>{email.subject}</p>
                    </div>
                ))}
            </div>

            {showComposeForm ? (
                <div style={{ flex: 2, padding: '1rem' }}>
                    <h2>Compose Email</h2>
                    <input
                        value={newEmail.sender}
                        onChange={(e) => setNewEmail({ ...newEmail, sender: e.target.value })}
                        placeholder="Sender"
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #eee' }}
                    />
                    <input
                        value={newEmail.subject}
                        onChange={(e) => setNewEmail({ ...newEmail, subject: e.target.value })}
                        placeholder="Subject"
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #eee' }}
                    />
                    <textarea
                        value={newEmail.content}
                        onChange={(e) => setNewEmail({ ...newEmail, content: e.target.value })}
                        placeholder="Content"
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #eee', minHeight: '200px' }}
                    />
                    <button 
                        onClick={handleEmailSubmit}
                        style={{
                            padding: '10px 15px',
                            borderRadius: '4px',
                            background: '#007BFF',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Send
                    </button>
                </div>
            ) : (
                selectedEmail && (
                    <div style={{ flex: 2, padding: '1rem' }}>
                        <h2>{selectedEmail.subject}</h2>
                        <p><strong>From:</strong> {selectedEmail.sender}</p>
                        <p>{selectedEmail.content}</p>
                    </div>
                )
            )}
        </div>
    );
};

export default EmailPage;
