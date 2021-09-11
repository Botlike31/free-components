<template>
  <section>
    <div id="nav">
      <router-link to="/news">News</router-link>
      <router-link to="/faq">FAQ</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #0d0d0d;
  font-family: Titillium Web,sans-serif;
  text-decoration: none;
}

h2 {
  margin-bottom: .6rem;
  color: #fff;
  font-size: 22px;
  line-height: 19px;
  font-weight: 700;
}

p {
  line-height: 1.4rem;
  font-size: 1rem;
  color: #e0e0e0;
  margin-bottom: 1rem;
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
  font-size: 1rem;
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
