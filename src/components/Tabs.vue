<template>
  <div class="tab">
    <div class="tab-navigation">
      <ul>
        <li @click="selectTab(1)" :class="{ active: currentTab == 1 }">
          Gallerie
        </li>
        <li @click="selectTab(2)" :class="{ active: currentTab == 2 }">
          Road Map
        </li>
        <li @click="selectTab(3)" :class="{ active: currentTab == 3 }">
          Rezessionen
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div v-if="currentTab == 1" class="photos">
        <div v-for="(photo, index) in tabsData[0]" :key="index" class="photo">
          <div class="photo-content">
            <img :src="photo.url" :alt="photo.title" />
            <p>{{ photo.title }}</p>
          </div>
        </div>
      </div>
      <div v-if="currentTab == 2" class="todos">
        <div v-for="(todo, index) in tabsData[1]" :key="index" class="todo">
          <h2>{{ todo.id }}. Quartal 2021</h2>
          <p>{{ todo.title }}</p>
          <p class="todo-detail">more ></p>
        </div>
      </div>
      <div v-if="currentTab == 3" class="comments">
        <div
          v-for="(comment, index) in tabsData[2]"
          :key="index"
          class="comment"
        >
          <h2>{{ comment.email }}</h2>
          <p>{{ comment.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabsData: Array,
  },
  data: function () {
    return {
      currentTab: 1,
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.currentTab = selectedTab;
    },
  },
};
</script>
