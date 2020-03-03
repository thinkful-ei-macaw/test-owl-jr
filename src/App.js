import React from 'react';
import List from './List'
import './App.css';


function App(props) {
  return (
    <main className='App'>
      <header className='App-header'></header>
      <div className='participants-list'>
        <List participants={props.participants} />
      </div>
    </main>
  );
}

export default App;