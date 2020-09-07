<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          👋 Hey fellow developer! <br />It looks like you're in a local
          development environment. Dont worry, this wont show in your production
          site.
        </v-col>
        <v-col cols="12">
          <span v-if="siteURL" id="url-hint"
            >Set URL: https://{{ siteURL }}
          </span>
        </v-col>
        <v-col cols="12">
          <div id="input-container">
            <span>https://</span>
            <input
              v-model="netlifyURL"
              type="text"
              placeholder="YOUR-NETLIFY-SITE.netlify.com"
            />
          </div>
        </v-col>
        <v-btn color="red" type="button" @click="setURL()">SET</v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SetNetlifyURL",
  data() {
    return {
      netlifyURL: ""
    };
  },
  computed: {
    ...mapGetters("app", ["isDevEnvironment", "siteURL"])
  },
  methods: {
    setURL() {
      this.$store.commit("app/SET_SITE_URL", this.netlifyURL);
    }
  }
};
</script>

<style scoped>
.dev-check {
  background: beige;
  padding: 20px;
  border-radius: 15px;
}

#input-container {
  display: flex;
  align-items: baseline;
}

#input-container span {
  background: #a7dea7;
  padding: 10px;
  border-bottom: 3px solid rgb(44, 44, 44);
}

#input-container input {
  width: 100%;
}

#url-hint {
  padding: 10px;
  margin: 10px 0 10px 0;
  background-color: #def6c7;
  border-style: dashed;
  border-color: #c6c6c6;
  border-width: 1px;
  border-radius: 15px;
}

input {
  margin-top: 10px;
}
</style>
