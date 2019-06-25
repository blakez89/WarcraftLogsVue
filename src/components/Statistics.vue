<template>
  <div id="statistics">
    <NavBar :theStyle="thename"/>
    <h1>Statistics </h1>
    
    <div id="mainlayout">

    <div id="statbardiv">
    
    
    </div>

    <div id="mainstuff">
      <div id="moremainstuff">
         
          <StatClassBar class= "buttonPanelItem" v-for="(item,key) in zones" :key="key"/>  
      
      </div>
    </div>
  
  </div>
  </div>
</template>

<script>


import NavBar from "./Bars/NavBar.vue"
import StatClassBar from "./Bars/StatClassBar.vue"
import { HelperMixins } from './Mixins/HelperMixins.js';

export default {
  name: "Statistics",
  components: {
    NavBar: NavBar,
    StatClassBar: StatClassBar

  },
  mixins: [HelperMixins],
    data () {
      return {
      thename: 'Statistics',  
      thedata: [1,2,3,4,5,6,7,8,9,10]
    }
  }
}
</script>

<style>

#mainlayout {
  display: flex;

}

#statbardiv {
  width:20rem;
}



#mainstuff {
  
  height: 30rem;
  width: 75rem;
  background-color:lawngreen;
  position:static;
  color: black;
}

#moremainstuff {
  
  height: 20px;
  width: 75rem;
  background-color: red;
  display: flex;

}

.buttonPanelItem {
  height: 2.5rem;
  width: 100px;
}


</style>
