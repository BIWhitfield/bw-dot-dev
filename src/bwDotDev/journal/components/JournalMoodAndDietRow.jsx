import React from 'react'

function JournalMoodAndDietRow({ handleFieldChange, fields }) {
  const { mood, diet } = fields;
  return (
    <div className='journal-mood-diet-root'>
      <label htmlFor='mood'>Mood</label>
      <input id='mood' name='mood' value={mood} onChange={handleFieldChange} />
      <label htmlFor='diet'>Diet</label>
      <input id='diet' name='diet' value={diet} onChange={handleFieldChange} />
    </div>
  );
}

export default JournalMoodAndDietRow