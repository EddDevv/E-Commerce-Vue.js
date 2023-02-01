<template>
  <div class="main">
    <Navbar />
    <RouterView />
  </div>
</template>

<script>
import Navbar from '../components/UI/Navbar/Navbar.vue';
import Sidebar from '../components/UI/Sidebar/Sidebar.vue';
export default {
  name: "main",
  components: {
    Navbar,
    Sidebar
  }
} 
</script>
<style>
  
</style>