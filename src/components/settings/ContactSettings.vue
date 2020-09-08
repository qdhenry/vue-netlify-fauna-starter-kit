<template>
  <v-card tile flat>
    <v-card-title class="overline">
      {{ $t('messages.account_labels.contact_information') }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row align="center" justify="center">
          <v-col cols="12" class="pb-0">
            <v-text-field
              v-model="full_name"
              label="Full name"
              placeholder="Full name"
              outlined
              prepend-inner-icon="mdi-account"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="pt-0 pb-0">
            <v-text-field
              v-model="email_address"
              label="Email"
              placeholder="Email"
              outlined
              prepend-inner-icon="mdi-email"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { sync } from 'vuex-pathify'
export default {
  name: 'ContactSettings',
  data() {
    return {
      editingEmail: false
    }
  },
  computed: {
    email_address: sync('mockuser/email'),
    full_name: sync('mockuser/name')
  }
}
</script>

<style lang="scss" scoped></style>
