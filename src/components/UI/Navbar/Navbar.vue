<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar__content">
        <div class="navbar__left">
          <router-link class="navbar__logo" to="/">E-Commerce</router-link>
          <div @click="showMenu" class="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar__search">
          <input 
            v-model="searchQuery" 
            class="navbar__input" 
            type="text" 
            placeholder="Search . . ."
          >
          <button @click="getSearchProducts" class="navbar__search-btn">Search</button>
        </div>
        <div class="navbar__right">
          <router-link 
            v-if="!this.$store.state.auth.isAuth"
            to="/signin"
            tag="a"
            class="navbar__signin navbar__link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm-8 8v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 16.35 20 17.2V20Zm2-2h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q13.4 15 12 15t-2.775.337Q7.85 15.675 6.5 16.35q-.225.125-.362.35-.138.225-.138.5Zm6-8q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Zm0-2Zm0 10Z"/></svg>
            Sign In
          </router-link>
          <div v-else-if="this.$store.state.auth.isAuth && this.$store.getters.info" @click="showLogout" class="user navbar__link">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm-8 8v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 16.35 20 17.2V20Zm2-2h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q13.4 15 12 15t-2.775.337Q7.85 15.675 6.5 16.35q-.225.125-.362.35-.138.225-.138.5Zm6-8q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Zm0-2Zm0 10Z"/></svg>
            {{ name }}
            <DefaultButton @click="logout" v-if="logoutVisible" class="logout">Log out</DefaultButton>
          </div>
          <router-link 
            to="/cart"
            tag="a"
            class="navbar__card navbar__link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM5.2 4h14.75q.575 0 .875.512.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25Zm3.35 7h7Z"/></svg>
            Cart
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <transition name="slide-fade">
    <div 
      @click="removeMenu" 
      v-show="isVisible"
      class="sidebar"
    >
      <Sidebar :isVisible="isVisible" />
    </div>
  </transition>
</template>
<script>
import Sidebar from '../Sidebar/Sidebar.vue';
import DefaultButton from '../Button/DefaultButton.vue';
export default {
  name: "navbar",
  components: {
    Sidebar,
    DefaultButton
  },
  data() {
    return {
      isVisible: false,
      logoutVisible: false,
      searchQuery: ""
    }
  },
  computed: {
    name() {
      return this.$store.getters.info.username
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout")
      this.$router.push("/signin")
    },
    showLogout() {
      this.logoutVisible = !this.logoutVisible
    },
    showMenu() {
      this.isVisible = !this.isVisible
    },
    removeMenu() {
      this.isVisible = false
    },
    getSearchProducts() {
      this.$store.commit("setSearchQuery", this.searchQuery)
    }
  }
}
</script>
<style>
  .navbar {
    width: 100%;
    background: linear-gradient(90deg,#cb11ab,#481173);
  }
  .navbar__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .navbar__left {
    display: flex;
    align-items: center;
  }
  .navbar__logo {
    font-size: 20px;
    margin-right: 10px;
    color: #fff;
  }
  .burger {
    width: 48px;
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid hsla(0,0%,100%,.4);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .burger span {
    width: 28px;
    height: 4px;
    border-radius: 20px;
    background-color: #fff;
    margin-top: 6px;
  }
  .burger span:first-child {
    margin-top: 0;
  }
  .burger:hover {
    border-color: #fff;
  }
  .navbar__search {
    position: relative;
    width: 45vw;
  }
  .navbar__search-btn {
    position: absolute;
    height: 45px;
    top: 0;
    right: 0;
    width: 100px;
    background-color: #a7009e;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: #fff;
  }
  .navbar__search-btn:hover {
    background-color: #d700cd;
  }
  .navbar__input {
    width: 100%;
    background-color: rgba(240,240,243,.3);
    padding-left: 15px;
    padding-right: 15px;
    height: 45px;
    border-radius: 28px;
    color: #fff;
    transition: all 0.3s;
  }
  .navbar__input::placeholder {
    opacity: 0.8;
    color: #fff;
  }
  .navbar__input:hover {
    background-color: hsla(0,0%,100%,.5);
  } 
  .navbar__input:focus {
    background-color: #fff;
    color: #000;
    cursor: text;
  } 
  .navbar__input:focus.navbar__input::placeholder {
    color: #000;
  }
  .navbar__right {
    display: flex;
    align-items: center;
  }

  .navbar__link {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    color: rgba(255, 255, 255, 0.463);
  }
  .user {
    margin-right: 15px;
  }
  .navbar__link svg, .user svg {
    fill: #fff;
  }
  .navbar__signin {
    margin-right: 20px;
  }
  .navbar__link:hover {
    color: #fff;
  }
  .slide-fade-enter-active {
    transition: all .3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  .logout {
    min-width: 130px;
    position: absolute;
    top: 100%;
  }
</style>