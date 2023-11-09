import React from "react";
import ReactDOM from "react-dom";

// Exercise 1.1
const Header = (props) => {
  return <h1>{props.name}</h1>;
};
const Content = (props) => {
  return (
    <>
      {props.parts.map(p => <Part part={p.name} exercises={p.exercises} />)}
    </>
  );
};
const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts.reduce((sum,p) => sum + p.exercises,0)}
    </p>
  );
};

// Exercise 1.2
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const App = () => {
  // const course = "Half Stack application development";
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  // Exercises 1.3, 1.4 and 1.5
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
