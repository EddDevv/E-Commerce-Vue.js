<template>
    <div class="sidebar__price sidebar__block">
      <div class="sidebar__title">Category:</div>
      <label for="allCategories" class="label" key="allCategories">
        <input
            @change="sortByCategories"
            type="radio"
            value="allCategories"
            name="category"
            checked
            v-model="activeCategory"
            id="allCategories"
        >
        all categories
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
      <label for="default"  class="label">
        <input
            type="radio"
            name="price"
            id="default"
            checked
            value="default"
            v-model="sortPriceMethod"
            @change="sortingByPrice"
        >
        default
      </label>
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
</template>
<script>
export default {
  data() {
    return {
      activeCategory: "",
      sortPriceMethod: "",
    }
  },
  methods: {
    sortByCategories() {
      this.$store.commit("setSortedCategory", this.activeCategory)
    },
    sortingByPrice() {
      this.$store.commit("setSortedPrice", this.sortPriceMethod)
    }
  }
}
</script>
<style>
  .label {
    display: inline-flex;
    align-items: center;
    margin-top: 5px;
    cursor: pointer;
  }
  .label input {
    width: 20px;
    height: 20px;
    accent-color: #481173;
  }
  .label:hover{
    text-decoration: underline;
  }
</style>