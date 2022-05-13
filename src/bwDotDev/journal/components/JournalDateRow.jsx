import React from 'react';
import './journalDateRow.css';

function JournalDateRow({ handleScrollForward, handleScrollBack }) {
  const back = '<';
  const forward = '>';
  return (
    <div className='journal-date-row-root'>
      <button onClick={handleScrollBack}>
        <p>{back}</p>
      </button>
      <button onClick={handleScrollForward}>
        <p>{forward}</p>
      </button>
    </div>
  );
}

export default JournalDateRow;
