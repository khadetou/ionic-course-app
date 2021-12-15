import React, { useState } from 'react'
import CourseContext, { Course, Goal } from './course-context';


const CourseContextProvider: React.FC = ({ children }) => {
    const [courses, setCourses] = useState<Course[]>([
        {
            id: "c1", name: "React - The Complete Guide", enrolled: new Date(), goals: []
        }
    ]);

    const addCourse = (title: string, date: Date) => {
        const newCourse: Course = {
            id: Math.random().toString(),
            name: title,
            enrolled: date,
            goals: [],
        }
        setCourses(curCourses => {
            return curCourses.concat(newCourse);
        });
    }
    const addGoal = (courseId: string, text: string) => {
        const newGoal: Goal = { id: Math.random().toString(), text: text };
        setCourses(courses => {
            const updatedCourseIndex = courses.findIndex(course => course.id === courseId);
            const updatedCourses = [...courses];
            const updatedGoals = updatedCourses[updatedCourseIndex].goals.concat(newGoal);
            const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
            updatedCourse.goals = updatedGoals;
            updatedCourses[updatedCourseIndex] = updatedCourse;
            return updatedCourses;
        });
    }
    const updateGoal = (courseId: string, goalId: string, newText: string) => { }
    const deleteGoal = (courseId: string, goalId: string) => { }

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
