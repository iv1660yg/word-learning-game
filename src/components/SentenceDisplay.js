import React from 'react';
import './SentenceDisplay.css';

// Function to speak given text using Web Speech API
const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.8; // Set the speaking rate to 0.8 times normal speed
  speechSynthesis.speak(utterance); // Speak the utterance
};

// React component for displaying and interacting with a sentence
function SentenceDisplay({ sentence }) {
  const words = sentence.split(' '); // Split the sentence into individual words
  return (
    <div className="sentence-display">
      <div className="words">
        {/* Map over each word to create a button */}
        {words.map((word, index) => (
          <button
            key={index} // Assign a unique key for each word
            className="word-button" // Apply class for styling
            onClick={() => speak(word)} // On click, speak the individual word
          >
            {word} // Display the word
          </button>
        ))}
      </div>
      <button className="action-button" onClick={() => speak(sentence)}>
        Say Sentence // Button to speak the entire sentence
      </button>
    </div>
  );
}

export default SentenceDisplay; // Export the component for use in other parts of the application
