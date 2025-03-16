// Import React library and LetterButton component, and CSS module
import React from 'react';
import LetterButton from './LetterButton';
import './WordDisplay.css';

// Function to synthesize speech for a given text
const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.8; // Set speaking rate
  speechSynthesis.speak(utterance); // Start speech synthesis
};

// Function to synthesize speech for an array of texts with a delay between each
const speakSequence = (texts, delay = 500) => {
  let index = 0;
  const speakNext = () => {
    if (index < texts.length) { // Check if there are more texts to speak
      const utterance = new SpeechSynthesisUtterance(texts[index]);
      utterance.onend = () => setTimeout(speakNext, delay); // Schedule next speech after current one ends
      speechSynthesis.speak(utterance);
      index++;
    }
  };
  speakNext();
};

// Functional component to display a word and provide options to say the word or spell it out
function WordDisplay({ word }) {
  const letters = word.split(''); // Split word into individual letters

  // Handler for "Say Word" button click
  const handleSpellItOut = () => {
    const sequence = [...letters, word]; // Create a sequence of letters followed by the full word
    speakSequence(sequence); // Speak each letter and then the word
  };

  return (
    <div className="word-display">
      <div className="letters">
        {letters.map((letter, index) => ( // Render each letter as a button
          <LetterButton key={index} letter={letter} />
        ))}
      </div>
      <button className="action-button" onClick={() => speak(word)}> // Button to say the word
        Say Word
      </button>
      <button className="action-button" onClick={handleSpellItOut}> // Button to spell out the word
        Spell It Out
      </button>
    </div>
  );
}

export default WordDisplay; // Export the component for use in other parts of the application
