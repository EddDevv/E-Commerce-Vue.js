<template>
  <div class="signin-page">
    <span class="auth__title">Sign In</span>
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
        type="password"
        placeholder="Password"
        class="auth__inp"
        :value="password"
        @input="password = $event.target.value"
      />
      <div class="error-input">{{ errorPassword }}</div>
      <DefaultButton class="auth__btn">Sign In</DefaultButton>
      <div class="error-auth">{{ errorSigin }}</div>
    </form>
    <div class="auth__link">
      <span>Not registered yet ?</span>
      <router-link class="auth__innerPage" to="/signup">Sign Up</router-link>
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
  data() {
    return {
      email: "",
      password: "",
      errorPassword: "",
      errorEmail: "",
      errorSigin: ""
    }
  },
  components: {
    Input,
    DefaultButton
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
            password: this.password
          }

          try {
            await this.$store.dispatch("login", formData)
            this.$router.push("/")
          } catch (e) {
            this.errorSigin = "User not found"
          }
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
</style>