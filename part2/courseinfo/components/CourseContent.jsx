import { CourseContentPart } from "./CourseContentPart";

export const CourseContent = (props) => {
    return (
      <>
        {props.parts.map((p) => (
          <CourseContentPart key={p.id} part={p.name} exercises={p.exercises} />
        ))}
      </>
    );
  };
  