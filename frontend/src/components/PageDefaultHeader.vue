<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        {{ myTitle }}
      </ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">

const props = defineProps({
  myTitle: String
})
import {IonHeader, IonTitle, IonToolbar,} from '@ionic/vue';
</script>
