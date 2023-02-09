<template>
  <ion-page>
    <PageDefaultHeader myTitle="Blueberry Home" />

    <ion-content :fullscreen="true">
      <ion-card
          :style="{ '--background': getCardColorHomePage(childObs) }"
          :key="childObs.id"
          v-for="childObs in childObservations"
      >
        <ion-card-header>
          <ion-card-title>
            {{ `${childObs.child.firstName} ${childObs.child.name}` }}
          </ion-card-title>
          <ion-card-subtitle>
            {{ `${childObs.observation.category} -> ${childObs.observation.text}` }}
          </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          {{ `Achived at: ${childObs.createdAt}` }}
        </ion-card-content>

        <ion-card-content v-if="childObs.comment">
          {{ `Comment: ${childObs.comment}` }}
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
import {getCardColor, getCardColorHomePage} from "@/style/cardColor";

let childObservations = ref<ChildObservation[]>([]);
onMounted(async () => {
  childObservations.value = await getChildObservations();
});
</script>

<style scoped>
/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}

ion-card {
  width: 30%;
  display: inline-block;
}

@media (max-width: 768px) {
  ion-card {
    width: 100%;
    display: block;
  }
}
</style>
