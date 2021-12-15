import React, { useContext } from 'react'
import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { COURSE_DATA } from './Courses';
import CourseContext from '../data/course-context';

const Filter: React.FC = () => {
    const { courses, changeCourseFilter } = useContext(CourseContext);

    const courseFilterChangeHandler = (event: CustomEvent) => {
        changeCourseFilter(event.detail.value, event.detail.checked);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Filter</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {courses.map((course) => (
                        <IonItem key={course.id}>

                            <IonLabel>{course.name}</IonLabel>
                            <IonToggle checked={course.included} value={course.id} onIonChange={courseFilterChangeHandler} />
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Filter;
