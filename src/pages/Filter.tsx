import React from 'react'
import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { COURSE_DATA } from './Courses';


const Filter: React.FC = () => {
    const courseFilterChangeHandler = (event: CustomEvent) => {
        console.log(event);
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
                    {COURSE_DATA.map((course) => (
                        <IonItem key={course.id}>
                            <IonLabel>{course.name}</IonLabel>
                            <IonToggle value={course.id} onIonChange={courseFilterChangeHandler} />
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Filter;
