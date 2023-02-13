<template>
  <div v-if="this.$store.getters.categories.length && this.$store.getters.products.length" id="app">
    <component :is="currentLayout"></component>
    <Notification />
  </div>
  <Loader v-else />
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';
import Loader from "@/components/Loader.vue";
import Notification from './components/Notification.vue';
export default {
  components: {
    Loader, 
    MainLayout, 
    AuthLayout, 
    Notification 
  },
  data() {
    return {
      total: 0
    }
  },
  computed: {
    currentLayout() {
      return this.$route.meta.layout
    },
  },
  async mounted() {
    this.$store.dispatch("loadStateLocaStorage")
    this.$store.dispatch("fetchCategories")
    if (this.$store.dispatch("fetchProducts")) {
      this.$store.commit("setSortedAndSearchProducts", this.$store.getters.products)
    }
  },
}

</script>


<style scoped>
</style>