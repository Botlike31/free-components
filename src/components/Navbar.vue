<template>
  <nav>
    <div class="menu-item">
      <router-link to="/">News</router-link>
    </div>
    <div class="menu-item">
      <router-link to="/faq">FAQ</router-link>
    </div>
    <Dropdown title="Account" :items="dropData" />
  </nav>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";

export default {
  name: "navbar",
  components: {
    Dropdown,
  },
  data() {
    return {
      dropData: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users/?_limit=3")
      .then((res) => (res.ok && res.json()) || Promise.reject(res))
      .then((data) => {
        this.dropData = data;
        console.log(this.dropData);
      });
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #363636;
  margin-bottom: 1rem;
}

nav a {
  cursor: pointer;
  padding: 6.8px 20px;
  font-size: 1rem;
  text-transform: uppercase;
  line-height: 30px;
  font-family: "Titillium Web", sans-serif;
  white-space: nowrap;
  transition: font-size 0.4s;
  letter-spacing: 0.15rem;
  color: #cdcdcd;
}

nav a:hover {
  color: #ffd744;
}

nav a:link {
  text-decoration: none;
}

nav .menu-item svg {
  margin-left: -1rem;
  width: 0.4rem;
  position: absolute;
  top: 0.9rem;
}
nav .menu-item .sub-menu {
  position: absolute;
  background-color: #0d0d0d;
  width: max-content;
}
nav .menu-item .sub-menu a {
  font-size: 0.8rem;
}
</style>
