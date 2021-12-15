import React, { useState, useRef, useContext } from 'react'
import { IonAlert, IonBackButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonList, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react'
import { COURSE_DATA } from './Courses';
import { useParams } from 'react-router';
import { addOutline } from 'ionicons/icons';
import { isPlatform } from '@ionic/core';
import EditModals from '../components/EditModals';
import EditGlobalItem from '../components/EditGlobalItem';
import CourseContext from '../data/course-context';

const CourseGoal: React.FC = () => {
    const [startDeleting, setStartDeleting] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const { courses, addGoal, deleteGoal, updateGoal } = useContext(CourseContext);

    const [selectedGoal, setSelectedGoal] = useState<null | any>(null);

    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
    const selectedGoalIdRef = useRef<string | null>(null);
    const seletedCourseId = useParams<{ courseId: string }>().courseId;

    const selectedCourse = courses.find(course => course.id === seletedCourseId);

    const startDeleteHanlder = (goalId: string) => {
        setToastMessage('');
        setStartDeleting(true);
        selectedGoalIdRef.current = goalId;
    }
    const deleteGoalHanlder = () => {
        setStartDeleting(false);
        deleteGoal(seletedCourseId, selectedGoalIdRef.current!);
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
    const addGoalHandler = (text: string) => {
        if (selectedGoal) {
            updateGoal(seletedCourseId, selectedGoal.id, text);
        } else {
            addGoal(seletedCourseId, text);
        }

        setIsEditing(false);
    }

    return (
        <React.Fragment>
            <EditModals
                show={isEditing}
                onCancel={cancelEditGoalHandler}
                onSave={addGoalHandler}
                editGoal={selectedGoal}
            />
            <IonToast
                isOpen={!!toastMessage}
                message={toastMessage}
                duration={2000}
            />
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
                                <EditGlobalItem
                                    key={goal.id}
                                    onDelete={startDeleteHanlder.bind(null, goal.id)}
                                    onEdit={startEditGlobalHandler.bind(null, goal.id)}
                                    text={goal.text}
                                    slidingRef={slidingOptionsRef}
                                />
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
