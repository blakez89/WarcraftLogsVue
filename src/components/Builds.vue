<template>
  <div id="statistics">
    <NavBar :theStyle="thename"/>
    <h1>Builds (Refactor to MainBar)</h1>
    
          
      <div id="moremainstuff">
         
          <BarMainElement 
  v-bind:jsonLevelOne="wowClasses"
  v-bind:jsonLevelTwo= "barOneJsonData"
  v-bind:jsonName= "barOneJsonName"
  />

   <BarMainElement 
  v-bind:jsonLevelOne="zones"
  v-bind:jsonLevelTwo= "barTwoJsonData"
  v-bind:jsonName= "barTwoJsonName"
  />

      
      </div>
    
  
  </div>
  
 
   

  
</template>

<script>


import NavBar from "./Bars/NavBar.vue"
import BarMainElement from "./Bars/MainBar/BarMainElement.vue"
import { HelperMixins } from './Mixins/HelperMixins.js';

export default {
  name: "Builds",
    mixins: [HelperMixins]  
  ,
    components: {
    BarMainElement: BarMainElement,
    NavBar: NavBar
  },
  data (){
    return {
      thename: 'Builds',
      shouldShow: false,
      barOneJsonData: 'specs',
      barOneJsonName: 'All Classes',
      barTwoJsonData: 'encounters',
      barTwoJsonName: 'All Bosses',
     
    }
  },
  methods: {
    toggle: function(){
      this.shouldShow = !this.shouldShow
    }
}
}
</script>

<style>




#moremainstuff {
  
 
  display: flex;

}



</style>
