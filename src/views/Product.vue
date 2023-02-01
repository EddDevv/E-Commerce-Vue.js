<template>
  <div class="container center">
    <div class="product-page">
      <div class="product-page__left">
        <img class="product-page__img" :src="$route.query.image">
        <div class="product-page__title">{{ $route.query.title }}</div>
      </div>
      <div class="product-page__right">
        <div class="product-page__description">
          <div class="product-page__subtitle">Description:</div>
          {{ $route.query.description }}
        </div>
        <div class="product-page__category">
          <div class="product-page__subtitle">Category:</div>
          {{ $route.query.category }}
        </div>
        <div class="product-page__price">
          <div class="product-page__subtitle">Price:</div>
          {{ $route.query.price }} $
        </div>
        <DefaultButton class="product-page__btn">Add to cart</DefaultButton>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from '../components/UI/Button/DefaultButton.vue';
export default {
  name: "product-page",
  components: {
    DefaultButton
  }
}
</script>
<style>
  .product-page {
    width: 100%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-page__img {
    width: 300px;
    height: 300px;
  }
  .product-page__title {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
  }
  .product-page__left{
    flex: 0 1 40%;
  }
  .product-page__right {
    flex: 0 1 55%;
    margin-left: 30px;
  }
  .product-page__subtitle {
    font-size: 18px;
    margin-bottom: 5px;
    color: #000;
    font-weight: 400;
  }
  .product-page__price {
    margin-top: 20px;
    font-size: 25px;
    color: blueviolet;
    font-weight: bold;
  }
  .product-page__category {
    margin-top: 20px;
  }
  .product-page__btn {
    margin-top: 30px;
  }
</style>