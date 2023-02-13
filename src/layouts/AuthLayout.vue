<template>
  <div class="auth">
    <RouterView/>
  </div>
</template>
<script>
export default {
  name: "auth",
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fbError) {
      console.log(fbError);
    }
  }
}
</script>
<style>
.auth {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.auth__title {
  text-align: center;
  font-size: 20px;
}

.signin-page, .signup-page {
  display: flex;
  flex-direction: column;
}

.auth__inp {
  margin-top: 15px;
}

.auth__btn {
  margin-top: 20px;
}

.auth__link {
  margin-top: 25px;
}

.auth__link span {
  margin-right: 5px;
}

.auth__innerPage {
  text-decoration: underline;
}

.error-input, .error-auth {
  margin-top: 10px;
  color: red;
}

.auth__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>