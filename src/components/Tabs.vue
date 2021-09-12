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
          <h2>{{ todo.id }}.Quartal 2021</h2>
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
<style>
ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}
li {
  width: calc(100% / 3);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  padding: 10px 15px;
  text-transform: uppercase;
  background: #ffd744;
  color: #222;
}
li:hover {
  background: #222;
  color: #ffd744;
  border: solid 1px #ffd744;
  transition: all 0.2s ease-out;
}
.tab {
  background-color: #222;
  box-shadow: 0 0 10px rgb(0 0 0 / 60%);
  padding: 0 0 1rem 0;
}
.tab-navigation {
  width: 100%;
  margin: 1rem auto;
  display: table;
  table-layout: fixed;
  background-color: #ffd744;
}
.tab-content {
  padding: 2rem;
}
.active {
  background: #222;
  color: #ffd744;
  border: solid 1px #ffd744;
}
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.photo {
  padding: 0.8rem;
  margin-bottom: 1rem;
}
.photo img {
  width: 100%;
  box-shadow: 0 0 1rem rgb(0 0 0 / 60%);
}
.todos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem 6rem;
}
.todo {
  cursor: pointer;
  text-align: center;
  padding: 2rem;
  border: solid 3px #ffd744;
  box-shadow: 0 0 10px rgb(0 0 0 / 60%);
}
.todo:hover {
  box-shadow: 0 0 50px #ffd74436;
}
</style>
