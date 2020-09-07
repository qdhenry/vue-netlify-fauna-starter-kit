<template>
  <v-app>
    <MainNavigation />
    <v-main>
      <NavBar />
      <v-container>
        <router-view />
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue"
import MainNavigation from "./components/MainNavigation.vue"

export default {
  components: {
    NavBar,
    Footer,
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
  font-weight: 500;
}
</style>
