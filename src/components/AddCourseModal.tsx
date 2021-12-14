import React, { useRef } from 'react'
import { IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonRow, IonTitle, IonToolbar } from '@ionic/react';


interface AddCourseModalProps {
    show: boolean;
    onDismiss: () => void;
}
const AddCourseModal: React.FC<AddCourseModalProps> = ({ show, onDismiss }) => {
    const customDateTime = useRef<HTMLIonDatetimeElement>(null);
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
                                <IonInput type="text" />
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
                    <IonRow className="ion-text-center">
                        <IonCol>
                            <IonButton color="dark" fill="clear" onClick={onDismiss}>Cancel</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" color="secondary">Save</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    )
}

export default AddCourseModal;
