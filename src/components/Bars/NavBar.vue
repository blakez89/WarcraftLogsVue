<template>
  <div id="NavBar" class="topnav">
  <router-link :to=item v-for="(item,key) in MenuArray" :key="key" v-bind:class="{active : activateClass(item)}">{{item}}</router-link>
  
  </div>
</template>

<script>



export default {
  name: "NavBar",
  props: ['theStyle'],
  
  data () {
      return {
          activateClass: function (item) {
              if (item == this.theStyle) {return true}
              
          },
          MenuArray: ['Rankings','Statistics','Builds']
      }
  }

//add the array stuff with all the links


}

</script>

<style>
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}



</style>
