import React, { useState } from 'react';

const PowerPointPage = () => {
    const [slides, setSlides] = useState([
        // ... your default or mock slides
        { title: 'Introduction', content: 'Welcome to the presentation! Here is an overview of what we will cover.' },
        { title: 'Objectives', content: '1. Understand the basics.\n2. Explore advanced topics.\n3. Answer questions and clarify doubts.' },
        { title: 'History', content: 'A brief history of the topic and its evolution over time.' },
        { title: 'Current Trends', content: 'A look at the latest trends and innovations in the field.' },
        { title: 'Case Study: ABC Corp.', content: 'How ABC Corp. implemented these strategies and achieved success.' },
        { title: 'Challenges', content: 'Some common challenges faced and how to overcome them.' },
        { title: 'Future Outlook', content: 'Predictions and trends for the next decade.' },
        { title: 'Q&A Session', content: 'Answering questions from the audience.' },
        { title: 'Conclusion', content: 'Recap of the main points covered and final thoughts.' },
        { title: 'Thank You', content: 'Thanks for attending! Feel free to reach out for more information.' }
    ]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isEditing, setIsEditing] = useState(false);

    const handleNextSlide = () => {
        if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
    };

    const handlePreviousSlide = () => {
        if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
    };

    const handleAddSlide = () => {
        const newSlide = { title: 'New Slide', content: 'Slide content goes here.' };
        setSlides([...slides, newSlide]);
        setCurrentSlide(slides.length);
        setIsEditing(true);
    };

    const handleSaveSlide = () => {
        setIsEditing(false);
    };

    const handleSlideChange = (field, value) => {
        const updatedSlides = [...slides];
        updatedSlides[currentSlide][field] = value;
        setSlides(updatedSlides);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {isEditing ? (
                <>
                    <input
                        value={slides[currentSlide].title}
                        onChange={(e) => handleSlideChange('title', e.target.value)}
                        placeholder="Slide Title"
                    />
                    <textarea
                        value={slides[currentSlide].content}
                        onChange={(e) => handleSlideChange('content', e.target.value)}
                        placeholder="Slide Content"
                    />
                    <button onClick={handleSaveSlide}>Save Slide</button>
                </>
            ) : (
                <>
                    <h2>{slides[currentSlide].title}</h2>
                    <p>{slides[currentSlide].content}</p>

                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={handlePreviousSlide} disabled={currentSlide === 0}>Previous</button>
                        <button onClick={handleNextSlide} disabled={currentSlide === slides.length - 1}>Next</button>
                        <button onClick={handleAddSlide}>Add Slide</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default PowerPointPage;
