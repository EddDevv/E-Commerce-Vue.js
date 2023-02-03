<template>
  <div class="route-error">
    <span class="route-error__title">The page is inaccessible without authorization</span>
    <div class="to-auth">
      <router-link class="route-error__btn" to="/signin">
        <DefaultButton>Sign In</DefaultButton>
      </router-link>
      <router-link to="/signup">
        <DefaultButton>Sign Up</DefaultButton>
      </router-link>
    </div>
  </div>
</template>
<script>
import DefaultButton from '../components/UI/Button/DefaultButton.vue'
export default {
  name: "RouteErrorPage",
  components: {
    DefaultButton
  },
  data() {
    return {
      errorMsg: null
    }
  },
}
</script>
<style>
  .route-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(56, 0, 109);
  }
  .to-auth {
    margin-top: 30px;
  }
  .to-auth a{
    color: #fff;
  }
  .route-error__title {
    display: block;
    font-size: 25px;
    color: #fff;
    max-width: 50%;
  }
  .route-error__btn {
    margin-right: 10px;
  }
</style>