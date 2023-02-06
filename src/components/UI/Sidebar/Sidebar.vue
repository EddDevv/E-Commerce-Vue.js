<template>
  <div class="sidebar__content">
    <div class="categories">
      <SortedList  />
    </div>
  </div>
</template>
<script>
import SortedList from '../../SortedList.vue';
import DefaultButton from '../Button/DefaultButton.vue';
export default {
  name: "sidebar",
  components: {
    SortedList,
    DefaultButton,
  },
}
</script>
<style>
  .sidebar__content {
    width: 15%;
    display: flex;
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
  }
  .sidebar__btn {
    margin-top: 20px;
  }
  .categories {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
</style>