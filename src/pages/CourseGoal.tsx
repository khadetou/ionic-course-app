import React from 'react'
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { COURSE_DATA } from './Courses';
import { useParams } from 'react-router';

const CourseGoal: React.FC = () => {
    const seletedCourseId = useParams<{ courseId: string }>().courseId;
    const selectedCourse = COURSE_DATA.find(course => course.id === seletedCourseId);
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
                <h2>This works - course goal page!</h2>
            </IonContent>
        </IonPage>
    )
}

export default CourseGoal
