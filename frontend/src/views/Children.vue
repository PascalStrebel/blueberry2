<template>
  <ion-page>
    <div>
      <PageDefaultHeader myTitle="Blueberry" />
    </div>
    <ion-content class="ion-padding">
      <h1>Content</h1>
      <div>
        <ion-card
          :router-link="'/tabs/children/' + child.id"
          :key="child.id"
          v-for="child in children"
        >
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
      </div>
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

<style scoped>
/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}
</style>
