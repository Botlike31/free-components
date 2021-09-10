<template>
  <section>
    <div id="nav">
      <router-link to="/news">News</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
</template>

<style>

body {
  margin: 0;
  background: #0d0d0d;
  text-decoration: none;
}

.container {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 90%;
  height: 100vh;
}

#nav {
  text-align: center;
  border-bottom: 1px solid #363636;
  margin-bottom: 1rem;
}

#nav a {
  padding: 6.8px 20px;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 30px;
  font-family: 'Titillium Web',sans-serif;
  white-space: nowrap;
  transition: font-size .4s;
  letter-spacing: .15rem;
  color: #cdcdcd;
}

#nav a:hover {
  color: #ffd744;
}

#nav a:link {
  text-decoration: none;
}
</style>
