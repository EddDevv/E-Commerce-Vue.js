<template>
  <div class="container">
      <div v-if="this.prodList.length" class="products-list">
        <ProductItem
            v-for="prod in this.prodList"
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
  data() {
    return {
      sortedArr: []
    }
  },
  props: ["prodList"],
  computed: {
    sortingAndSearch() {
      return this.$store.getters.sortedMethod
    },
    sortingPrice() {
      return this.$store.getters.sortedPrice
    },
  },
  watch: {
    async sortingAndSearch() {
      const category = this.$store.getters.sortedMethod
      const arr = await this.$store.dispatch("fetchProductsByCategory", category)
      this.sortedArr = arr
    },
  }
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