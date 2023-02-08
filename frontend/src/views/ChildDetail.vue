<template>
  <ion-page>
    <div>
      <PageDefaultHeader myTitle="My Page Title" />
    </div>
    <ion-content class="ion-padding">
      <h1>{{ child.name }}</h1>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import PageDefaultHeader from '../components/PageDefaultHeader.vue';
import { onMounted } from '@vue/runtime-core';
import { getChildById, getChildren } from '@/api/backend';
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
import { useRoute } from 'vue-router';

let child = ref<Child>({} as Child);
onMounted(async () => {
  child.value = await getChildById(+id);
});

const route = useRoute();

const id = route.params.id;
</script>
