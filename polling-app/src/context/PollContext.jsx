import { createContext, useContext, useState } from 'react';

const PollContext = createContext();

export const PollProvider = ({ children }) => {
  const [polls, setPolls] = useState([]);

  const createPoll = (question, options, isMultiple) => {
    const newPoll = {
      id: Date.now(),
      question,
      options: options.map(opt => ({
        id: Date.now() + Math.random(),
        text: opt,
        votes: 0,
      })),
      isMultiple, // <-- added!
    };
    setPolls(prev => [...prev, newPoll]);
  }; 

  const vote = (pollId, optionId) => {
    setPolls(prev =>
      prev.map(poll =>
        poll.id === pollId
          ? {
              ...poll,
              options: poll.options.map(opt =>
                opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
              ),
            }
          : poll
      )
    );
  };

  return (
    <PollContext.Provider value={{ polls, createPoll, vote }}>
      {children}
    </PollContext.Provider>
  );
};

export const usePoll = () => useContext(PollContext);
