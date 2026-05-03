import { useState } from 'react';
import { usePoll } from '../context/PollContext';
import PollOption from './PollOption';
import PollResults from './PollResults';

function Poll({ poll }) {
  const { vote } = usePoll();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (optionId) => {
    if (poll.isMultiple) {
      // For multiple selection (checkbox)
      setSelectedOptions(prev =>
        prev.includes(optionId)
          ? prev.filter(id => id !== optionId)
          : [...prev, optionId]
      );
    } else {
      // For single selection (radio button)
      setSelectedOptions([optionId]);
    }
  };

  const handleSubmitVote = () => {
    selectedOptions.forEach((optionId) => {
      vote(poll.id, optionId);
    });
    setSubmitted(true);
  };

  const handleClearVote = () => {
    setSelectedOptions([]);
    setSubmitted(false);
  };

  return (
    <div className="card">
      <h2>{poll.question}</h2>

      {!submitted ? (
        <>
          {poll.options.map((opt) => (
            <PollOption
              key={opt.id}
              option={opt}
              selected={selectedOptions.includes(opt.id)}
              onSelect={() => handleSelect(opt.id)}
              isMultiple={poll.isMultiple}
            />
          ))}
          <button
            onClick={handleSubmitVote}
            disabled={selectedOptions.length === 0}
            style={{ marginTop: '1rem' }}
          >
            Submit Vote
          </button>
        </>
      ) : (
        <>
          <PollResults options={poll.options} />
          <button onClick={handleClearVote} style={{ marginTop: '1rem' }}>
            Clear Vote
          </button>
        </>
      )}
    </div>
  );
}

export default Poll;
