<template>
  <div id="app">
    <component :is="currentLayout"></component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';
export default {
  components: { MainLayout, AuthLayout },

  computed: {
    currentLayout() {
      return this.$route.meta.layout
    }
  },
  async mounted() {
    await this.$store.dispatch("fetchProducts")
  }
}

</script>


<style scoped>
</style>