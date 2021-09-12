<template>
  <div class="app">
    <Navbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #0d0d0d;
  font-family: Titillium Web, sans-serif;
}

h2 {
  margin-bottom: 0.6rem;
  color: #fff;
  font-size: 22px;
  line-height: 19px;
  font-weight: 700;
}

p {
  line-height: 1.4rem;
  font-size: 1rem;
  color: #e0e0e0;
}

.container {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 90%;
  height: 100vh;
}
</style>
