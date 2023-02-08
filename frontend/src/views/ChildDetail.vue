<template>
  <ion-page>
    <ion-content>
      <div>
        <PageDefaultHeader myTitle="Child Details" />
      </div>
      <div>
        <ion-card>
          <ion-card-header>
            <ion-card-title
              >{{ child.firstName }} {{ child.name }}</ion-card-title
            >
            <ion-card-subtitle
              >Birthday: {{ child.birthdate }}</ion-card-subtitle
            >
            <ion-card-subtitle
              >Nationality: {{ child.nationality }}
            </ion-card-subtitle>
            <ion-card-subtitle
              >Entry Date: {{ child.entryDate }}</ion-card-subtitle
            >
          </ion-card-header>
        </ion-card>
      </div>
      <div>
        <ion-accordion-group>
          <ion-accordion v-for="category in categories" :key="category">
            <ion-item slot="header" color="light">
              <ion-label>{{
                ` ${category} (${getChildObservationPercent(category)})`
              }}</ion-label>
            </ion-item>

            <ion-item
              v-for="observation in observations.filter(
                (obs) => obs.category === category
              )"
              class="ion-padding"
              slot="content"
              :key="observation.id"
            >
              <ion-label position="stacked">{{ observation.text }}</ion-label>
              <div>
                <ion-button
                  @click="completeObservation(child, observation)"
                  :disabled="observationCompleted(observation)"
                  >Complete</ion-button
                >
              </div>
            </ion-item>
          </ion-accordion>
        </ion-accordion-group>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import PageDefaultHeader from '../components/PageDefaultHeader.vue';
import { onMounted } from '@vue/runtime-core';
import {
  createChildObservation,
  getChildById,
  getChildObservationsById,
  getObservations,
} from '@/api/backend';
import { Child, ChildObservation, Observation } from '@/model/model';
import { defineComponent } from 'vue';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonPage,
  IonAccordionGroup,
  IonAccordion,
  IonList,
  IonItem,
  IonLabel,
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
let childObservations = ref<ChildObservation[]>([]);
onMounted(async () => {
  observations.value = await getObservations();
  let categoryStrings = observations.value.map(
    (observation) => observation.category
  );
  categoryStrings = categoryStrings.filter(
    (n, i) => categoryStrings.indexOf(n) === i
  );
  categories.value = categoryStrings;
  childObservations.value = await getChildObservationsById(+id);
});

async function completeObservation(child: Child, observation: Observation) {
  await createChildObservation(child, observation);
  window.location.reload();
}

function getChildObservationPercent(category: string): string {
  let relevantObservations = observations.value.filter(
    (obs) => obs.category === category
  ).length;
  let relevantChildObservations = childObservations.value.filter(
    (co) => co?.observation.category === category
  ).length;

  return (relevantChildObservations / relevantObservations) * 100 + '%';
}

function observationCompleted(observation: Observation): boolean {
  return (
    childObservations.value.filter(
      (co) =>
        co?.observation.id === observation.id && co.child.id == child.value.id
    ).length > 0
  );
}
</script>

<style scoped>
/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}
</style>
