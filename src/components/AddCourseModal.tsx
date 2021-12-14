import React, { useRef, useState } from 'react'
import { IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';


interface AddCourseModalProps {
    show: boolean;
    onDismiss: () => void;
    onSave: (title: string, date: Date) => void;
}
const AddCourseModal: React.FC<AddCourseModalProps> = ({ show, onDismiss, onSave }) => {
    const [error, setError] = useState('');
    const customDateTime = useRef<HTMLIonDatetimeElement>(null);
    const titleRef = useRef<HTMLIonInputElement>(null);
    const saveHandler = () => {
        const enteredTitle = titleRef.current!.value;
        const enteredDate = customDateTime.current!.value;

        if (
            !enteredTitle ||
            !enteredDate ||
            enteredTitle.toString().trim().length === 0 ||
            enteredDate.toString().trim().length === 0
        ) {
            setError('Please enter a valid title and date');
            return;
        }
        setError("");
        onSave(enteredTitle.toString(), new Date(enteredDate));
    }

    const reset = () => {
        customDateTime.current!.value = '';
    }
    const confirm = () => {
        console.log("confirm!")
    }
    return (
        <IonModal isOpen={show}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Add Course</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Course Title</IonLabel>
                                <IonInput ref={titleRef} type="text" />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>Enrolment Date</IonLabel>
                                <IonDatetime ref={customDateTime} >
                                    <IonButtons>
                                        <IonButton onClick={() => confirm()}>
                                            Good To Go!
                                        </IonButton>
                                        <IonButton onClick={() => reset()}>Reset</IonButton>
                                    </IonButtons>
                                </IonDatetime>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    {error &&
                        <IonRow className="ion-text-center">
                            <IonCol>
                                <IonText color="danger">
                                    <p>{error}</p>
                                </IonText>
                            </IonCol>
                        </IonRow>
                    }
                    <IonRow className="ion-text-center">
                        <IonCol>
                            <IonButton color="dark" fill="clear" onClick={onDismiss}>Cancel</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" color="secondary" onClick={saveHandler}>Save</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    )
}

export default AddCourseModal;
