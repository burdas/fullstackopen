import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(6)
  const [neutral, setNeutral] = useState(2)
  const [bad, setBad] = useState(1)
  const total = good + neutral + bad;
  return (
    <div>
      <h2>Give feedback</h2>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good*1 + neutral*0 + bad*-1)/total}</p>
      <p>positive {good/total*100} %</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)