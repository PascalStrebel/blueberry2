<template>
  <ion-page>
    <div>
      <PageDefaultHeader />
    </div>

    <ion-content class="ion-padding">
      <h1>Content</h1>
      <ion-card :key="child.id" v-for="child in children">
        <ion-card-header>
          <ion-card-title
            >{{ child.firstName }} {{ child.name }}</ion-card-title
          >
          <ion-card-subtitle>{{ child.birthDate }}</ion-card-subtitle>
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
import PageDefaultHeader from '@/components/PageDefaultHeader.vue';
import { useChildren } from '@/composables/useChildren';
import { loadingController } from '@ionic/vue';
const { children, getChildren } = useChildren();
</script>
