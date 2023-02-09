<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Blueberry Children</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar
          @input="searchStringChange($event)"
          placeholder="Search Blueberry.."
        ></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Content</h1>
      <ion-card
        button
        :style="{ '--background': getCardColor(child) }"
        :router-link="'/tabs/children/' + child.id"
        :key="child.id"
        v-for="child in children"
      >
        <ion-card-header>
          <ion-card-title>
            {{ child.firstName }} {{ child.name }}
          </ion-card-title>
          <ion-card-subtitle>
            Geboren am: {{ moment(child.birthdate).format('DD.MM.YYYY') }}
          </ion-card-subtitle>
        </ion-card-header>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core';
import { getChildren } from '@/api/backend';
import { getCardColor } from '@/style/cardColor';
import { Child } from '@/model/model';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { ref } from 'vue';
import moment from 'moment';

let children = ref<Child[]>([]);
let allChildren: Child[];
onMounted(async () => {
  allChildren = await getChildren();
  children.value = allChildren;
});

function searchStringChange(event: any): void {
  if (event.target.value.length === 0) {
    children.value = allChildren;
  } else {
    children.value = allChildren.filter((child) =>
      JSON.stringify(child)
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
  }
}
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

ion-card:hover {
  opacity: 80%;
}

@media (max-width: 768px) {
  ion-card {
    width: 100%;
    display: block;
  }
}
</style>
