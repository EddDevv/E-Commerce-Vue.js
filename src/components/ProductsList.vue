<template>
  <TransitionGroup tag="div" name="list" v-if="this.$store.getters.sortedAndSearchProducts.length" class="products-list">
    <ProductItem
        v-for="prod in this.$store.getters.sortedAndSearchProducts"
        :id="prod.id"
        :key="prod.id"
        :title="prod.title"
        :description="prod.description"
        :category="prod.category"
        :price="prod.price"
        :image="prod.image"
    />
  </TransitionGroup>
  <Loader v-else/>
</template>
<script>
import ProductItem from './ProductItem.vue';
import Loader from './Loader.vue';

export default {
  name: "product-list",
  components: {
    ProductItem,
    Loader
  },
  data() {
    return {
      visibleHelper: false,
    }
  },
}
</script>
<style>
.products-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-bottom: 50px;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>