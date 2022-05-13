import React from 'react';
import { format } from 'date-fns';

import Modal from '../components/modal/Modal';
import {
  JournalAttachmentsRow,
  JournalDateRow,
  JournalEntry,
  JournalGratitudeRow,
  JournalHabitRow,
  JournalMoodAndDietRow,
} from './components';

function Journal({ isOpen, handleClose }) {
  const item = {
    entry: 'new entry',
    habits: [
      { name: 'hab1', completed: true },
      { name: 'vitamins', completed: false },
    ],
    gratitude1: 'data.gratitude1',
    gratitude2: 'data.gratitude2',
    gratitude3: 'data.gratitude3',
    mood: 4,
    diet: 3,
    attachment: 'data.attachment',
    createdAt: 1652432184837,
  };
  const date = format(new Date(item.createdAt), 'do MMM yyyy');
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title={date}>
      <div className='journal-root'>
        <JournalDateRow />
        <JournalHabitRow />
        <JournalMoodAndDietRow />
        <JournalEntry />
        <JournalGratitudeRow />
        <JournalAttachmentsRow />
      </div>
    </Modal>
  );
}

export default Journal;
