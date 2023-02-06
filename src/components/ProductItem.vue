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
      <div class="product-item__price">{{ price }}$</div>
      <DefaultButton type="button" @click.stop="addToCart" class="product-item__btn">Add to cart</DefaultButton>
    </div>
  </div>
</template>
<script>
import DefaultButton from './UI/Button/DefaultButton.vue';
export default {
  name: "product-item",
  components: {
    DefaultButton
  },
  props: ["id", "title", "description", "price", "image", "category"],
  methods: {
    addToCart() {
     
    },
    toProductPage() {
      this.$router.push({ path: `/product/${this.id}`, query: { title: this.title, description: this.description, price: this.price, category: this.category, image: this.image } })
    }
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
  }
  .product-item:hover .product-item__title {
    text-decoration: underline;
  }
  .product-item__img {
    height: 200px;
    width: 200px;
    margin: 0 auto;
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
    width: 100%;
    margin-top: 10px;
  }
</style>