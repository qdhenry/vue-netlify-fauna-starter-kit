<template>
  <v-row
    class="login-page"
    align="center"
    justify="center"
    style="min-height: 500px"
  >
    <div class="form">
      <v-form
        v-if="mode === 'register'"
        class="register-form stack"
        @keyup.enter="signup()"
      >
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-text-field label="Regular" />
            </v-col>
          </v-row>
        </v-container>
        <h2>👋 Register Here</h2>
        <label for="name">Name</label>
        <v-text-field id="name" v-model="crendentials.name" />
        <v-text-field
          id="name"
          v-model="crendentials.name"
          type="text"
          placeholder="Arnold Schwarzenegger"
        ></v-text-field>
        <label for="email">Email</label>
        <v-text-field
          id="email"
          v-model="crendentials.email"
          type="text"
          placeholder="arnie@terminator.com"
        ></v-text-field>
        <span class="line">
          <label for="password">Password</label>
          <i :class="[passwordIcon]" @click="hidePassword = !hidePassword" />
        </span>
        <input
          id="password"
          v-model="crendentials.password"
          :type="passwordType"
          placeholder="******"
        />
        <button type="button" @click="signup()">Sign Up</button>
        <p class="message">
          Already registered?
          <a href="#" @click="toggleMode">Sign In</a>
        </p>
      </v-form>

      <form
        v-if="mode === 'login'"
        class="login-form stack"
        @keyup.enter="login()"
      >
        <h2>🔐 Login Here</h2>
        <label for="email">Email</label>
        <input
          id="email"
          v-model="crendentials.email"
          type="text"
          placeholder="hey@email.com"
        />

        <span class="line">
          <label for="password">Password</label>
          <i :class="[passwordIcon]" @click="hidePassword = !hidePassword" />
        </span>

        <v-text-field
          v-model="crendentials.password"
          :type="passwordType"
          placeholder="******"
        ></v-text-field>
        <router-link to="recover">Forgot your password?</router-link>
        <button type="button" @click="login()">Login</button>
        <button type="button" @click="loginExternal()">
          Sign in with Google
        </button>
        <p class="message">
          Not registered?
          <a href="#" @click="toggleMode">Create an account</a>
        </p>

        <div v-if="isDevEnvironment">
          <SetNetlifyURL />
        </div>
      </form>
    </div>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import SetNetlifyURL from "./SetNetlifyURL.vue"

export default {
  name: "LoginSignup",
  components: {
    SetNetlifyURL
  },
  data () {
    return {
      crendentials: {
        name: "",
        password: "",
        email: ""
      },
      hidePassword: true,
      mode: "login"
    }
  },
  computed: {
    ...mapGetters("app", ["isDevEnvironment"]),
    passwordType () {
      return this.hidePassword ? "password" : "text"
    },
    passwordIcon () {
      return this.hidePassword ? "eye-open" : "eye-closed"
    }
  },
  methods: {
    ...mapActions("auth", [
      "attemptLogin",
      "attemptSignup",
      "attemptExternalLogin"
    ]),
    toggleMode () {
      this.mode === "register"
        ? (this.mode = "login")
        : (this.mode = "register")
    },
    signup () {
      this.attemptSignup(this.crendentials)
        .then(response => {
          alert(`Confirmation email has been sent to you! ${response.id}`)
          console.log(response)
        })
        .catch(error => {
          alert(`Somethings gone wrong signing up.
                 Error: ${error}`)
          console.error(error, "Somethings gone wrong signing up")
        })
    },
    login () {
      this.attemptLogin({ ...this.crendentials })
        .then(() => {
          alert(`You have signed in!`)
          this.$router.push(this.$route.query.redirect || "journals")
        })
        .catch(error => {
          alert(`Somethings gone wrong logging in.
                 Error: ${error}`)
          console.error(error, "Somethings gone wrong logging in")
        })
    },
    loginExternal () {
      this.attemptExternalLogin("Google")
    }
  }
};
</script>
