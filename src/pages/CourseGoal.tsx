import React from 'react'
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { COURSE_DATA } from './Courses';
import { useParams } from 'react-router';
import { create } from 'ionicons/icons';

const CourseGoal: React.FC = () => {
    const seletedCourseId = useParams<{ courseId: string }>().courseId;
    const selectedCourse = COURSE_DATA.find(course => course.id === seletedCourseId);
    const deleteItemHandler = () => {
        console.log("Delete item...");
    }
    const startEditGlobalHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.log("Start edit global...");

    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar >
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>{selectedCourse ? selectedCourse!.name : "No course Found!"}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {selectedCourse && (
                    <IonList>
                        {selectedCourse.goals.map(goal => (
                            <IonItem key={goal.id} lines="full" button onClick={deleteItemHandler}>
                                <IonLabel>{goal.text}</IonLabel>
                                <IonButton slot="end" onClick={startEditGlobalHandler}>
                                    <IonIcon slot="icon-only" icon={create} />
                                </IonButton>
                            </IonItem>
                        ))}
                    </IonList>
                )}
            </IonContent>
        </IonPage>
    )
}

export default CourseGoal
