<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Admin Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Admin Page</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid :fixed="true">
        <ion-row>
          <ion-col> 
            <ion-button expand="block" router-link="editchildren">Edit Children</ion-button></ion-col>
          <ion-col>
            <ion-button expand="block" router-link="create/observation">Edit Obseravation</ion-button> </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import { defineComponent } from "vue";
</script>


<style scoped>
ion-col {
  color: #fff;
  text-align: center;
}
</style>
