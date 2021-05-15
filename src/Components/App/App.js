import React from 'react';
import StartModalBlock from '../StartModalBlock';
import TypingTestBlock from '../TypingTestBlock';
import ResultBlock from '../ResultBlock';

import './App.css';

function App() {
  return (
    <div className="App container">
      <StartModalBlock/>
      <TypingTestBlock/>
      <ResultBlock/>
    </div>
  );
}

export default App;
