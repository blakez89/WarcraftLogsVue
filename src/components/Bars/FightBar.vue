<template>
  <div class="FightBar">

<nav  class="site-navigation" role="navigation">
  <ul class="menu">
      <BarElement
  v-for="(item,index) in zones"
  v-bind:arrayEle="item"
  v-bind:arraySubEle="item.encounters"
  v-bind:key="index"
  @listenToChild="transmitEncounterUpdate"
  >
  </BarElement>
  </ul>
</nav>

  </div>
</template>

<script>
import BarElement from '../Pieces/BarElement.vue'
import {HelperMixins} from '../Mixins/HelperMixins.js'

export default {
  name: "FightBar",
  props: {
    msg: String
  },
mixins: [HelperMixins]
  ,
  components: {
    BarElement: BarElement
  },

   methods: { 
     transmitEncounterUpdate: function(payload) {
       this.$emit("transmitEncounterUpdate", {
        zoneId: payload.y,
        encounterId: payload.b,
        zoneName: payload.x,
        encounterName: payload.a
      }); 
    }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
/* 
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
} */





</style>
