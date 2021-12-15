import React, { useRef, useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react'

interface IProps {
    show: boolean;
    onCancel: () => void;
    onSave: (goalText: string) => void;
    editGoal: { id: string, text: string } | null;
}
const EditModals: React.FC<IProps> = ({ show, onCancel, editGoal, onSave }) => {
    const textRef = useRef<HTMLIonInputElement>(null);
    const [error, setError] = useState('');
    const saveHandler = () => {
        const enteredText = textRef.current!.value;


        if (!enteredText || enteredText.toString().trim().length === 0) {
            setError("*Please enter a valid text");
            return;
        }

        onSave(enteredText.toString());
    }

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
                                <IonInput ref={textRef} type="text" value={editGoal?.text} />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    {error &&
                        <IonRow>
                            <IonCol>
                                <IonText color="danger">
                                    <p>{error}</p>
                                </IonText>
                            </IonCol>
                        </IonRow>
                    }
                    <IonRow className="ion-text-center">
                        <IonCol>
                            <IonButton fill="clear" color="dark" onClick={onCancel}>Cancel</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton color="secondary" expand="block" onClick={saveHandler}>Save</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonModal>
    )
}

export default EditModals
