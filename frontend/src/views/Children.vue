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
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
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
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { ref } from 'vue';

let children = ref<Child[]>([]);
let allChildren: Child[];
onMounted(async () => {
  allChildren = await getChildren();
  children.value = allChildren;
});

function searchStringChange(event: any): void {
  console.log(event.target.value);
  let searchTerm = event.target.value.toLowerCase();
  let filteredChildren = allChildren.filter((child) =>
    JSON.stringify(child).toLowerCase().includes(searchTerm)
  );
  children.value = searchTerm.length === 0 ? allChildren : filteredChildren;
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

@media (max-width: 768px) {
  ion-card {
    width: 100%;
    display: block;
  }
}
</style>
