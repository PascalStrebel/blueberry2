<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        {{ title }}
      </ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
