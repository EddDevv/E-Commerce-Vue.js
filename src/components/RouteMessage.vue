<template lang="">
  <div>
    <span>{{ errorMsg }}</span>
  </div>
</template>
<script>
export default {
  name: "Error",
  data() {
    return {
      errorMsg: null
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.query.redirectFrom) {
      next(vm => {
        vm.errorMsg =
          "Sorry, you don't have the right access to reach the route requested"
      })
    } else {
      next()
    }
  }
}
</script>
<style lang="">
  
</style>