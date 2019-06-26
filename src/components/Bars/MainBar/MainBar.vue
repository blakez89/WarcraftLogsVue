<template>
  <div id="realmainbar">
   </div>
 </template>
<script>

import BarMainElement from './BarMainElement.vue'
import {HelperMixins} from '../../Mixins/HelperMixins.js'


export default {
  name: "StatClassBar",
  mixins: [HelperMixins]  
  ,
    components: {
    BarMainElement: BarMainElement
  },
  data (){
    return {
      shouldShow: false,
      iamtestingthedata: [],
      specs: 'specs',
      encounters: 'encounters'
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

#realmainbar{
    
display: grid;
grid-row: 50px 50px
    
}

.inner_one, .inner_two {
 
}


</style>