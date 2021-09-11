<template>
  <div>
    <Tabs :tabsData="tabsData"/>
  </div>
</template>

<script>
  import Tabs from '@/components/Tabs.vue';

  export default {
    components:{
      Tabs
    },
    data() {
      return {
        tabsData: []
      }
    },
    mounted() {
      Promise.all([
        fetch('https://jsonplaceholder.typicode.com/comments/?_limit=5').then(res => res.ok && res.json() || Promise.reject(res)),
        fetch('https://jsonplaceholder.typicode.com/photos/?_limit=5').then(res => res.ok && res.json() || Promise.reject(res)),
        fetch('https://jsonplaceholder.typicode.com/todos/?_limit=4').then(res => res.ok && res.json() || Promise.reject(res))
          ]).then(data => {
            this.tabsData = data;
            /* console.log(this.tabsData); */
          })
    }
}
</script>
