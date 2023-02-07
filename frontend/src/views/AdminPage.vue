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
          <ion-col> <ion-button>Edit Children</ion-button></ion-col>
          <ion-col><ion-button>Edit Obseravation</ion-button> </ion-col>
        </ion-row>
      </ion-grid>



    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";


</script>


<style>
  ion-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>


