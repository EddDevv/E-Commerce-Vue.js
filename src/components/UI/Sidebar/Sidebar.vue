<template>
  <div @click.stop class="sidebar__content">
    <div class="sidebar__categories sidebar__block">
    <div class="sidebar__title">Sorting by category:</div>
    <CategoriesList />
  </div>
  <div class="sidebar__price sidebar__block">
    <div class="sidebar__title">Sorting by price:</div>
    <label for="ascending"  class="label">
      <input type="radio" name="price" id="ascending">
      ascending
    </label>
    <label for="descending" class="label">
      <input type="radio" name="price" id="descending">
      descending
    </label>
  </div>
  <DefaultButton class="sidebar__btn">Save</DefaultButton>
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