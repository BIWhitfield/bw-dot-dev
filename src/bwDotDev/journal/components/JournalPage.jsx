import React from 'react';
import { format } from 'date-fns';

import { useFormFields } from '../../lib/hooks/hooksLib';
import JournalAttachments from './JournalAttachments';
import JournalEntry from './JournalEntry';
import JournalGratitudeRow from './JournalGratitudeRow';
import JournalHabitRow from './JournalHabitRow';
import JournalMoodAndDietRow from './JournalMoodAndDietRow';

function JournalPage({ entry }) {
  const [fields, handleFieldChange] = useFormFields({
    habits: entry?.habits || [],
    diet: entry?.diet || '',
    mood: entry?.mood || '',
    entry: entry?.entry || '',
    gratitude1: entry?.gratitude1 || '',
    gratitude2: entry?.gratitude2 || '',
    gratitude3: entry?.gratitude3 || '',
    attachment: entry?.attachment || null,
  });

  const date = format(new Date(entry.createdAt), 'do MMM yyyy');

  return (
    <div className='journal-page'>
      <h6>{date}</h6>
      <JournalHabitRow fields={fields} handleFieldChange={handleFieldChange} />
      <JournalMoodAndDietRow
        fields={fields}
        handleFieldChange={handleFieldChange}
      />
      <JournalEntry fields={fields} handleFieldChange={handleFieldChange} />
      <JournalGratitudeRow
        fields={fields}
        handleFieldChange={handleFieldChange}
      />
      <JournalAttachments
        fields={fields}
        handleFieldChange={handleFieldChange}
      />
    </div>
  );
}

export default JournalPage;
