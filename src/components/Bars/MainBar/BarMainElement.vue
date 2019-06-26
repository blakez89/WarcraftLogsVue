<template>


  <div id="statclassbar"
  @mouseover="shouldShow = true"
          @mouseleave="shouldShow = false">


  
  <button class="accordion"
   id="mainaccordionbutton"
  
  >{{jsonName}}</button>
   
   <!-- <div v-if="shouldShow" > -->
   <div v-if="shouldShow" >

     <!-- This needs to recieve props, is passing double props ok?  -->
  <BarSubElement
  v-for="(item,index) in jsonLevelOne"
  v-bind:arrayEle="item"
  v-bind:arraySubEle="testThings(item,jsonLevelTwo)"
  v-bind:key="index"
  @listenToChild="transmitWowClass"
  
  >
  </BarSubElement>

  
  </div>
  </div>






</template>

<script>

import BarSubElement from './BarSubElement'



export default {
  name: "StatClassBar",
  props: ["jsonLevelOne", "jsonLevelTwo","jsonName"],
    components: {
    BarSubElement: BarSubElement
  },
  data (){
    return {
      shouldShow: false,
      specs: 'specs'
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
    },
    
    testThings: function (def,wontwork){
        return def[wontwork]
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


 
.mydiv {
  display: flex;
  flex-direction: row;
  height: 35px;
  width: 100px;
}

#mainaccordionbutton{
height: 20px;

}
button.accordion {
  font-size:small;
  color: #f2f2f2;
  background-color:#333;
  border: #ddd;
  outline: none;
  text-align: left;
  height: 35px;
  width: 100px;
  cursor: pointer;
  transition: background-color 0.2s linear;
  
}
button.accordion:hover {
  background-color:  rgb(66, 65, 65);
}

.accordion-content {
  font-size:small;
  background-color:#333;
  padding: 5px; 
 
  overflow: hidden;
  position: relative;
  list-style: none;
  display: grid;
  grid-template-columns: 1;
  margin: 0;
  color: #f2f2f2;
 
}
.accordion-content-item {
  display: block;
  display: grid;
  grid-template-columns: 1;
  position: relative;
  text-decoration: none;
  padding-top: 5px;
  padding-bottom: 5px;
  
}
.accordion-content-item a {
text-decoration: none;
  display: block;
  transition: background-color 0.2s linear;
}
.accordion-content-item:hover {
 background-color:  rgb(66, 65, 65);
 cursor: pointer;
 
} 











































/* 
button.accordion {
 
  background-color:  #ddd;
  border: #ddd;
  outline: none;
  text-align: left;
  height: 100%;
  width: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.2s linear;
  
}

button.accordion:hover {
  background-color:  whitesmoke;
}

#importantdiv{
  width:300px
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

 */
</style>
