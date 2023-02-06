<template>
  <div class="signin-page">
    <span class="auth__title">Sign In</span>
    <form class="auth__form" @submit.prevent="validateValues">
      <DefaultInput
        type="text"
        placeholder="Email"
        class="auth__inp"
        :value="email"
        @input="email = $event.target.value"
      />
      <div v-if="v$.email.$invalid" class="error-input">{{ emailError }}</div>
      <DefaultInput
        type="password"
        placeholder="Password"
        class="auth__inp"
        :value="password"
        @input="password = $event.target.value"
      />
      <div v-if="v$.password.$invalid" class="error-input">{{ passwordError }}</div>
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
import DefaultButton from '../components/UI/Button/DefaultButton.vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import DefaultInput from "@/components/UI/Input/DefaultInput.vue";
export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      email: "",
      password: "",
      passwordError: "",
      emailError: "",
      errorSigin: ""
    }
  },
  components: {
    DefaultInput,
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
        if (res) {
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
          
        } else {
          this.emailError =  this.v$.email.$errors[0].$message
          this.passwordError =  this.v$.password.$errors[0].$message
        }
    }
  }
}
</script>
<style>
</style>