import React, { useContext } from 'react'
import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CourseContext from '../data/course-context';


const AllGoals: React.FC = () => {
    const { courses } = useContext(CourseContext);
    const goals = courses.filter(course => { return course.included }).map((course) => {
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
                {goals.length === 0 && <h2 className="ion-text-center">No goals found!</h2>}
                {goals.length > 0 &&
                    (<IonList>
                        {goals.map((goal) => (
                            <IonItem key={goal.id} >
                                <IonLabel>
                                    <h2>{goal.text}</h2>
                                    <p>{goal.courseName}</p>
                                </IonLabel>
                            </IonItem>
                        ))
                        }
                    </IonList>)}
            </IonContent>
        </IonPage>
    )
}

export default AllGoals;
