<template>
  <ion-page>
    <PageDefaultHeader myTitle="Blueberry Home" />

    <ion-content :fullscreen="true">
      <ion-card
          :key="childObs.id"
          v-for="childObs in childObservations.value"
      >
        <ion-card-header>
          <ion-card-title>
            {{ `${childObs.child.firstName} ${childObs.child.name}` }}
          </ion-card-title>
          <ion-card-subtitle>
            {{ `${childObs.observation.category} ${childObs.observation.text}` }}
          </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          {{ `${childObs.comment}` }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import PageDefaultHeader from '@/components/PageDefaultHeader.vue';

import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage,} from '@ionic/vue';
import {ref} from "vue";
import {ChildObservation} from "@/model/model";
import {onMounted} from "@vue/runtime-core";
import {getChildObservations} from "@/api/backend";

let childObservations = ref<ChildObservation[]>([]);
onMounted(async () => {
  childObservations.value = await getChildObservations();
});
</script>
