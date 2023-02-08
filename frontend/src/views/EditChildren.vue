<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Children</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Children</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-accordion-group>
        <ion-accordion value="first">
          <ion-item slot="header" color="light">
            <ion-label>Add a new Child</ion-label>
          </ion-item>

          <ion-item class="ion-padding" slot="content">
            <ion-label position="stacked">Surname</ion-label>
            <ion-input v-model="children.name"></ion-input>
          </ion-item>

          <ion-item class="ion-padding" slot="content">
            <ion-label position="stacked">Firstname</ion-label>
            <ion-input v-model="children.firstName"></ion-input>
          </ion-item>

          <ion-item class="ion-padding" slot="content">
            <ion-label position="stacked">Birthdate</ion-label>
            <ion-input type="date" v-model="children.birthdate"></ion-input>
          </ion-item>

         <ion-item class="ion-padding" slot="content">
    <ion-select placeholder="Select Gender" v-model="children.gender">
      <ion-select-option value="M">Male</ion-select-option>
      <ion-select-option value="W">Female</ion-select-option>
      <ion-select-option value="D">Divers</ion-select-option>
    </ion-select>
        </ion-item>


          <ion-item class="ion-padding" slot="content">
            <ion-label position="stacked">Nationality</ion-label>


          <ion-input v-model="children.nationality"></ion-input>
        </ion-item>

          <ion-item class="ion-padding" slot="content">
            <ion-label position="stacked">Entry Date</ion-label>
            <ion-input type="date" v-model="children.entryDate"></ion-input>
          </ion-item>

          <ion-button @click="create" slot="content">Create</ion-button>

        </ion-accordion>
      </ion-accordion-group>


      <ion-accordion-group>
        <ion-accordion value="first">
          <ion-item slot="header" color="light">
            <ion-label>Edit existing Child</ion-label>
          </ion-item>

        <ion-item class="ion-padding" slot="content">
          <ion-label>child 1</ion-label>
        </ion-item>
        <ion-item class="ion-padding" slot="content">
          <ion-label>child 2</ion-label>
        </ion-item>
              </ion-accordion>
      </ion-accordion-group>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonSelect,
  IonAccordionGroup,
  IonAccordion,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import { Child } from "../model/model";
import { createChild } from "../api/backend";
import { IonSelectOption } from "@ionic/vue";

const children = {} as Child;

function create() {
  createChild(children);
}
</script>