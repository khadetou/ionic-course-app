import React, { useContext } from 'react'
import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { COURSE_DATA } from './Courses';
import CourseContext from '../data/course-context';


const AllGoals: React.FC = () => {
    const { courses } = useContext(CourseContext);
    const goals = courses.map((course) => {
        return course.goals.map((goal) => {
            return { ...goal, courseName: course.name }
        });
    }).reduce((goalArr, nestedGoals) => {
        let updatedGoalArray = goalArr;
        for (const goal of nestedGoals) {
            updatedGoalArray = updatedGoalArray.concat(goal);
        }
        return updatedGoalArray;
    }, []);


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        All Goals
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {goals.map((goal) => (
                        <IonItem key={goal.id} >
                            <IonLabel>
                                <h2>{goal.text}</h2>
                                <p>{goal.courseName}</p>
                            </IonLabel>
                        </IonItem>
                    ))
                    }
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default AllGoals;
