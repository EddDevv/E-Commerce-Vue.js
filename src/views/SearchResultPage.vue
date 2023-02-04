<template>
  <div class="container">
    <div class="search-result">
      <h2 class="search-result__title">Search results by query <span>"{{ this.$route.query.query }}"</span></h2>
      <div class="search-result__list">
        <ProductList :prodList="this.prodList" />
      </div>
    </div>
<!--    <div v-else>-->
<!--      <h2 class="search-result__title">Nothing on request <span>"{{ this.$route.query.query }}"</span></h2>-->
<!--    </div>-->
  </div>
</template>
<script>
import ProductList from "@/components/ProductsList.vue";
export default {
  name: "searchResult",
  components: {
    ProductList,
  },
  data() {
    return {
      prodList: []
    }
  },
  computed: {
    searchQuery() {
      return this.$store.getters.searchQuery
    },
  },
  watch: {
    searchQuery() {
      const searchQuery = this.$store.getters.searchQuery
      const products = this.$store.getters.products
      this.$router.push({ path: `/search`, query: { query:  searchQuery} })
      this.prodList = products.filter(item => item.title.toUpperCase().includes(searchQuery.toUpperCase()))
    }
  }
}
</script>
<style>
  .search-result__title {
    margin-top: 30px;
    font-size: 40px;
    font-weight: normal;
    text-align: center;
  }
  .search-result__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .search-result__title span {
    color: orange;
    font-size: 40px;
  }
</style>