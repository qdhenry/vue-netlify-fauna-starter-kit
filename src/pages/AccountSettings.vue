<template>
  <v-row align="center" justify="center" style="min-height: 400px">
    <v-col cols="12">
      <h1>I am Account Settings</h1>
    </v-col>
    <v-col cols="12">
      <StoreSettings />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AccountSettings",
  components: {
    StoreSettings: () => import('../components/settings/StoreSettings')
  }
};
</script>

<style lang="scss" scoped></style>
