import { useState } from 'react';
import { usePoll } from '../context/PollContext';

function CreatePoll() {
  const { createPoll } = usePoll();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [isMultiple, setIsMultiple] = useState(false);
  const [success, setSuccess] = useState(false);
  

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPoll(question, options.filter(opt => opt.trim() !== ''), isMultiple);
    setQuestion('');
    setOptions(['', '']);
    setIsMultiple(false);
    setSuccess(true);
  
    setTimeout(() => {
      setSuccess(false);
    }, 3000); // Hide message after 3 seconds
  };
  

  return (
    <div className="form-container fade-in">
      <h1>Create a New Poll</h1>
      {success && (
        <div className="success-message">
        🎉 Poll Created Successfully!
        </div>
        )}  

      <form onSubmit={handleSubmit} className="create-poll-form">
        <input
          type="text"
          placeholder="Poll Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          className="input-field"
        />

        <div className="checkbox-field">
          <label>
            <input
              type="checkbox"
              checked={isMultiple}
              onChange={(e) => setIsMultiple(e.target.checked)}
            />
            &nbsp;Allow Multiple Selections
          </label>
        </div>

        {options.map((opt, idx) => (
          <input
            key={idx}
            type="text"
            placeholder={`Option ${idx + 1}`}
            value={opt}
            onChange={(e) => handleOptionChange(idx, e.target.value)}
            required
            className="input-field"
          />
        ))}

        <div className="button-group">
          <button type="button" onClick={addOption} className="add-option-button">
            Add Option
          </button>
          <button type="submit" className="create-poll-button">
            Create Poll
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePoll;
