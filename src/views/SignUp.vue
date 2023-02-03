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
      <div v-if="watchInp && v$.email.$invalid" class="error-input">{{ emailError }}</div>
      <Input 
        type="text"
        placeholder="Username"
        class="auth__inp"
        :value="username"
        @input="username = $event.target.value"
      />
      <div v-if="watchInp && v$.username.$invalid" class="error-input">{{ usernameError }}</div>
      <Input 
        type="password"
        placeholder="Password"
        class="auth__inp"
        :value="password"
        @input="password = $event.target.value"
      />
      <div v-if="watchInp && v$.password.$invalid" class="error-input">{{ passwordError }}</div>
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
      watchInp: false,
      email: "",
      password: "",
      username: "",
      passwordError: "",
      emailError: "",
      usernameError: "",
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
      this.watchInp = true
      if (res) {
        
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
        
      } else {
        this.emailError =  this.v$.email.$errors[0].$message
        this.usernameError =  this.v$.username.$errors[0].$message
        this.passwordError =  this.v$.password.$errors[0].$message
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