import { CourseHeader } from "./CourseHeader";
import { CourseTotal} from "./CourseTotal";
import { CourseContent } from "./CourseContent";
export const Course = ({ course }) => {
  return (
    <div>
      <CourseHeader name={course.name} />
      <CourseContent parts={course.parts} />
      <CourseTotal parts={course.parts} />
    </div>
  );
};