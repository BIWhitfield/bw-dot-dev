import { useState } from 'react';

import Modal from '../components/modal/Modal';
import { JournalDateRow } from './components';

import JournalPage from './components/JournalPage';

function Journal({ isOpen, handleClose }) {
  const [currentEntry, setCurrentEntry] = useState(0);

  const items = [
    {
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
    },
  ];

  const handleScrollBack = () => {
    console.log('Hanlde back', currentEntry, currentEntry - 1)
    if (items[currentEntry - 1] != null) {
      setCurrentEntry(currentEntry - 1);
    }
  };
  
  const handleScrollForward = () => {
    console.log('Hanlde forward', currentEntry, currentEntry + 1)
    if (items[currentEntry + 1] != null) {
      setCurrentEntry(currentEntry + 1);
    }
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title='Journal'>
      <div className='journal-root'>
        <JournalDateRow
          items={items}
          handleScrollForward={handleScrollForward}
          handleScrollBack={handleScrollBack}
        />
        <JournalPage entry={items[currentEntry]} />
      </div>
    </Modal>
  );
}

export default Journal;
