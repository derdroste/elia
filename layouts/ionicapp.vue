<template>
  <IonApp >
    <ion-header class="border-gradient" collapse="fade">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="toggleDarkMode" class="toggle-dark-mode">
            <ion-icon v-if="darkMode" :src="moon"></ion-icon>
            <ion-icon v-else :src="sunny"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title class="text-gradient ion-text-center">Elia</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button class="menu-button" auto-hide="false"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <!-- page content will appear here -->
      <slot />
    </ion-content>
    <div class="spotlight-wrapper"><div class="fixed z-10 left-0 right-0 spotlight"></div></div>
  </IonApp>
</template>

<script>
import {IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonMenuButton} from "@ionic/vue"
import {moon, sunny} from 'ionicons/icons'

export default {
  data() {
    return {
      darkMode: true,
      moon,
      sunny,
      lightTheme: [
        {
          property: '--background-color',
          value: '#FFF'
        }
      ],
      darkTheme: [
        {
          property: '--background-color',
          value: '#000'
        }
      ]
    }
  },
  components: {IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon, IonMenuButton},
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      if (this.darkMode) {
        this.darkTheme.forEach(e => document.documentElement.style.setProperty(e.property, e.value))
      } else {
        this.lightTheme.forEach(e => document.documentElement.style.setProperty(e.property, e.value))
      }
    }
  }
}
</script>

<style scoped>
.toggle-dark-mode {
  color: #36E4DA;
}

.menu-button {
  color: #0047E1;
}
</style>
