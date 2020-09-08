<template>
  <v-card tile flat>
    <v-card-title class="overline">
      <v-col cols="12">
        <v-row justify="space-between" align="center">
          messages.account_labels.billing_settings
          <v-spacer />
          <v-btn
            v-show="!editingSettings"
            class="overline"
            outlined
            @click="editingSettings = !editingSettings"
          ><v-icon left>mdi-pencil</v-icon> Edit settings</v-btn>
          <v-btn
            v-show="editingSettings"
            outlined
            class="overline"
            @click="editingSettings = !editingSettings"
          ><v-icon left>mdi-content-save</v-icon>Save</v-btn>
        </v-row>
      </v-col>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12" class="py-0">
            <v-row>
              <v-col cols="12" class="py-0">
                <h3>Billing Address</h3>

                <v-row>
                  <v-col cols="5">
                    <v-text-field
                      v-model="billingInfo.address.address_line_1"
                      label="Address line 1"
                      placeholder="Address line 1"
                      outlined
                      :disabled="!editingSettings"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="billingInfo.address.city"
                      label="City"
                      placeholder="City"
                      outlined
                      :disabled="!editingSettings"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-text-field
                      v-model="billingInfo.address.state"
                      label="State"
                      placeholder="State"
                      outlined
                      :disabled="!editingSettings"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-text-field
                      v-model="billingInfo.address.zip_code"
                      label="State"
                      placeholder="State"
                      outlined
                      :disabled="!editingSettings"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" class="py-0">
                <h3>Payment Information</h3>
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      v-model="billingInfo.payment.last_4_of_cc"
                      label="Card number"
                      placeholder="Card number"
                      outlined
                      :disabled="!editingSettings"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-text-field
                      v-model="billingInfo.payment.card_type"
                      label="Card type"
                      placeholder="Card type"
                      outlined
                      :disabled="!editingSettings"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="billingInfo.payment.expiration"
                      label="Expiration date"
                      placeholder="Expiration date"
                      outlined
                      :disabled="!editingSettings"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="billingInfo.payment.next_billing"
                      label="Next billing date"
                      placeholder="Next billing date"
                      outlined
                      :disabled="!editingSettings"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { sync } from 'vuex-pathify'
export default {
  name: 'BillingSettings',
  data () {
    return {
      showAuthToken: false,
      showClientToken: false,
      editingSettings: false,
      toggle_exclusive: 1
    }
  },
  computed: {
    billingInfo: sync('mockuser/billing')
  }
}
</script>

<style lang="scss" scoped></style>
