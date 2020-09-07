<template>
  <v-app-bar app color="#ffffff" elevation="1" style="width:100%">
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
        <v-icon light right>
          {{ item.icon }}
        </v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderNavigation",
  data() {
    return {
      isLoggedIn: false,
      protectedMenu: [
        {
          title: "Dashboard",
          path: "dashboard",
          icon: "mdi-view-dashboard-outline",
          authenticated: true
        },
        {
          title: "manage products",
          path: "products",
          icon: "mdi-filter-variant",
          authenticated: true
        },
        {
          icon: "mdi-sync",
          title: "History",
          path: "history",
          authenticated: true
        },
        {
          title: "settings",
          path: "account",
          icon: "mdi-account-circle-outline",
          authenticated: true
        },
        {
          title: "Logout",
          path: "logout",
          icon: "mdi-logout",
          authenticated: true
        }
      ],
      title: "BulkyLabs",
      menuItems: [
        {
          title: "Home",
          path: "home",
          icon: "mdi-view-dashboard-outline",
          authenticated: false
        },

        {
          title: "Login / register",
          path: "login",
          icon: "mdi-account-circle-outline",
          authenticated: false
        }
      ]
    };
  },
  computed: {}
};
</script>
