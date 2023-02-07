<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Edit Children</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Children</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-label position="stacked">Add a new child</ion-label>
        <ion-item>
          <ion-label>Surname</ion-label>
          <ion-input></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Firstname</ion-label>
          <ion-input></ion-input>
        </ion-item>
      <ion-button @click="create">Create</ion-button>
            </ion-list>

      <ion-list>

        <ion-label position="stacked">Edit existing children</ion-label>

  <ion-item>
    <ion-label ></ion-label>
  </ion-item>


      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
</script>