<template>
  <div class="classbar">

<nav  class="site-navigation" role="navigation">
  <ul class="menu">
      <BarElement
  v-for="(item,index) in wowClasses"
  v-bind:arrayEle="item"
  v-bind:arraySubEle="item.specs"
  v-bind:key="index"
  @listenToChild="transmitWowClass"
  >

  </BarElement>

  </ul>
</nav>

  </div>
</template>

<script>
import {HelperMixins} from '../Mixins/HelperMixins.js'
import BarElement from '../Pieces/BarElement.vue'
export default {
  name: "ClassBar",
  props: {
    msg: String
  },
  mixins: [HelperMixins]
  ,
    components: {
    BarElement: BarElement
  },
  methods: {
    transmitWowClass: function(payload) {
       this.$emit("transmitWowClass", {
        classId: payload.y,
        specId: payload.b,
        className: payload.x,
        specName: payload.a
      }); 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  text-align: center;
  width: 100%;
  margin: 0 auto;
  
}
.site-navigation ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
  display: grid;
  grid-template-columns: 1;
}
.site-navigation li {
  
  display: block;
  display: grid;
  grid-template-columns: 1;
  position: relative;
  text-decoration: none;
  
}
.site-navigation li a {
  
  text-decoration: none;
  display: block;
}
</style>