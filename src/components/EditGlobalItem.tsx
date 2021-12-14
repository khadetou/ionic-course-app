import { IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { trash, create } from 'ionicons/icons';
import React from 'react'

interface EditGlobalItemProps {
    slidingRef: React.Ref<HTMLIonItemSlidingElement>;
    onDelete: () => void;
    onEdit: (event: React.MouseEvent) => void;
    text: string;
}

const EditGlobalItem: React.FC<EditGlobalItemProps> = ({ slidingRef, onDelete, onEdit, text }) => {
    return (
        <IonItemSliding ref={slidingRef}>
            <IonItemOptions side="start">
                <IonItemOption onClick={onDelete} color="danger">
                    <IonIcon slot="icon-only" icon={trash} />
                </IonItemOption>
            </IonItemOptions>
            <IonItem lines="full"
            // button 
            // onClick={deleteItemHandler}
            >
                <IonLabel>{text}</IonLabel>
                {/* <IonButton slot="end" onClick={startEditGlobalHandler}>
        <IonIcon slot="icon-only" icon={create} />
    </IonButton> */}
            </IonItem>
            <IonItemOptions side="end">
                <IonItemOption onClick={onEdit}>
                    <IonIcon slot="icon-only" icon={create} />
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    )
}

export default EditGlobalItem;
