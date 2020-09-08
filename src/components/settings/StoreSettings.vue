<template>
  <v-card flat tile>
    <v-card-title class="overline">
      <v-col cols="12">
        <v-row justify="space-between" align="center"> </v-row>
      </v-col>
    </v-card-title>
    <v-card-text class="pb-0">
      <form>
        <v-row>
          <v-col cols="12" class="pb-0 pt-0">
            <v-text-field
              v-model="store_url"
              :focus="editingSettings"
              label="Store URL"
              placeholder="Store URL"
              outlined
              :disabled="!editingSettings"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="pb-0 pt-0">
            <v-text-field
              v-model="store_hash"
              label="Store hash"
              placeholder="Store hash"
              outlined
              :disabled="!editingSettings"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="pb-0 pt-0">
            <v-text-field
              v-model="client_token"
              :append-icon="showClientToken ? 'mdi-eye' : 'mdi-eye-off'"
              label="Client token"
              :type="showClientToken ? 'text' : 'password'"
              placeholder="Client token"
              outlined
              :disabled="!editingSettings"
              @click:append="showClientToken = !showClientToken"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="pb-0 pt-0">
            <v-text-field
              v-model="auth_token"
              :disabled="!editingSettings"
              :append-icon="showAuthToken ? 'mdi-eye' : 'mdi-eye-off'"
              label="Auth token"
              :type="showAuthToken ? 'text' : 'password'"
              placeholder="Auth token"
              outlined
              @click:append="showAuthToken = !showAuthToken"
            ></v-text-field>
          </v-col>
        </v-row>
      </form>
    </v-card-text>
    <v-card-actions class="pb-5 pt-0 pr-5">
      <v-spacer />
      <v-btn
        v-show="!editingSettings"
        class="overline"
        outlined
        @click="editingSettings = !editingSettings"
      ><v-icon left>mdi-pencil</v-icon> Edit settings</v-btn>
      <v-btn
        v-show="editingSettings"
        class="overline"
        outlined
        @click="editingSettings = !editingSettings"
      ><v-icon left>mdi-content-save</v-icon>Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'StoreSettings',
  data () {
    return {
      showAuthToken: false,
      showClientToken: false,
      editingSettings: false,
      toggle_exclusive: 1,
      store_url: '',
      store_hash: '',
      client_token: '',
      auth_token: ''
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped></style>
