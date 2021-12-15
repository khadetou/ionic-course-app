import React, { useState } from 'react'
import CourseContext, { Course, Goal } from './course-context';


const CourseContextProvider: React.FC = ({ children }) => {
    const [courses, setCourses] = useState<Course[]>([
        {
            id: "c1", name: "React - The Complete Guide", enrolled: new Date(), goals: [], included: true,
        }
    ]);

    const addCourse = (title: string, date: Date) => {
        const newCourse: Course = {
            id: Math.random().toString(),
            name: title,
            enrolled: date,
            goals: [],
            included: true
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
    const updateGoal = (courseId: string, goalId: string, newText: string) => {
        setCourses((curCourses) => {
            const updatedCourses = [...curCourses];
            const updatedCourseIndex = updatedCourses.findIndex(course => course.id === courseId);
            const updatedCourseGoals = updatedCourses[updatedCourseIndex].goals.slice();
            const updatedCourseGoalIndex = updatedCourseGoals.findIndex(goal => goal.id === goalId);
            const updatedGoal = { ...updatedCourseGoals[updatedCourseGoalIndex], text: newText };
            updatedCourseGoals[updatedCourseGoalIndex] = updatedGoal;

            const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
            updatedCourse.goals = updatedCourseGoals;
            updatedCourses[updatedCourseIndex] = updatedCourse;
            return updatedCourses;
        });
    }

    const deleteGoal = (courseId: string, goalId: string) => {
        setCourses((curCourses) => {
            const updatedCourses = [...curCourses];
            const updatedCourseIndex = updatedCourses.findIndex(course => course.id === courseId);
            const updatedCourseGoals = updatedCourses[updatedCourseIndex].goals.filter(goal => goal.id !== goalId);
            const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
            updatedCourse.goals = updatedCourseGoals;
            updatedCourses[updatedCourseIndex] = updatedCourse;
            return updatedCourses;
        });
    }
    const changeCourseFilter = (courseId: string, isIncluded: boolean) => {
        setCourses(courses => {
            const updatedCourseIndex = courses.findIndex(course => course.id === courseId);
            const updatedCourses = [...courses];
            const updatedCourse = { ...updatedCourses[updatedCourseIndex], included: isIncluded };
            updatedCourses[updatedCourseIndex] = updatedCourse;
            return updatedCourses;
        });
    }
    return (
        <CourseContext.Provider
            value={{
                courses,
                addCourse,
                addGoal,
                updateGoal,
                deleteGoal,
                changeCourseFilter
            }}
        >
            {children}
        </CourseContext.Provider>
    )
}

export default CourseContextProvider;
