<template>
  <div v-if="this.$store.getters.categories.length && this.$store.getters.products.length" id="app">
    <component :is="currentLayout"></component>
  </div>
  <Loader v-else />
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';
import Loader from "@/components/Loader.vue";
export default {
  components: {Loader, MainLayout, AuthLayout },

  computed: {
    currentLayout() {
      return this.$route.meta.layout
    }
  },
  async mounted() {
    await this.$store.dispatch("fetchProducts")
    await this.$store.dispatch("fetchCategories")
    if (this.$store.dispatch("fetchProducts")) {
      this.$store.commit("setSortedAndSearchProducts", this.$store.getters.products)
    }
  }
}

</script>


<style scoped>
</style>