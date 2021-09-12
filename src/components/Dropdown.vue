<template>
  <div
    class="menu-item"
    @mouseover="isOpen = !isOpen"
    @mouseleave="isOpen = false"
  >
    <a href="">{{ title }}</a>
    <svg viewBox="0 0 1030 638" width="10">
      <path
        fill="#cdcdcd"
        d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
      ></path>
    </svg>
    <div
      class="sub-menu"
      v-show="isOpen"
      @mouseover="isOpen = !isOpen"
      @mouseleave="isOpen = false"
    >
      <div v-for="(item, index) in items" :key="index" class="menu-item">
        <a href="#">{{ item.username }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
