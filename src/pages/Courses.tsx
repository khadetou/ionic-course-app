import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import React from "react"

export const COURSE_DATA = [
    { id: "c1", name: "Ionic + React - the Practical Guide", description: "Description 1" },
    { id: "c2", name: "Reactjs - the complete guide", description: "Description 2" },
    { id: "c3", name: "Javascript - the complete guide", description: "Description 3" },
]

const Courses: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar >
                    <IonTitle>Courses</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {COURSE_DATA.map(course => (
                        <IonRow key={course.id}>
                            <IonCol size-md="4" offset-md="4">
                                <IonCard>
                                    <IonCardContent className="ion-text-center">
                                        <h2>{course.name}</h2>
                                        <IonButton routerLink={`/courses/${course.id}`}>View Course Goals</IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    ))}
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Courses
