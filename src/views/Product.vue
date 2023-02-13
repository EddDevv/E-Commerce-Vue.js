<template>
  <div class="container center">
    <div class="product-page">
      <div class="product-page__left">
        <img class="product-page__img" :src="$route.query.image">
      </div>
      <div class="product-page__right">
        <div class="product-page__title">{{ $route.query.title }}</div>
        <div class="product-page__price">
          {{ $route.query.price }} $
        </div>
        <div class="product-page__category">
          <div class="product-page__subtitle">Category:</div>
          {{ $route.query.category }}
        </div>
        <div class="product-page__description">
          <div class="product-page__subtitle">Description:</div>
          {{ $route.query.description }}
        </div>
        <DefaultButton @click="addProductToCart" class="product-page__btn">Add to cart</DefaultButton>
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
  },
  methods: {
    addProductToCart() {
        if (localStorage.getItem("isAuth")) {
        this.$store.dispatch("checkProductInCart", Number(this.$route.params.id))
      } else {
        this.$store.dispatch("addNotification", createNotification("Sign up to add items to the cart"))
      }
    }
  }
}
</script>
<style>
  .product-page {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .product-page__img {
    width: 350px;
    height: 350px;
  }
  .product-page__title, .product-page__price {
    margin-top: 20px;
    font-size: 36px;
    line-height: 40px;
    font-weight: 700;
  }
  .product-page__left{
    flex: 0 1 40%;
  }
  .product-page__right {
    flex: 0 1 55%;
    margin-left: 30px;
  }
  .product-page__subtitle {
    font-size: 20px;
    color: #000;
    font-weight: 700;
  }
  .product-page__category, .product-page__description {
    margin-top: 20px;
    font-size: 18px;
  }
  .product-page__btn {
    margin-top: 30px;
  }

  @media(max-width: 768px) {
    .product-page__left {
      display: flex;
      justify-content: center;
    }
    .product-page {
      flex-direction: column;
    }
    .product-page__right {
      margin-left: 0;
    }
  }
  @media(max-width: 530px) {
    .product-page__title {
      font-size: 30px;
    }
    .product-page__img {
      width: 300px;
      height: 300px;
    }
  }
</style>