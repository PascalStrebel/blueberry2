<template>
  <ion-page>
    <div>
      <PageDefaultHeader myTitle="My Page Title" />
      <ion-content class="ion-padding">
        <!-- <h1>Content</h1>
        <ion-card :key="child.name" v-for="child in children">
          <ion-card-header>
            <ion-card-title>
              {{ child.firstName }} {{ child.name }}
            </ion-card-title>
            <ion-card-subtitle>
              {{ child.birthdate }}
            </ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </ion-card-content>
        </ion-card> -->
      </ion-content>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import PageDefaultHeader from '../components/PageDefaultHeader.vue';
import { onMounted } from '@vue/runtime-core';
import { getChildren } from '@/api/backend';
import { Child } from '@/model/model';
import {
  loadingController,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonRow,
  IonGrid,
  IonItem,
  IonList,
  IonButton,
  IonInput,
} from '@ionic/vue';

let children: Child[];
onMounted(async () => {
  children = await getChildren();
});
</script>
