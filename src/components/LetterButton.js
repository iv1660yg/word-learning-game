import React from 'react';
import './LetterButton.css';

// Function to speak text using the browser's speech synthesis API
const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.8; // Set speech rate to 0.8
  speechSynthesis.speak(utterance); // Speak the provided text
};

// Functional component for a button that displays a letter and speaks it when clicked
function LetterButton({ letter }) {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96c93d', '#f7d794']; // Array of color options
  const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Select a random color

  return (
    <button
      className="letter-button"
      style={{ backgroundColor: randomColor }} // Apply a random background color to the button
      onClick={() => speak(letter)} // Call the speak function with the letter when clicked
    >
      {letter}
    </button>
  );
}

export default LetterButton; // Export the LetterButton component as the default export