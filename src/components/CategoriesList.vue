<template>
  <div v-if="this.$store.getters.categories.length" class="categories">
    <div class="sidebar__price sidebar__block">
      <div class="sidebar__title">Category:</div>
      <label for="allCategories" class="label" key="allCategories">
        <input
            @change="sortByCategories"
            type="radio"
            value="allCategories"
            name="category"
            v-model="activeCategory"
            id="allCategories"
        >
        All categories
      </label>
      <label
          v-for="category in this.$store.getters.categories"
          :key="category"
          :for="category"
          class="label"
      >
        <input
            :id="category"
            type="radio"
            name = "category"
            :value="category"
            v-model="activeCategory"
            @change="sortByCategories"
        >
        {{ category }}
      </label>
    </div>
    <div class="sidebar__price sidebar__block">
      <div class="sidebar__title">Price:</div>
      <label for="ascending"  class="label">
        <input
            type="radio"
            name="price"
            id="ascending"
            value="ascending"
            v-model="sortPriceMethod"
            @change="sortingByPrice"
        >
        ascending
      </label>
      <label for="descending" class="label">
        <input
            type="radio"
            name="price"
            id="descending"
            value="descending"
            v-model="sortPriceMethod"
            @change="sortingByPrice"
        >
        descending
      </label>
    </div>
  </div>
  <Loader v-else />
</template>
<script>
import Loader from "./Loader.vue"
export default {
  components: {
    Loader
  },
  data() {
    return {
      activeCategory: "",
      sortPriceMethod: "",
    }
  },
  async mounted() {
    await this.$store.dispatch("fetchCategories")
  },
  methods: {
    sortByCategories() {
      this.$store.commit("setSortedMethod", this.activeCategory)
    },
    sortingByPrice() {
      this.$store.commit("setSortedPrice", this.sortPriceMethod)
    }
  }
}
</script>
<style>
  .categories {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .label {
    display: inline-flex;
    align-items: center;
    margin-top: 5px;
  }
</style>