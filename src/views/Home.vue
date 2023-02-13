<template>
  <div class="home-page">
    <div class="container">
      <div class="home-page__products" >
        <Sidebar />
        <div class="home-page__products-list">
          <ProductsList :prodList="this.$store.getters.sortedAndSearchProducts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from '../components/ProductsList.vue';
import Sidebar from "@/components/UI/Sidebar/Sidebar.vue";
import Loader from "@/App.vue";
export default {
  name: "home",
  components: {
    Loader,
    ProductsList,
    Sidebar
  },
  mounted() {
    this.$store.commit("setSortedAndSearchProducts", this.$store.getters.products)
    this.$store.commit("setSortedCategory", "all categories")
  }
}
</script>
<style>
  .home-page__products {
    display: flex;
    flex-direction: column;
  }
  .home-page__products-list {
    margin-top: 30px;
  }
</style>