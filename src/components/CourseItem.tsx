import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react';

interface CourseItemProps {
    name: string;
    enrollmentDate: Date;
    id: string;
}
const CourseItem: React.FC<CourseItemProps> = ({ name, enrollmentDate, id }) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>
                    <h2>{name}</h2>
                </IonCardTitle>
                <IonCardSubtitle>Enrolled on {enrollmentDate.toLocaleDateString("en-Us", { year: "numeric", month: "2-digit", day: "2-digit" })}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent >
                <div className="ion-text-right">
                    <IonButton fill="clear" color="secondary" routerLink={`/courses/${id}`}>View Course Goals</IonButton>
                </div>
            </IonCardContent>
        </IonCard>
    )
}

export default CourseItem;
