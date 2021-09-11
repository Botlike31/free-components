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
import Dropdown from '@/components/Dropdown.vue'

export default {
  name: 'navbar',
  components:{
    Dropdown
  },
  data() {
    return {
      dropData: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users/?_limit=3').then(res => res.ok && res.json() || Promise.reject(res))
    .then(data => {
          this.dropData = data;
          console.log(this.dropData)
    })
  }
}
</script>

<style>

</style>