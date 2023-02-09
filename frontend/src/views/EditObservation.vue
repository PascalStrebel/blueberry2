<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Blueberry Settings / Edit Observation</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item-group v-for="category of allCategories" :key="category">
        <ion-item-divider>
          <ion-label>{{ category }}</ion-label>
        </ion-item-divider>

        <ion-item
          v-for="observation of existingObservations?.filter(
            (obs) => obs.category === category
          )"
          :key="observation"
        >
          <ion-label>{{ observation.text }} </ion-label>
          <div id="editbuttons">
            <ion-label>
              <ion-tab-button
                tab="edit"
                @click="editSpecificObservation(observation)"
              >
                <ion-icon :icon="pencil" />
              </ion-tab-button>
            </ion-label>
            <ion-label>
              <ion-tab-button
                @click="
                  deleteSpecificObservation(
                    observation.id,
                    observation.category,
                    observation.text
                  )
                "
              >
                <ion-icon :icon="trash" />
              </ion-tab-button>
            </ion-label>
          </div>
        </ion-item>
      </ion-item-group>

      <!-- <ion-list>
        <ion-item
          slot="content"
          v-for="observation of existingObservations"
          :key="observation.id"
        >
          <ion-label>{{ observation.category }}</ion-label>
          <ion-label>{{ observation.text }}</ion-label>
          <div id="editbuttons">
            <ion-label>
              <ion-tab-button
                tab="edit"
                @click="editSpecificObservation(observation)"
              >
                <ion-icon :icon="pencil" />
              </ion-tab-button>
            </ion-label>
            <ion-label>
              <ion-tab-button
                @click="
                  deleteSpecificObservation(
                    observation.id,
                    observation.category,
                    observation.text
                  )
                "
              >
                <ion-icon :icon="trash" />
              </ion-tab-button>
            </ion-label>
          </div>
        </ion-item>
      </ion-list> -->

      <ion-button class="modalbutton" id="open-modal" expand="block">
        Add a new observation
      </ion-button>
      <ion-modal ref="modal" trigger="open-modal">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="cancel()">Cancel</ion-button>
            </ion-buttons>
            <ion-title>Observation properties</ion-title>
            <ion-buttons slot="end">
              <ion-button :strong="true" @click="createANewOberservation()">
                Confirm
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-item>


          <ion-label position="stacked">Category</ion-label>
          <ion-input v-model="observations.category" required="true" />
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Text</ion-label>
          <ion-input v-model="observations.text" required />
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Expected at how many months</ion-label>
          <ion-input
            type="number"
            v-model="observations.expectedAtMonths"
            required
          />
        </ion-item>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import {
  IonItemGroup,
  IonItemDivider,
  IonButtons,
  IonModal,
  IonIcon,
  IonButton,
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
import { pencil, trash } from "ionicons/icons";

import { Observation } from "../model/model";
import { createObservation, getObservations } from "../api/backend";
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
import { deleteObservation } from "../api/backend";
import { IonSelectOption, alertController } from "@ionic/vue";
import { OverlayEventDetail } from "@ionic/core/components";
import { defineComponent } from "vue";
import { getObservationsCategories } from "../api/reusableFunctions";

let observations = {} as Observation;

let allCategories = ref<string[]>([]);

let existingObservations = ref<Observation[]>([]);

const handlerMessage = ref("");

onMounted(async () => {
  existingObservations.value = await getObservations();
  allCategories.value = getObservationsCategories(existingObservations.value);
});

function createANewOberservation() {
  createObservation(observations);
  //document.location.reload();
}

const deleteSpecificObservation = async (
  id: number,
  category: string,
  text: string
) => {
  const alert = await alertController.create({
    header: "You sure you wanna delete " + category + " " + text + " ?",
    buttons: [
      {
        text: "Cancel",
        role: "cancel",
        handler: () => {},
      },
      {
        text: "Delete",
        role: "confirm",
        handler: () => {
          handlerMessage.value = "Alert confirmed";
          deleteObservation(id);
          document.location.reload();
        },
      },
    ],
  });

  await alert.present();
};

function editSpecificObservation(observation: Observation) {
  observations = observation;
  //alert("Value 1: " + children.name + "\nValue 2: " + children.firstName);

  let element: HTMLElement = document.getElementsByClassName(
    "modalbutton"
  )[0] as HTMLElement;
  element.click();
}

function cancel() {
  document.location.reload();
}
</script>


<style scoped>
ion-modal {
  --width: fit-content;
  --min-width: 250px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}

#editbuttons ion-label {
  padding: 8px;
  display: inline-block;
}
</style>
