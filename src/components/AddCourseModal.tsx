import React from 'react'
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonRow, IonTitle, IonToolbar } from '@ionic/react';


interface AddCourseModalProps {
    show: boolean;
    onDismiss: () => void;
}
const AddCourseModal: React.FC<AddCourseModalProps> = ({ show, onDismiss }) => {
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
                    <IonRow className="ion-text-center">
                        <IonCol>
                            <IonButton color="dark" fill="clear" onClick={onDismiss}>Cancel</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton color="secondary">Save</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    )
}

export default AddCourseModal;
