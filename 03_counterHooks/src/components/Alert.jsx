import React from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function Alert({msg}) {
  return (
    <>
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Wait !!"
        // subHeader="A Sub Header Is Optional"
        message={msg}
        buttons={['Exit']}
      ></IonAlert>
    </>
  );
}
export default Alert;