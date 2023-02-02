<template>
  <div class="signup-page">
    <span class="auth__title">Sign Up</span>
    <div class="error__auth">{{ authMessage }}</div>
    <form class="auth__form" @submit.prevent="validateValues">
      <Input 
        type="text"
        placeholder="Email"
        class="auth__inp"
        :value="email"
        @input="email = $event.target.value"
      />
      <div class="error-input">{{ errorEmail }}</div>
      <Input 
        type="text"
        placeholder="Username"
        class="auth__inp"
        :value="username"
        @input="username = $event.target.value"
      />
      <div class="error-input">{{ errorUsername }}</div>
      <Input 
        type="password"
        placeholder="Password"
        class="auth__inp"
        :value="password"
        @input="password = $event.target.value"
      />
      <div class="error-input">{{ errorPassword }}</div>
      <DefaultButton class="auth__btn">Sign Up</DefaultButton>
      <div class="error-auth">{{ errorSignUp }}</div>
    </form>
    <div class="auth__link">
      <span>Already registered ?</span>
      <router-link class="auth__innerPage" to="/signin">Sign In</router-link>
    </div>
  </div>
</template>
<script>
import Input from '../components/UI/Input/Input.vue';
import DefaultButton from '../components/UI/Button/DefaultButton.vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
export default {
  setup () {
    return { v$: useVuelidate() }
  },
  components: {
    Input,
    DefaultButton
  },
  data() {
    return {
      email: "",
      password: "",
      username: "",
      errorPassword: "",
      errorEmail: "",
      errorUsername: "",
      errorSignUp: "",
      authMessage: ""
    }
  },
  validations() { 
    return {
      email: { required, email},
      password: { required, minLength: minLength(6) },
      username: { required }
    }
  },
  methods: {
    async validateValues() {
      const res = await this.v$.$validate()
      if (!this.v$.email.$invalid && !this.v$.password.$invalid && !this.v$.username.$invalid) {
        
        const formData = {
          email: this.email,
          password: this.password,
          username: this.username
        }

        try {
          await this.$store.dispatch("register", formData)
          this.$router.push("/")
        } catch (e) {
          this.errorSignUp = "Registration error. Try again"
        }
      }
        
      if (this.v$.email.$invalid) {
        this.errorEmail = this.v$.email.$errors[0].$message
      } else {
        this.errorEmail = ""
      }
      if (this.v$.username.$invalid) {
        this.errorUsername = this.v$.password.$errors[0].$message
      } else {
        this.errorUsername = ""
      }
      if (this.v$.password.$invalid) {
        this.errorPassword = this.v$.password.$errors[0].$message
      } else {
        this.errorPassword = ""
      }
    }
  }
}
</script>
<style>
  .invalid {
    box-shadow: none;
    border-color: red;
  }
</style>