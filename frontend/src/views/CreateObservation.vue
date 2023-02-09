<template>
  <ion-page>
    <PageDefaultHeader myTitle="Create Observation"/>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Create Observation</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item>
        <ion-label position="stacked">Expected at Months</ion-label>
        <ion-input v-model="observation.expectedAtMonths"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Category</ion-label>
        <ion-input v-model="observation.category"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Text</ion-label>
        <ion-input v-model="observation.text"></ion-input>
      </ion-item>

      <ion-button @click="create">Create</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonInput, IonItem } from '@ionic/vue';
import {Observation} from "../model/model";
import {createObservation} from "../api/backend";
import PageDefaultHeader from "@/components/PageDefaultHeader.vue";

const observation = {} as Observation;

function create() {
  createObservation(observation);
}
</script>