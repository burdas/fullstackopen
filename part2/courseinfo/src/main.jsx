import React from "react";
import ReactDOM from "react-dom";

// Exercise 1.1
const Header = (props) => {
  return <h1>{props.name}</h1>;
};
const Content = (props) => {
  return (
    <>
      {props.parts.map((p) => (
        <Part key={p.id} part={p.name} exercises={p.exercises} />
      ))}
    </>
  );
};
// const Total = (props) => {
//   return (
//     <p>
//       Number of exercises {props.parts.reduce((sum, p) => sum + p.exercises, 0)}
//     </p>
//   );
// };

// Exercise 1.2
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      {/* <Total parts={course.parts} /> */}
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
