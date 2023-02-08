<template>
  <ion-page>
    <div>
      <PageDefaultHeader myTitle="My Page Title" />
    </div>
    <ion-content class="ion-padding">
      <h1>Content</h1>
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
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import PageDefaultHeader from '../components/PageDefaultHeader.vue';
import { onMounted } from '@vue/runtime-core';
import { getChildren } from '@/api/backend';
import { Child } from '@/model/model';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonPage,
} from '@ionic/vue';
import { ref } from 'vue';

let children = ref<Child[]>([]);
onMounted(async () => {
  children.value = await getChildren();
});
</script>
