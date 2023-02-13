<template>
  <div class="sidebar__content">
    <div class="sidebar__title">Catalog</div>
    <div class="categories">
      <SortedList/>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-top: 50px;
}

.sidebar__title {
  font-size: 30px;
  font-weight: 600;
}

.sidebar__btn {
  margin-top: 20px;
}

.categories {
  width: 100%;
  margin-top: 10px;
}
</style>