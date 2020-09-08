<template>
  <v-app>
    <MainNavigation />
    <v-main style="background: #f7f7f7">
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
header.v-sheet.theme--light.elevation-1.v-toolbar.v-app-bar.v-app-bar--fixed {
  box-shadow: 1px 1px 1px silver !important;
}
</style>
