<template>
  <div class="home-page">
    <div class="home-page__products">
      <ProductsList :prodList="this.prodList" />
    </div>
  </div>
</template>

<script>
import ProductsList from '../components/ProductsList.vue';
export default {
  name: "home",
  components: {
    ProductsList
  },
  data() {
    return {
      prodList: []
    }
  },
  async mounted() {
    this.prodList = await this.$store.getters.products
  }
}
</script>
<style>
  
</style>