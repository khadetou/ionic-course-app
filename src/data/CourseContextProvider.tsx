import React, { useState } from 'react'
import CourseContext, { Course } from './course-context';


const CourseContextProvider: React.FC = ({ children }) => {
    const [courses, setCourses] = useState<Course[]>([]);

    const addCourse = () => { }
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
