import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react';

interface IProps {
    show: boolean;
    onCancel: () => void;
    editGoal: { id: string, text: string } | null;
}
const EditModals: React.FC<IProps> = ({ show, onCancel, editGoal }) => {
    return (
        <IonModal isOpen={show}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{editGoal ? "Edit" : "Add"} Goal</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Your Goal</IonLabel>
                                <IonInput type="text" value={editGoal?.text} />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-text-center">
                        <IonCol>
                            <IonButton fill="clear" color="dark" onClick={onCancel}>Cancel</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton color="secondary" expand="block">Save</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonModal>
    )
}

export default EditModals
