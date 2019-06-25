<template>
  <div class="statclassbar">

<nav  class="site-navigation" role="navigation">
  
  <button class="accordion" @click="toggle">Select Class</button>
   
   <div v-if="shouldShow">
      <StatBarElement
  v-for="(item,index) in wowClasses"
  v-bind:arrayEle="item"
  v-bind:arraySubEle="item.specs"
  v-bind:key="index"
  @listenToChild="transmitWowClass"
  
  >
  </StatBarElement>
  </div>

</nav>

  </div>
</template>

<script>

import StatBarElement from '../Pieces/StatBarElement.vue'
import {HelperMixins} from '../Mixins/HelperMixins.js'


export default {
  name: "StatClassBar",
  mixins: [HelperMixins]  
  ,
    components: {
    StatBarElement: StatBarElement
  },
  data (){
    return {
      shouldShow: true
    }
  },
  methods: {
    toggle: function(){
      this.shouldShow = !this.shouldShow
    },
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
<style>

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


 
.mydiv {
  display: flex;
  flex-direction: row;
  height: 20px;
}


button.accordion {
 
  background-color:  #ddd;
  border: #ddd;
  outline: none;
  text-align: left;
  height: 20px;
  width: 100px;
  cursor: pointer;
  transition: background-color 0.2s linear;
  
}

button.accordion:hover {
  background-color:  whitesmoke;
}

#importantdiv{
  width:120px
}

.accordion-content {
  background-color:rgb(18, 7, 48);
  padding: 5px 2px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  
  overflow: hidden;
  
  position: relative;
  
 
}

.accordion-content-item {
 
}

.accordion-content-item:hover {
 text-decoration: underline;
 cursor: pointer;
 
} 


</style>
