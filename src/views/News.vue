<template>
  <div>
    <Tabs :tabsData="tabsData" />
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";

export default {
  components: {
    Tabs,
  },
  data() {
    return {
      tabsData: [],
    };
  },
  mounted() {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/photos/?_limit=6").then(
        (res) => (res.ok && res.json()) || Promise.reject(res)
      ),
      fetch("https://jsonplaceholder.typicode.com/todos/?_limit=4").then(
        (res) => (res.ok && res.json()) || Promise.reject(res)
      ),
      fetch("https://jsonplaceholder.typicode.com/comments/?_limit=5").then(
        (res) => (res.ok && res.json()) || Promise.reject(res)
      ),
    ]).then((data) => {
      this.tabsData = data;
      /* console.log(this.tabsData); */
    });
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
  transition: all 0.2s ease-out;
}
.tab {
  background-color: #222;
  box-shadow: 0 0 0.8rem rgb(0 0 0 / 60%);
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
}
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.photo {
  padding: 0.8rem;
  margin: 1rem;
  background: #303030;
  cursor: pointer;
  box-shadow: 0 0 1rem rgb(0 0 0 / 30%);
}
.photo img {
  width: 100%;
  box-shadow: 0 0 1rem rgb(0 0 0 / 30%);
}
.photo p {
  color: rgba(187, 187, 187, 1);
  word-wrap: break-word;
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
  background: #303030;
  border: solid 3px #ffd744;
  box-shadow: 0 0 10px rgb(0 0 0 / 60%);
}
.todo p {
  color: rgba(187, 187, 187, 1);
  word-wrap: break-word;
}
.todo:hover {
  box-shadow: 0 0 50px #ffd74436;
}
.comment {
  background: #303030;
  padding: 1.2rem;
  margin-bottom: 1.2rem;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
}
.comment h2 {
  color: #ffd744;
  font-size: 1rem;
}
.comment p {
  color: rgba(187, 187, 187, 1);
  word-wrap: break-word;
}

@media (max-width: 991px) {
  .photos {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 769px) {
  .photos {
    display: grid;
    grid-template-columns: 1fr;
  }
  .todos {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem 6rem;
  }
}
</style>
