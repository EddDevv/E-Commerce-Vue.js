<template>
  <div @click.stop class="sidebar__content">
    <CategoriesList  />
  </div>
</template>
<script>
import CategoriesList from '../../CategoriesList.vue';
import DefaultButton from '../Button/DefaultButton.vue';
export default {
  name: "sidebar",
  props: ["isVisible"],
  components: {
    CategoriesList,
    DefaultButton
  },
}
</script>
<style>
  .sidebar {
    position: fixed;
    top: 78px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.379);
  }
  .sidebar__content {
    width: 25vw;
    padding: 15px;
    height: 100vh;
    background-color: #fff;
  }
  .sidebar__title {
    font-size: 16px;
    font-weight: 600;
    color: rgb(173, 0, 212);
  }
  .sidebar__block {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border-bottom: 2px solid rgb(173, 0, 212);
    padding-bottom: 15px;
  }
  .sidebar__btn {
    margin-top: 20px;
  }
</style>