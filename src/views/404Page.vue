<template>
  <div class="error-page">
    <div class="error-page__num">404</div>
    <div class="error-page__title">Page not found</div>
    <router-link class="error-page__link" to="/">Back to the home page</router-link>
  </div>
</template>
<script>
export default {
  name: "errorPage"
}
</script>
<style>
  .error-page {
    height: calc(100vh - 78px);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .error-page__num {
    color: blueviolet;
    font-size: 200px;
    line-height: 180px;
    font-weight: 700;
  }
  .error-page__title {
    color: blueviolet;
    font-size: 30px;
  }
  .error-page__link {
    margin-top: 20px;
    font-size: 20px;
    text-decoration: underline;
  }
  .error-page__link:hover {
    font-weight: bold;
  }
</style>