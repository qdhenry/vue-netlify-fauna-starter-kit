<template>
  <main class="home space">
    <LoginSignup v-if="currentUser === null" />
    <v-card v-else id="greeting">
      <h2>🖐️ Welcome Back {{ currentUser.user_metadata.full_name }}!</h2>
      <p>
        You're logged in. Go check out your
        <router-link :to="{ name: 'journals' }">journals ➡️ </router-link>.
      </p>
    </v-card>
  </main>
</template>

<script>
import { mapGetters } from "vuex"
import LoginSignup from "../components/LoginSignup.vue"

export default {
  name: "Home",
  components: {
    LoginSignup
  },
  props: {
    msg: {
      type: String,
      default: 'test'
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters("auth", ["currentUser"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#greeting {
  border-style: dashed;
  padding: 15px;
  border-radius: 15px;
  border-color: #c6c6c6;
  border-width: 1px;
  h2 {
    text-transform: capitalize;
  }
}
img#logo {
  width: 100%;
  height: auto;
}
</style>
