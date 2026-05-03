import { usePoll } from '../context/PollContext';
import Poll from '../components/Poll';

function Home() {
  const { polls } = usePoll();

  return (
    <div className="container">
      <h1>Live Polls</h1>
      {polls.length === 0 ? (
        <p>No polls yet. Create one!</p>
      ) : (
        polls.map((poll) => (
          <div key={poll.id} className="card">
            <Poll poll={poll} />
          </div>
        ))
      )}
    </div>
  );
}


export default Home;
