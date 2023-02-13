<template>
  <div class="cart-item">
    <div class="cart-item__body">
      <div class="cart-item__left">
        <img class="cart-item__img" :src="image" :alt="title">
        <div class="cart-item__title">{{ title }}</div>
      </div>
      <div class="cart-item__center">
        <DefaultButton @click="addQualityProduct">+</DefaultButton>
        <div class="cart__item-how">{{ counter }}</div>
        <DefaultButton @click="removeQualityProduct">-</DefaultButton>
      </div>
      <div class="cart-item__right">
        <div class="cart-item__price">{{ totalPriceCountRounded }}$ / {{ counter }} pr.</div>
        <button @click="removeFromCart" class="cart-item__remove">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path
                d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21ZM17 6H7v13h10ZM9 17h2V8H9Zm4 0h2V8h-2ZM7 6v13Z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultButton from './UI/Button/DefaultButton.vue';

export default {
  name: "CartItem",
  components: {
    DefaultButton
  },
  data() {
    return {
      totalPriceCount: this.totalProductPrice,
      counter: this.count
    }
  },
  computed: {
    totalPriceCountRounded() {
      return this.totalPriceCount.toFixed(2)
    }
  },
  props: {
    id: Number,
    title: String,
    price: String,
    image: String,
    count: Number,
    totalProductPrice: Number
  },
  methods: {
    removeFromCart() {
      this.$store.dispatch("removeFromCart", this.id)
    },
    addQualityProduct() {
      this.counter++
      this.totalPriceCount = this.price * this.counter
      this.$store.dispatch("calcCounterPlus", {
        prodID: this.id,
        count: this.counter,
        totalProductPrice: this.totalPriceCount
      })
    },
    removeQualityProduct() {
      if (this.count > 1) {
        this.counter--
        this.totalPriceCount = this.totalPriceCount - this.price
        this.$store.dispatch("calcCounterMinus", {
          prodID: this.id,
          count: this.counter,
          totalProductPrice: this.totalPriceCount
        })
      } else {
        return this.count
      }
    },
  }
}
</script>

<style>
.cart-item {
  margin-top: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid blueviolet;
}

.cart-item__img {
  min-width: 100px;
  height: 100px
}

.cart-item__left, .cart-item__center {
  display: flex;
  align-items: center;
}

.cart-item__center {
  justify-content: center;
}

.cart-item__right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.cart-item__left, .cart-item__center, .cart-item__right {
  flex: 0 1 33%;
}

.cart-item__title {
  font-size: 20px;
  margin-left: 20px;
}

.cart-item__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart__item-how {
  margin-left: 5px;
  margin-right: 5px;
}

.cart-item__price {
  font-size: 20px;
  color: blueviolet;
}

.cart-item__remove {
  margin-left: 20px;
}

.cart-item__remove svg {
  fill: #ff0000;
  transition: all 0.3s;
}

.cart-item__remove:hover.cart-item__remove svg {
  fill: #950000;
}
</style>