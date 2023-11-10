import React, { useState } from "react";
import ReactDOM from "react-dom";

const Anecdote = ({ anecdote, votes}) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>Has {votes} votes</p>
    </>
  );
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const maxVotes = Math.max(...votes);

  const generateRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const voteAnecdote = () => {
    const votesAux = [...votes];
    votesAux[selected]++;
    setVotes(votesAux);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote anecdote={props.anecdotes[selected]} votes={votes[selected]} />
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={generateRandomAnecdote}>Next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <Anecdote anecdote={props.anecdotes[votes.indexOf(maxVotes)]} votes={maxVotes} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
