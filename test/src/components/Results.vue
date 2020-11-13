<template>
  <div class="continer">
    <div class="head">
      <div class="logo"></div>
      <h1>Results</h1>
      <div class="startOver">
        <router-link :to="{ path: '/' }">
          <button>Start Over</button>
        </router-link>
      </div>
    </div>
    <h2>Results</h2>
    <div class="rs">
      <router-link :to="{ path: 'itemZ' }">
        <img class="left" src="../assets/chevron-left.png" alt="image">
      </router-link>
      <div class="seeResult">
        <div class="res"></div>
        <h3>See results</h3>
      </div>
      <div class="shareC">
        <div class="share"></div>
        <h3>Share</h3>
      </div>
    </div>
  </div>
</template>
<script>
// import Content from "./assets.text.json";
export default {
  name: "ItemX",
  data() {
    return {};
  },
  created() {}
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
  margin-left: 25%;
  margin-right: 10%;
}
.startOver button {
  padding: 20px 33px;
  font-size: 1rem;
  background-color: white;
  margin-left: 200px;
  width: 150px;
}
h2 {
  margin-top: 50px;
}
.rs {
  display: flex;
}
.seeResult,
.shareC {
  width: 200px;
  height: 200px;
  border: solid black 1px;
}

.res,
.share {
  width: 60px;
  height: 60px;
  border: solid black 1px;
  margin: 50px auto 0px;
}
h3 {
  text-align: center;

  font-size: 1.5rem;
  padding-bottom: 20px;
}
img {
  height: 50px;
  margin-top: 50px;
  position: absolute;
  left: 80px;
}
.left {
  margin-right: 2rem;
}
</style>
    