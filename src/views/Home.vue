<template>
  <div class="home-page">
    <div class="home-page__products">
      <ProductsList />
    </div>
  </div>
</template>

<script>
import ProductsList from '../components/ProductsList.vue';
import { getAllProducts } from "../API/products"
export default {
  name: "home",
  components: {
    ProductsList
  },
  async mounted() {
    const products = await getAllProducts()
    this.$store.dispatch("setProducts", products)
  }
}
</script>
<style>
  
</style>