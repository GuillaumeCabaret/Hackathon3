<template>
<div>
<h1>Command</h1>
<img src="../assets/logowhite.png" class="logo">
<a href="#/menu" class="close"></a>
</div>
</template>

<script>
export default {
  name: "Command",
  data() {
    return {
      msg: "Command"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  float: left;
  width: 30%;
  margin-top: -11vh
}
.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: white;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

</style>
