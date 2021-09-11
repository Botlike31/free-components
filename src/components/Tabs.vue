<template>
  <div> 
    <button @click="selectTab(1)" :class="{ 'yellow' : currentTab == 1 }">Rezessionen</button>
    <button @click="selectTab(2)" :class="{ 'yellow' : currentTab == 2 }">Gallerie</button>
    <button @click="selectTab(3)" :class="{ 'yellow' : currentTab == 3 }">Road Map</button>

    <div v-if="currentTab == 1" class="comments">
      <div v-for="(comment, index) in tabsData[0]" :key="index" class="comment">
        <h2>{{ comment.email }}</h2>
        <p>{{ comment.body }}</p>
      </div>
    </div>
    <div v-if="currentTab == 2" class="photos">
      <div v-for="(photo, index) in tabsData[1]" :key="index" class="photo">
        <img :src="photo.url" :alt="photo.title">
        <p>{{ photo.title }}</p>
      </div>  
    </div>
    <div v-if="currentTab == 3" class="todos">
      <div v-for="(todo, index) in tabsData[2]" :key="index" class="todo">
        <p>2021 {{ todo.id }}.Quartal:  {{ todo.title }}</p>comments
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabsData: Array
  },
  data: function () {
    return {
      currentTab: 1
    }
  },
  methods: {
    selectTab(selectedTab) {
      this.currentTab = selectedTab;
    }
  }
}
</script>

<style>

.yellow {
  color: #ffd744;
}
</style>