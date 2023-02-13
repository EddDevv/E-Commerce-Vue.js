<template>
  <div class="notification">
    <transition-group name="slide-right" class="notification__content">
      <div class="notification__item"
        v-for="notification in notifications"
        :key="notification.id"
        >
        {{ notification.message }}
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "HelpMessage",
  computed: {
    notifications() {
      return this.$store.state.notifications
    }
  },
  methods: {
    
  }
}
</script>
<style>
  .notification {
    position: fixed;
    top: 100px;
    right: 16px;
    z-index: 20;
   }
   .notification__content {
    display: flex;
    flex-direction: column;
   }
   .notification__item {
    position: relative;
    padding: 10px 30px;
    background-color: rgb(28, 0, 54);
    margin-top: 10px;
    z-index: 100;
    color: #fff;
    border-radius: 20px;
   }
   .notification__item::after {
    content: ''; 
    position: absolute; 
    left: 20px; bottom: -15px; 
    border: 10px solid transparent;
    border-top: 10px solid rgb(28, 0, 54);
   }
   .slide-right-enter-active {
  animation: slide-right-enter 0.5s;
}
.slide-right-leave-active {
  animation: slide-right-leave 0.5s;
}
@keyframes slide-right-enter {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-right-leave {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>