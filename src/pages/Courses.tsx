import React, { useState } from "react"
import { IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar, isPlatform } from "@ionic/react"
import { addOutline } from "ionicons/icons"
import AddCourseModal from "../components/AddCourseModal"
import CourseItem from "../components/CourseItem"

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
    const [isAdding, setIsAdding] = useState(false);
    const startAddCourseHandler = () => {
        setIsAdding(true);
    }
    const cancelAddCourseHandler = () => {
        setIsAdding(false);
    }
    return (
        <React.Fragment>
            <AddCourseModal show={isAdding} onDismiss={cancelAddCourseHandler} />
            <IonPage>
                <IonHeader>
                    <IonToolbar >
                        <IonTitle>Courses</IonTitle>
                        {!isPlatform("android") &&
                            <IonButtons slot="end" onClick={startAddCourseHandler}>
                                <IonIcon slot="icon-only" icon={addOutline} />
                            </IonButtons>
                        }
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        {COURSE_DATA.map(course => (
                            <IonRow key={course.id}>
                                <IonCol size-md="4" offset-md="4">
                                    <CourseItem
                                        name={course.name}
                                        enrollmentDate={course.enrolled}
                                        id={course.id}
                                    />
                                </IonCol>
                            </IonRow>
                        ))}
                    </IonGrid>
                    {isPlatform("android") &&
                        <IonFab horizontal='end' vertical='bottom' slot="fixed" >
                            <IonFabButton color="secondary" onClick={startAddCourseHandler}>
                                <IonIcon icon={addOutline} />
                            </IonFabButton>
                        </IonFab>
                    }
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}

export default Courses
