<template>
  <div> 
    <button @click="selectTab(1)" :class="{ 'yellow' : currentTab == 1 }">Rezessionen</button>
    <button @click="selectTab(2)" :class="{ 'yellow' : currentTab == 2 }">Gallerie</button>
    <button @click="selectTab(3)" :class="{ 'yellow' : currentTab == 3 }">Road Map</button>

    <div v-if="currentTab == 1">
      <div v-for="(comment, index) in tabsData[0]" :key="index" class="content">
        <h2>{{ comment.email }}</h2>
        <p>{{ comment.body }}</p>
      </div>
    </div>
    <div v-if="currentTab == 2" class="content">
      <div v-for="(photo, index) in tabsData[1]" :key="index" class="content">
        <img :src="photo.url" :alt="photo.title">
        <p>{{ photo.title }}</p>
      </div>  
    </div>
    <div v-if="currentTab == 3" class="content">
      <div v-for="(todo, index) in tabsData[2]" :key="index" class="content">
        <p>2021 {{ todo.id }}.Quartal:  {{ todo.title }}</p>
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
  h2 {
    margin-bottom: .6em;
    color: #fff;
    font-size: 22px;
    font-family: Titillium Web,sans-serif;
    line-height: 19px;
    font-weight: 700;
  }

  p {
    line-height: 26px;
    font-size: 16px;
    color: #b3b3b3;
    margin-bottom: 1em;
    height: 7em;
  }

  .yellow {
    color: #ffd744;
  }
</style>