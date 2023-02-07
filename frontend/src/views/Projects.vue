<template>
  <ion-page>
    <div>
      <PageDefaultHeader />
    </div>

    <ion-content class="ion-padding">
      <h1>Content</h1>
      <ion-card>
        <ion-card-header>
          <ion-card-title>{{}}</ion-card-title>
          <ion-card-subtitle>{{}}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Here's a small text description for the card content. Nothing more,
          nothing less.
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue';
</script>
