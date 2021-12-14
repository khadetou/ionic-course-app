import React from 'react'
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { COURSE_DATA } from './Courses';
import { useParams } from 'react-router';
import { create, trash } from 'ionicons/icons';

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
                            <IonItemSliding key={goal.id}>
                                <IonItemOptions side="start">
                                    <IonItemOption onClick={deleteItemHandler} color="danger">
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
            </IonContent>
        </IonPage>
    )
}

export default CourseGoal
