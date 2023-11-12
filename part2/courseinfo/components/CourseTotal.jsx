export const CourseTotal = (props) => {
  return (
    <p>
      <strong>
        Number of exercises{" "}
        {props.parts.reduce((sum, p) => sum + p.exercises, 0)}
      </strong>
    </p>
  );
};
