import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import React from "react"

export const COURSE_DATA = [
    {
        id: "c1", name: "Ionic + React - the Practical Guide", description: "Description 1", enrolled: new Date("03/22/2019"),
        goals: [
            { id: "c1g1", text: "Finish the course!" },
            { id: "c1g2", text: "Learn a lot!" },
        ]
    },
    {
        id: "c2", name: "Reactjs - the complete guide", description: "Description 2", enrolled: new Date("05/15/2018"),
        goals: [
            { id: "c2g1", text: "Finish the course!" },
            { id: "c2g2", text: "Learn a lot!" },
        ]
    },
    {
        id: "c3", name: "Javascript - the complete guide", description: "Description 3", enrolled: new Date("01/22/2020"),
        goals: [
            { id: "c3g1", text: "Finish the course!" },
            { id: "c3g2", text: "Learn a lot!" },
        ]
    },
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
                                    <IonCardHeader>
                                        <IonCardTitle>
                                            <h2>{course.name}</h2>
                                        </IonCardTitle>
                                        <IonCardSubtitle>Enrolled on {course.enrolled.toLocaleDateString("en-Us", { year: "numeric", month: "2-digit", day: "2-digit" })}</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent >
                                        <div className="ion-text-right">
                                            <IonButton fill="clear" color="secondary" routerLink={`/courses/${course.id}`}>View Course Goals</IonButton>
                                        </div>
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
