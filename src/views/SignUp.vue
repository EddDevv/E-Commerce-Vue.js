<template>
  <div class="signup-page">
    <span class="auth__title">Sign Up</span>
    <div class="error__auth">{{ authMessage }}</div>
    <form @submit.prevent="validateValues">
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
      <Input 
        type="password"
        placeholder="Password"
        class="auth__inp"
        :value="password"
        @input="password = $event.target.value"
      />
      <div class="error-input">{{ errorPassword }}</div>
      <DefaultButton class="auth__btn">Sign Up</DefaultButton>
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
import { createUser } from "../API/user"
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
      authMessage: ""
    }
  },
  validations() { 
    return {
      email: { required, email},
      password: { required, minLength: minLength(6) }
    }
  },
  methods: {
    async validateValues() {
      const res = await this.v$.$validate()
      if (!this.v$.email.$invalid && !this.v$.password.$invalid) {

        const formData = {
          email: this.email,
          password: this.password,
          name: this.username
        }

          try {
            await this.$store.dispatch("register", formData)
            this.$router.push("/")
          } catch(e) {}
        }
        
      if (this.v$.email.$invalid) {
        this.errorEmail = this.v$.email.$errors[0].$message
      } else {
        this.errorEmail = ""
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