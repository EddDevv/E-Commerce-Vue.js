<template>
  <div v-if="this.$store.state.categories.categories" class="categories">
    <label 
      v-for="category in this.$store.state.categories.categories"
      :key="category" 
      :for="category"
      class="label"
    >
      <input 
        :id="category" 
        type="radio"
        name = "category"
      >
      {{ category }}
    </label>
  </div>
  <Loader v-else />
</template>
<script>
import { getAllCategories } from '../API/categories';
import Loader from "./Loader.vue"
export default {
  components: {
    Loader
  },
  async mounted() {
    const categories = await getAllCategories()
    this.$store.dispatch("setCategories", categories);
  },
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