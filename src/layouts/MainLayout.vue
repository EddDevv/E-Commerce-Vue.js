<template>
  <div class="main">
    <Navbar/>
    <div class="page">
      <RouterView/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/UI/Navbar/Navbar.vue';
import Sidebar from '../components/UI/Sidebar/Sidebar.vue';

import {searchByQuery} from "@/helpers/search";
import {store} from "@/store";
import {sortedByCategory} from "@/helpers/sorted";

export default {
  name: "main",
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      activeCategory: "allCategories",
    }
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo")
    }
  },
  computed: {
    sortedCategory() {
      return this.$store.getters.sortedCategory
    },
    searchQuery() {
      return this.$store.getters.searchQuery
    },
  },
  watch: {
    sortedCategory() {
      sortedByCategory(this.sortedCategory)
    },
    searchQuery() {
      const searchQuery = this.$store.getters.searchQuery
      const products = this.$store.getters.products
      if (!searchQuery) {
        return
      } else {
        this.$router.push({path: `/search`, query: {query: searchQuery}})
        this.$store.commit("setSortedAndSearchProducts", searchByQuery(products, searchQuery))
      }
    }
  }
}
</script>
<style>

</style>