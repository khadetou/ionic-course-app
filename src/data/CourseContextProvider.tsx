import React, { useState } from 'react'
import CourseContext, { Course } from './course-context';


const CourseContextProvider: React.FC = ({ children }) => {
    const [courses, setCourses] = useState<Course[]>([]);

    const addCourse = (title: string, date: Date) => {
        const newCourse: Course = {
            id: new Date().toString(),
            name: title,
            enrolled: date,
            goals: [],
        }
        setCourses(curCourses => {
            return curCourses.concat(newCourse);
        });
    }
    const addGoal = () => { }
    const updateGoal = () => { }
    const deleteGoal = () => { }

    return (
        <CourseContext.Provider
            value={{
                courses,
                addCourse,
                addGoal,
                updateGoal,
                deleteGoal
            }}
        >
            {children}
        </CourseContext.Provider>
    )
}

export default CourseContextProvider;
