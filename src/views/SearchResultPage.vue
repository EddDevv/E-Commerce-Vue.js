<template>
  <div class="container">
    <div v-if="this.$store.getters.sortedAndSearchProducts.length" class="search-result">
      <h2 class="search-result__title">Search results by query <span>"{{ searchQuery }}"</span></h2>
      <div class="search-result__list">
        <ProductList :prodList="this.$store.getters.sortedAndSearchProducts" />
      </div>
    </div>
    <div v-else>
      <h2 class="search-result__title">Nothing on request <span>"{{ this.$route.query.query }}"</span></h2>
    </div>
  </div>
</template>
<script>
import ProductList from "@/components/ProductsList.vue";
export default {
  name: "searchResult",
  components: {
    ProductList,
  },
  computed: {
    searchQuery() {
      return this.$route.query.query
    }
  },
  mounted() {
    this.$store.commit("setSearchQuery", this.$route.query.query)
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

  @media(max-width: 530px) {
    .search-result__title {
      font-size: 30px;
      line-height: 110%;
    }
  }
</style>