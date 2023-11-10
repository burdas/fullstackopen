import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({name, funcionHandler}) => {
  return <button onClick={funcionHandler}>{name}</button>
}

const StatisticLine = ({name, value}) => {
  return <p>{name} {value}</p>
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;

  if (total === 0){return <p>No feedback given</p>}

  return (
    <>
      <StatisticLine name={'good'} value={good}/>
      <StatisticLine name={'neutral'} value={neutral}/>
      <StatisticLine name={'bad'} value={bad}/>
      <StatisticLine name={'all'} value={total}/>
      <StatisticLine name={'average'} value={(good*1 + neutral*0 + bad*-1)/total}/>
      <StatisticLine name={'positive'} value={good/total*100}/>
    </>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give feedback</h2>
      <Button name='Good' funcionHandler={() => {setGood(good + 1)}}/>
      <Button name='Neutral' funcionHandler={() => {setNeutral(neutral + 1)}}/>
      <Button name='Bad' funcionHandler={() => {setBad(bad + 1)}}/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)