<template>
  <div class="sidebar__price sidebar__block">
    <div class="select-category">
      <button 
        @click="isVisibleDropdown = !isVisibleDropdown" 
        ref="dropdownCategory" 
        class="select-category-res"
      >
        {{ this.$store.getters.sortedCategory }}
        <svg :class="{arrowTransform: isVisibleDropdown}" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m12 15.4-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4Z"/></svg>
      </button>
      <ul :class="{activeDropdown: isVisibleDropdown}" v-if="isVisibleDropdown" class="category-list">
        <li 
          class="category-item" 
          @click="sortByCategories(this.allCategories)"
          >
          all categories
        </li>
        <li 
          class="category-item"
          v-for="category in this.$store.getters.categories"
          :key="category"
          @click="sortByCategories(category)"
        >
        {{ category }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allCategories: "all categories",
      isVisibleDropdown: false
    }
  },
  created () {
    window.addEventListener('click', this.closeDropdown)
  },
  methods: {
    sortByCategories(category) {
      if (category === "all categories") {
        this.$store.commit("setSortedCategory", category)
      } else {
        this.$store.commit("setSortedCategory", category)
      }
    },
    closeDropdown (e) {
      if (!this.$refs.dropdownCategory.contains(e.target)) {
        this.isVisibleDropdown = false
      }
    }
  },
  beforeUnmount () {
    window.removeEventListener('click', this.closeDropdown)
  }
}
</script>
<style>
.select-category-res {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: blueviolet;
  color: #fff;
  min-width: 200px;
  text-transform: uppercase;
}

.select-category-res svg {
  fill: #fff;
  transition: all 0.3s;
}

.select-category-res:hover {
  background-color: rgb(102, 26, 174);
}

.select-category {
  position: relative;
}

.label:last-child {
  margin-right: 0;
}

.arrowTransform {
  transform: rotate(-180deg);
}

.category-list {
  display: inline-block;
  position: absolute;
  top: 110%;
  left: 0;
  max-height: 0px;
  min-width: 100%;
  white-space: nowrap;
  background-color: #fff;
  transition: all 0.3s;
  z-index: 10;
}

.activeDropdown {
  max-height: 200px;
  transition: all 0.3s;
}

.category-item {
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
  border-bottom: 1px solid rgb(102, 26, 174);;
  border-right: 1px solid rgb(102, 26, 174);;
  border-left: 1px solid rgb(102, 26, 174);;
  cursor: pointer;
  text-transform: uppercase;
  transition: height 0.3s;
}

.category-item:hover {
  background-color: blueviolet;
  color: #fff;
}

.category-item:first-child {
  border-top: 1px solid rgb(102, 26, 174);
}

.sidebar__block {
  display: flex;
  justify-content: flex-end;
}
</style>