<template>
  <div @click="toProductPage" class="product-item">
    <div class="product-item_top">
      <img class="product-item__img" :src="image" :alt="title">
      <div class="product-item__title">{{ title }}</div>
    </div>
    <div class="product-item_bottom">
      <div class="product-item__category">
        <span>Category:</span>
        {{ category }}
      </div>
      <div class="product-item__price">${{ price }}</div>
      <DefaultButton 
        type="button" 
        @click.stop="addToCart" 
        class="product-item__btn"
      >
      Add to cart
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM5.2 4h14.75q.575 0 .875.512.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25Zm3.35 7h7Z"/></svg>
    </DefaultButton>
    </div>
  </div>
</template>
<script>
import DefaultButton from './UI/Button/DefaultButton.vue';
import { createNotification } from "@/helpers/createNotification"
export default {
  name: "product-item",
  components: {
    DefaultButton,
  },
  props: {
    id: Number,
    title: String,
    description: String,
    price: Number,
    image: String,
    category: String
  },
  methods: {
    addToCart() {
      if (localStorage.getItem("isAuth")) {
        this.$store.dispatch("checkProductInCart", this.id)
      } else {
        this.$store.dispatch("addNotification", createNotification("Sign up to add items to the cart"))
      }
    },
    toProductPage() {
      this.$router.push({
        path: `/product/${this.id}`,
        query: {
          title: this.title,
          description: this.description,
          price: this.price,
          category: this.category,
          image: this.image
        }
      })
    },
  }
}
</script>
<style>
.product-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
  cursor: pointer;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.3s;
}

.product-item:hover {
  box-shadow: 0 3px 3px 3px #00000047;
}

.product-item__img {
  height: 200px;
  width: 200px;
  margin: 0 auto;
  transition: all 0.3s;
}

.product-item:hover .product-item__img {
  transform: scale(1.05);
}

.product-item__title {
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.product-item__category {
  margin-top: 15px;
}

.product-item__category span {
  font-size: 16px;
  font-weight: 600;
}

.product-item__price {
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}

.product-item__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
}
.product-item__btn svg {
  margin-left: 10px;
  fill: #fff;
}
</style>