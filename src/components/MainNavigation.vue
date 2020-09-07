<template>
  <v-app-bar app color="#ffffff" elevation="1" style="width: 100%">
    <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
    <v-toolbar-title>
      <span class="font-weight-black">{{ title }}</span>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-xs-only">
      <v-btn
        v-for="item in protectedMenu"
        :key="item.title"
        text
        :to="{ name: item.path, exact: true }"
        class="overline font-weight-black"
      >
        {{ item.title }}
        <v-icon light right>{{ item.icon }}</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "HeaderNavigation",
  data () {
    return {
      isLoggedIn: false,
      protectedMenu: [
        {
          title: "Dashboard",
          path: "dashboard",
          icon: "mdi-view-dashboard-outline",
          authenticated: true,
        },
        {
          title: "manage products",
          path: "products",
          icon: "mdi-filter-variant",
          authenticated: true,
        },
        {
          icon: "mdi-sync",
          title: "History",
          path: "history",
          authenticated: true,
        },
        {
          title: "settings",
          path: "settings",
          icon: "mdi-account-cog",
          authenticated: true,
        },
        {
          title: "Logout",
          path: "logout",
          icon: "mdi-account-circle-outline",
          authenticated: false,
        },
      ],
      title: "BulkyLabs",
      menuItems: [
        {
          title: "Home",
          path: "home",
          icon: "mdi-view-dashboard-outline",
          authenticated: false,
        },

        {
          title: "Login / register",
          path: "login",
          icon: "mdi-account-circle-outline",
          authenticated: false,
        },
      ],
    }
  },
  computed: {},
  methods: {
    ...mapActions("auth", [
      "updateUserMetaData",
      "getUserJWTToken",
      "getCurrentUser",
      "attemptLogout",
      "updateUserAccount",
    ]),
    logout () {
      this.attemptLogout()
        .then((resp) => {
          alert("logged out")
          this.$router.push("home")
          console.log("logged out", resp)
        })
        .catch((error) => {
          alert("problem with logout")
          location.reload()
          console.error("problem with logout", error)
        })
    },
  },
};
</script>
<style>
.v-toolbar__content,
.v-toolbar__extension {
  padding-right: 0px !important;
}
</style>
