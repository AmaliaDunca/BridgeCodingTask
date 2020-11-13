<template>
  <div class="continer">
    <div class="head">
      <div class="logo"></div>
      <h1>Details X</h1>
      <div class="back">
        <router-link :to="{ path: '/' }">
          <button>Go Back</button>
        </router-link>
      </div>
      <div class="finish">
        <router-link :to="{ path: 'results' }">
          <button>Finish</button>
        </router-link>
      </div>
    </div>
    <div class="main">
      <router-link :to="{ path: '/' }">
        <img class="left" src="../assets/chevron-left.png" alt="image">
      </router-link>

      <div class="banner"></div>

      <router-link :to="{ path: 'itemY' }">
        <img class="right" src="../assets/arrow.png" alt="image">
      </router-link>
    </div>
    <p>{{text}}</p>
  </div>
</template>

<script>
// import Content from "./assets.text.json";
export default {
  name: "ItemX",
  data() {
    return {
      text: null
    };
  },
  created() {
    fetch("/static/text.json")
      .then(res => res.json())
      .then(data => (this.text = data.textItemX));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  display: flex;
}
.logo {
  width: 120px;
  height: 60px;
  border: solid black 2px;
}
h1 {
  margin: auto 150px;
  width: 150px;
}
.back button {
  padding: 20px 33px;
  background-color: white;
  width: 130px;
  margin-left: 50%;
}
.finish button {
  padding: 20px 40px;
  background-color: white;
  margin-left: 70px;
}
.main {
  display: flex;
}

.banner {
  width: 100%;
  height: 300px;
  border: solid black 1px;
  margin: auto;
  margin-top: 100px;
}
img {
  height: 50px;
  margin-top: 200px;
}
.left {
  position: absolute;
  left: 80px;
}
.right {
  position: absolute;
  right: 80px;
}
p {
  width: 90%;
  margin: 30px auto;
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

