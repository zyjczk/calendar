<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss">
html,body, ul, li, h1, h2, h3, h4, h5, h6, p, form, dl, dt, dd { 
  margin: 0px; 
  padding: 0px; 
}
html,body{
  height: 100%
}
ul { list-style: none; }
img { border-style: none; }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  /* margin-top: 60px; */
}
</style>
