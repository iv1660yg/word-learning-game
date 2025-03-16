import React, { useState } from 'react';
import WordDisplay from './components/WordDisplay';
import SentenceDisplay from './components/SentenceDisplay';
import './App.css';

const activities = [
  { type: 'word', content: 'cat' },
  { type: 'word', content: 'dog' },
  { type: 'word', content: 'bat' },
  { type: 'word', content: 'hat' },
  { type: 'word', content: 'rat' },
  { type: 'word', content: 'mat' },
  { type: 'word', content: 'cup' },
  { type: 'word', content: 'pen' },
  { type: 'word', content: 'pig' },
  { type: 'word', content: 'cow' },
  { type: 'word', content: 'sun' },
  { type: 'word', content: 'bag' },
  { type: 'word', content: 'box' },
  { type: 'word', content: 'bed' },
  { type: 'word', content: 'bus' },
  { type: 'word', content: 'go' },
  { type: 'word', content: 'to' },
  { type: 'word', content: 'dad' },
  { type: 'word', content: 'mom' },
  { type: 'word', content: 'pop' },
  { type: 'word', content: 'tap' },
  { type: 'word', content: 'hug' },
  { type: 'word', content: 'win' },
  { type: 'word', content: 'hut' },
  { type: 'word', content: 'mud' },
  { type: 'word', content: 'bin' },
  { type: 'word', content: 'jet' },
  { type: 'word', content: 'fig' },
  { type: 'word', content: 'fox' },
  { type: 'word', content: 'gum' },
  { type: 'word', content: 'log' },
  { type: 'word', content: 'lip' },
  { type: 'word', content: 'top' },
  { type: 'word', content: 'jar' },
  { type: 'word', content: 'ham' },
  { type: 'word', content: 'dim' },
  { type: 'word', content: 'ram' },
  { type: 'sentence', content: 'A big hat' },
  { type: 'sentence', content: 'A big dog' },
  { type: 'sentence', content: 'The cat sat' },
  { type: 'sentence', content: 'The dog ran' },
  { type: 'sentence', content: 'I see the sun' },
  { type: 'sentence', content: 'Mom has a bag' },
  { type: 'sentence', content: 'Dad can run' },
  { type: 'sentence', content: 'The pig dug' },
  { type: 'sentence', content: 'A red ball' },
  { type: 'sentence', content: 'The bus is hot' },
  { type: 'sentence', content: 'I like pie' },
  { type: 'sentence', content: 'Sam has a pen' },
  { type: 'sentence', content: 'The rat is big' },
  { type: 'sentence', content: 'The fox is sly' },
  { type: 'sentence', content: 'The man can win' },  
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentActivity = activities[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <div className="app">
      <h1>Learn to Read!</h1>
      {currentActivity.type === 'word' ? (
        <WordDisplay word={currentActivity.content} />
      ) : (
        <SentenceDisplay sentence={currentActivity.content} />
      )}
      <div className="navigation">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;