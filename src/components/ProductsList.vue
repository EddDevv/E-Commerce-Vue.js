<template>
  <div class="container">
    <div v-if="this.$store.state.products.products" class="products-list">
      <ProductItem 
        v-for="prod in this.$store.state.products.products"
        :id="prod.id"
        :key="prod.id"
        :title="prod.title"
        :description="prod.description"
        :category="prod.category"
        :price="prod.price"
        :image="prod.image"
      />
    </div>
    <Loader v-else />
  </div>
</template>
<script>
import ProductItem from './ProductItem.vue';
import Loader from './Loader.vue';
export default {
  name: "product-list",
  components: {
    ProductItem,
    Loader
  },
}
</script>
<style>
  .products-list {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 50px;
  }
</style>