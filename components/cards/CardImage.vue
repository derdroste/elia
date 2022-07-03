<template>
  <ion-card class="gradient-border" style="width: 500px">
    <img src="https://www.staufenbiel.de/uploads/tx_templavoilaplus/Lernen_bearbeitet.jpg" />
    <ion-card-header>
      <ion-card-subtitle>Destination</ion-card-subtitle>
      <ion-card-title>Madison, WI</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the
      Wisconsin Territory in 1836.
      <ion-button class="gradient-border">fleter</ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonContent} from '@ionic/vue'
export default {
  name: "CardImage",
  components: {IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCard, IonContent},
}
</script>

<style scoped>

</style>
