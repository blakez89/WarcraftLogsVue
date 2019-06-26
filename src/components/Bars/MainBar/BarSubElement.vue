<template>
  <div class="mydiv"
   @mouseover="hover = true"
          @mouseleave="hover = false"
       >
  
    
     <div id="maindiv">
    <button class="accordion">
    {{arrayEle.name}}
    
    </button>
     </div>
    


      <div >
        <ul class="accordion-content" v-if="hover">  
           
        <li
          class="accordion-content-item"
          v-for="(child,index) in arraySubEle"
          :key="index"
          @click="transmitChildInfo(arrayEle.name,arrayEle.id,child.name,child.id)"
        >{{child.name ? child.name : child}}</li>
        
      </ul>


      </div>


  </div>
</template>

<script>
export default {
  name: "BarSubElement",
  props: ["arrayEle", "arraySubEle"],
  data: function() {
    return {
      hover: false
    };
  },
  methods: {
    transmitChildInfo: function(x, y, a, b) {
      this.$emit("listenToChild", {
        x: x,
        y: y,
        a: a,
        b: b
      });
    }
  }
};
</script>

<style>

 




</style>