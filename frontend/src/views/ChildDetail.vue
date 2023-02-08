<template>
  <ion-page>
    <div>
      <PageDefaultHeader myTitle="My Page Title" />
    </div>
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ child.firstName }} {{ child.name }}</ion-card-title>
        <ion-card-subtitle>Birthday: {{ child.birthdate }}</ion-card-subtitle>
        <ion-card-subtitle
          >Nationality: {{ child.nationality }}</ion-card-subtitle
        >
        <ion-card-subtitle>Entry Date: {{ child.entryDate }}</ion-card-subtitle>
      </ion-card-header>
    </ion-card>
    <ion-card v-for="category in categories" :key="category">
      {{ category }}
    </ion-card>
  </ion-page>
</template>

<script setup lang="ts">
import PageDefaultHeader from '../components/PageDefaultHeader.vue';
import { onMounted } from '@vue/runtime-core';
import { getChildById, getObservations } from '@/api/backend';
import { Child, Observation } from '@/model/model';
import { defineComponent } from 'vue';
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
import { useRoute } from 'vue-router';

let child = ref<Child>({} as Child);
onMounted(async () => {
  child.value = await getChildById(+id);
});

const route = useRoute();

const id = route.params.id;

let observations = ref<Observation[]>([]);
let categories = ref<string[]>([]);
onMounted(async () => {
  observations.value = await getObservations();
  let categoryStrings = observations.value.map(
    (observation) => observation.category
  );
  categoryStrings = categoryStrings.filter(
    (n, i) => categoryStrings.indexOf(n) === i
  );
  categories.value = categoryStrings;
});
</script>

<style scoped>
/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}
</style>
