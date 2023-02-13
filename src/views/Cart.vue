<template>
  <div class="cart-page">
    <div v-if="this.$store.getters.cart.length" class="cart-list">
      <CartList />
    </div>
    <div v-else class="cart-list__empty">
      <h2 class="cart-empty__title">Cart is empty</h2>
      <img src="../assets/icons/shopping-cart.png" alt="shopping-cart">
      <router-link to="/">
        <DefaultButton>Shopping back</DefaultButton>
      </router-link>
    </div>
  </div>
</template>
<script>
import DefaultButton from '../components/UI/Button/DefaultButton.vue';
import CartList from '../components/CartList.vue';
export default {
  components: {
    CartList,
    DefaultButton,
  },
}
</script>
<style>
  .cart-page {
    padding-bottom: 40px;
  }
  .cart-list__empty {
    height: 50vh;
  }
  .cart-empty__title {
    font-size: 40px;
    text-transform: uppercase;
  }
  .cart-list__empty img {
    width: 100px !important;
    height: 100px;
    margin-bottom: 30px;
    margin-top: 20px;
  }
</style>