import React, { useState, useRef } from 'react'
import { IonAlert, IonBackButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react'
import { COURSE_DATA } from './Courses';
import { useParams } from 'react-router';
import { create, trash, addOutline } from 'ionicons/icons';
import { isPlatform } from '@ionic/core';
import EditModals from '../components/EditModals';


const CourseGoal: React.FC = () => {
    const [startDeleting, setStartDeleting] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState<null | any>(null);
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
    const seletedCourseId = useParams<{ courseId: string }>().courseId;
    const selectedCourse = COURSE_DATA.find(course => course.id === seletedCourseId);
    const startDeleteHanlder = () => {
        setStartDeleting(true);
    }
    const deleteGoalHanlder = () => {
        setStartDeleting(false);
        console.log("Deleting ...");
        setToastMessage('Goal Deleted!');
    }
    const startEditGlobalHandler = (goalId: string, event: React.MouseEvent) => {
        event.stopPropagation();
        const goal = selectedCourse?.goals.find(goal => goal.id === goalId);
        slidingOptionsRef.current?.closeOpened();
        if (!goal) return;
        setIsEditing(true);
        setSelectedGoal(goal);

    }
    const startAddGlobalHandler = () => {
        setIsEditing(true);
        setSelectedGoal(null);
    }
    const cancelEditGoalHandler = () => {
        setIsEditing(false);
        setSelectedGoal(null);
    }
    const saveEditGoalHandler = () => {

    }
    return (
        <React.Fragment>
            <EditModals show={isEditing} onCancel={cancelEditGoalHandler} editGoal={selectedGoal} />
            <IonToast isOpen={!!toastMessage} message={toastMessage} duration={2000} onDidDismiss={() => { setToastMessage("") }} />
            <IonAlert
                isOpen={startDeleting}
                header="Are you sure ?"
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
                                <IonItemSliding key={goal.id} ref={slidingOptionsRef}>
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
                                        <IonItemOption onClick={startEditGlobalHandler.bind(null, goal.id)}>
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
                        </IonFab>
                    }
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}

export default CourseGoal
