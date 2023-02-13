<template>
  <div class="container">
    <TransitionGroup 
      class="cart-list" 
      name="list" 
      tag="ul"
    >
      <CartItem
        v-for="product in this.$store.getters.cart"
        :key="product.id"
        :count="count(product.id)"
        :id="product.id"
        :title="product.title"
        :image="product.image"
        :price="product.price"
        :totalProductPrice="totalProductPrice(product.id)"
      />
      <div class="cart-list__total">
        <div class="cart-list__total-title">Total Price:</div>
        <div class="cart-list__total-price">${{ totalPrice }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";

export default {
  name: "CartList",
  components: {CartItem},
  computed: {
    totalPrice() {
      return this.$store.getters.totalPrice.toFixed(2)
    },
  },
  methods: {
    count(id) {
      const prod = this.$store.getters.cart.find(a => a.id === id)
      return prod ? prod.count : 1
    },
    totalProductPrice(id) {
      const prod = this.$store.getters.cart.find(a => a.id === id)
      return prod ? prod.totalProductPrice : 1
    }
  }
}
</script>

<style>
.cart-list-empty-title {
  text-align: center;
  font-size: 30px;
  color: #000;
}

.cart-list__empty {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cart-list__total {
  display: flex;
  align-items: flex-start;
}

.cart-list__btn {
  margin-top: 10px;
}

.cart-list__total {
  margin-top: 30px;
}

.cart-list__total-title {
  font-size: 25px;
}

.cart-list__total-price {
  color: blueviolet;
  font-weight: 700;
  font-size: 25px;
  margin-left: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>