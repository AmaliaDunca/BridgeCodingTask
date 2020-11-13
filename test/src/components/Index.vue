<template>
  <div class="continer">
    <div class="head">
      <div class="logo"></div>
      <h1>Dashboard</h1>
    </div>

    <h2 class="title">Lorem ipsum</h2>
    <p class="text">Select one of the intems bellow to know more details</p>
    <div class="section">
      <div class="item">
        <router-link :to="{ path: 'itemX' }">
          <div class="img"></div>
        </router-link>
        <p>X</p>
      </div>
      <div class="item">
        <router-link :to="{ path: 'itemY' }">
          <div class="img"></div>
        </router-link>
        <p>Y</p>
      </div>
      <div class="item">
        <router-link :to="{ path: 'itemZ' }">
          <div class="img"></div>
        </router-link>
        <p>Z</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  overflow: auto;
}
.logo {
  width: 120px;
  height: 60px;
  border: solid black 2px;
  float: left;
  overflow: auto;
}
h1 {
  padding-left: 42%;
}
.title {
  margin-top: 100px;
}
.title,
.text {
  text-align: center;
}
.img {
  width: 200px;
  height: 200px;
  border: solid black 1px;
}
p {
  text-align: center;
}
.section {
  display: flex;
}
.item {
  margin: 50px;
}
</style>
