<template>
  <input class="default-input" :type="type" :placeholder="placeholder">
</template>
<script>
export default {
  name: "default-input",
  data() {
    return {
      type: "",
      placeholder: ""
    }
  }
}
</script>
<style>
.default-input {
  width: 320px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 5px 10px 3px rgb(107, 0, 164);
  padding-left: 15px;
  padding-right: 15px;
}

.default-input:hover, .default-input:focus {
  box-shadow: 0 10px 30px rgb(107, 0, 164);
}
</style>