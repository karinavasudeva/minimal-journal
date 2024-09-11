import React, { useState, useEffect } from 'react';
import JournalEntry from './components/JournalEntry';

const App = () => {
  const [entries, setEntries] = useState([]);
  const [showEntries, setShowEntries] = useState(true);

  useEffect(() => {
    const storedEntries = localStorage.getItem('journalEntries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }, [entries]);

  const addNewEntry = () => {
    const now = new Date();
    const newEntry = {
      id: Date.now(),
      date: now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).toUpperCase(),
      time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      prompt: '',
      context: '',
      insights: '',
    };
    setEntries([newEntry, ...entries]);
  };

  const updateEntry = (updatedEntry) => {
    setEntries(entries.map(entry => entry.id === updatedEntry.id ? updatedEntry : entry));
  };

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-header">
          <h1>Clean Journal</h1>
          <div>
            <button onClick={() => setShowEntries(!showEntries)}>
              {showEntries ? 'Hide Entries' : 'Show Entries'}
            </button>
            <button onClick={addNewEntry}>
              Add new
            </button>
          </div>
        </div>
        {showEntries && entries.map(entry => (
          <JournalEntry key={entry.id} entry={entry} onUpdate={updateEntry} />
        ))}
      </div>
    </div>
  );
};

export default App;