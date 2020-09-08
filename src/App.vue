<template>
  <v-app>
    <MainNavigation />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MainNavigation from "./components/MainNavigation.vue"

export default {
  components: {
    MainNavigation
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./assets/styles/main.scss";

.app-background {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
span.v-btn__content {
  font-family: "futura-pt", "Arial Narrow" !important;
  font-weight: 600;
  font-size: 0.9em;
}
</style>
