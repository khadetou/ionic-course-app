import React, { useState } from 'react'
import { IonAlert, IonBackButton, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { COURSE_DATA } from './Courses';
import { useParams } from 'react-router';
import { create, trash, addOutline } from 'ionicons/icons';
import { isPlatform } from '@ionic/core';

const CourseGoal: React.FC = () => {
    const [startDeleting, setStartDeleting] = useState(false);
    const seletedCourseId = useParams<{ courseId: string }>().courseId;
    const selectedCourse = COURSE_DATA.find(course => course.id === seletedCourseId);
    const startDeleteHanlder = () => {
        setStartDeleting(true);
    }
    const deleteGoalHanlder = () => {
        setStartDeleting(false);
        console.log("Deleting ...")
    }
    const startEditGlobalHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.log("Start edit global...");

    }
    const startAddGlobalHandler = () => {
        console.log("Start add global...");
    }
    return (
        <React.Fragment>
            <IonAlert
                isOpen={startDeleting}
                header="Are you sure?"
                message="Do you want to delete the goal? This cannot be undone!"
                buttons={[
                    {
                        text: "No",
                        role: "cancel",
                        handler: () => { setStartDeleting(false) },
                    },
                    {
                        text: "Yes",
                        handler: deleteGoalHanlder,
                    }

                ]} />
            <IonPage>
                <IonHeader>
                    <IonToolbar >
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/courses/list" />
                        </IonButtons>
                        <IonTitle>{selectedCourse ? selectedCourse!.name : "No course Found!"}</IonTitle>
                        {!isPlatform("android") && <IonButtons slot="end" onClick={startAddGlobalHandler}>
                            <IonIcon slot="icon-only" icon={addOutline} />
                        </IonButtons>}
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {selectedCourse && (
                        <IonList>
                            {selectedCourse.goals.map(goal => (
                                <IonItemSliding key={goal.id}>
                                    <IonItemOptions side="start">
                                        <IonItemOption onClick={startDeleteHanlder} color="danger">
                                            <IonIcon slot="icon-only" icon={trash} />
                                        </IonItemOption>
                                    </IonItemOptions>
                                    <IonItem lines="full"
                                    // button 
                                    // onClick={deleteItemHandler}
                                    >
                                        <IonLabel>{goal.text}</IonLabel>
                                        {/* <IonButton slot="end" onClick={startEditGlobalHandler}>
                                    <IonIcon slot="icon-only" icon={create} />
                                </IonButton> */}
                                    </IonItem>
                                    <IonItemOptions side="end">
                                        <IonItemOption onClick={startEditGlobalHandler}>
                                            <IonIcon slot="icon-only" icon={create} />
                                        </IonItemOption>
                                    </IonItemOptions>
                                </IonItemSliding>
                            ))}
                        </IonList>
                    )}
                    {isPlatform("android") &&
                        <IonFab horizontal='end' vertical='bottom' slot="fixed" >
                            <IonFabButton color="secondary" onClick={startAddGlobalHandler}>
                                <IonIcon icon={addOutline} />
                            </IonFabButton>
                        </IonFab>}
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}

export default CourseGoal
