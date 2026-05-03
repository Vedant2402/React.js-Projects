function PollResults({ options }) {
  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div>
      {options.map((option) => {
        const percent = ((option.votes / totalVotes) * 100) || 0;
        return (
          <div key={option.id} style={{ margin: '1rem 0' }}>
            <div style={{ fontWeight: '600' }}>{option.text} - {percent.toFixed(1)}%</div>
            <div className="poll-bar-container">
              <div
                className="poll-bar-fill"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
          </div>
        );
      })}
      <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Total votes: {totalVotes}</p>
    </div>
  );
}
  
export default PollResults;
  