<template>


  <div class="statclassbar"
  @mouseover="shouldShow = true"
          @mouseleave="shouldShow = false">


  
  <button class="accordion" 
   
  
  >Select Class</button>
   
   <div v-if="shouldShow" >

     <!-- This needs to recieve props, is passing double props ok?  -->
  <StatBarElement
  v-for="(item,index) in wowClasses"
  v-bind:arrayEle="item"
  v-bind:arraySubEle="item.specs"
  v-bind:key="index"
  @listenToChild="transmitWowClass"
  
  >
  </StatBarElement>
  </div>
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
      shouldShow: false
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
  background-color:rgb(177, 10, 10);
  padding: 5px 2px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  position: relative;
  list-style: none;
  display: grid;
  grid-template-columns: 1;
  margin: 0;
 
}

.accordion-content-item {
  display: block;
  display: grid;
  grid-template-columns: 1;
  position: relative;
  text-decoration: none;

}

.accordion-content-item a {
text-decoration: none;
  display: block;
}

.accordion-content-item:hover {
 text-decoration: underline;
 cursor: pointer;
 
} 


</style>
