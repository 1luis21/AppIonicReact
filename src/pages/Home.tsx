import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  useIonAlert
} from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, { useState } from 'react';

const Home: React.FC = () => {

  const [present] = useIonAlert();
  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Quiz App</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb0%2F73%2Fe9%2Fb073e9150cc603e3a5b757be38fc771b.jpg&f=1&nofb=1" alt="" />
          <IonCardHeader>
            <IonCardTitle> Programación trivia</IonCardTitle>

            <IonItem>
              <IonInput value={text} placeholder="Hola! ¿Cuál es tu nombre?" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
            </IonItem>

            <IonCardContent>
              Muy bien... Ahora veamos, ¿Cuál es el lenguaje de Programación para applicaciones Android?
            </IonCardContent>


            <IonButton
              onClick={() => present('Intentalo de nuevo :(', [{ text: 'Ok' }])}
            >
              Swift
            </IonButton>

            <IonButton
              onClick={() => present('Has acertado!', [{ text: 'Ok' }])}
            >
              Kotlin
            </IonButton>

            <IonButton
              onClick={() => present('Intentalo de nuevo :(', [{ text: 'Ok' }])}
            >
              PHP
            </IonButton>

          </IonCardHeader>
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Home;
