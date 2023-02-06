<template>
  <div class="main">
    <Navbar />
    <div class="page">
      <RouterView />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/UI/Navbar/Navbar.vue';
import Sidebar from '../components/UI/Sidebar/Sidebar.vue';
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
    sortingCategory() {
      return this.$store.getters.sortedCategory
    },
    sortingPrice() {
      return this.$store.getters.sortedPrice
    },
    searchQuery() {
      return this.$store.getters.searchQuery
    },
  },
  methods: {
    sort() {
      const priceSortMethod = this.$store.getters.sortedPrice
      const category = this.$store.getters.sortedCategory
      const products = this.$store.getters.products

      let arr = products.filter(a => category === "allCategories" ? products : a.category === category)
      this.$store.commit("setSortedAndSearchProducts", arr)

      switch (priceSortMethod) {
        case "ascending" :
          arr = arr.sort((a, b) => a.price - b.price)
          this.$store.commit("setSortedAndSearchProducts", arr)
          break
        case "descending" :
          arr = arr.sort((a, b) => b.price - a.price)
          this.$store.commit("setSortedAndSearchProducts", arr)
          break
        default:
          this.$store.commit("setSortedAndSearchProducts", arr)
      }
    }
  },

  watch: {
    sortingCategory() {
      this.sort()
    },
    sortingPrice() {
      this.sort()
    },
    searchQuery() {
      const searchQuery = this.$store.getters.searchQuery
      const products = this.$store.getters.products
      if (!searchQuery) {
        return
      } else {
        this.$router.push({path: `/search`, query: {query: searchQuery}})
        const arr = products.filter(item => item.title.toUpperCase().includes(searchQuery.toUpperCase()))
        this.$store.commit("setSortedAndSearchProducts", arr)
      }
    }
  }
}
</script>
<style>
  
</style>