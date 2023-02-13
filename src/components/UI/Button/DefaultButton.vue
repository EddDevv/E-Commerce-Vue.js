<template>
  <button class="btn">
    <slot/>
  </button>
</template>
<script>
export default {
  name: "defaultButton"
}
</script>
<style>
.btn {
  padding: 10px 30px;
  color: #fff;
  background-color: blueviolet;
  border-radius: 20px;
}

.btn:hover {
  background-color: rgb(107, 27, 183);
}
</style>