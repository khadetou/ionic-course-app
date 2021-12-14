import React from "react";
interface Goal {
  id: string;
  text: string;
}
export interface Course {
  id: string;
  name: string;
  enrolled: Date;
  goals: Goal[];
}

interface CourseContext {
  courses: Course[];
  addCourse: (courseTitle: string, courseDate: Date) => void;
  addGoal: () => void;
  deleteGoal: () => void;
  updateGoal: () => void;
}

const CourseContext = React.createContext<CourseContext>({
  courses: [],
  addCourse: () => {},
  addGoal: () => {},
  deleteGoal: () => {},
  updateGoal: () => {},
});

export default CourseContext;
