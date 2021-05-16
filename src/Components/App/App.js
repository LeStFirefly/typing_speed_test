import React from 'react';
import StartModalBlock from '../StartModalBlock';
import TypingTestBlock from '../TypingTestBlock';
import ResultBlock from '../ResultBlock';

import './App.sass';

function App() {
  return (
    <div className="App">
      <StartModalBlock/>
      <ResultBlock/>
      <div className="container">
        <h1>Добро пожаловать!</h1>
        <h2>Проверь свою скорость в тренажере слепой печати!</h2>
        <TypingTestBlock/>
      </div>
    </div>
  );
}

export default App;
