import React from 'react';

const JournalEntry = ({ entry, onUpdate }) => {
  const handleChange = (field, value) => {
    onUpdate({ ...entry, [field]: value });
  };

  return (
    <div className="journal-entry">
      <div className="entry-header">
        <span>{entry.date}</span>
        <span>{entry.time}</span>
      </div>
      <div className="entry-prompt">
        <input
          type="text"
          value={entry.prompt}
          onChange={(e) => handleChange('prompt', e.target.value)}
          placeholder="[How could this day have gone better?]"
        />
      </div>
      <div className="entry-section">
        <div className="section-header">
          <span>Context</span>
        </div>
        <textarea
          value={entry.context}
          onChange={(e) => handleChange('context', e.target.value)}
          placeholder="I was able to do half of my tasks..."
          rows={3}
        />
      </div>
      <div className="entry-section">
        <div className="section-header">
          <span>Insights</span>
        </div>
        <textarea
          value={entry.insights}
          onChange={(e) => handleChange('insights', e.target.value)}
          placeholder="In order to improve next time, I think..."
          rows={3}
        />
      </div>
    </div>
  );
};

export default JournalEntry;