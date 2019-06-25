<template>
  <div id="statistics">
    <NavBar :theStyle="thename"/>
    <h1>Statistics </h1>
    
    <div id="mainlayout">

    <div id="statbardiv">
    
    <StatClassBar />
    </div>

    <div id="mainstuff">
      <div id="moremainstuff">
        <button class= "buttonPanelItem" v-for="(item,key) in myPanelItems" :key="key">{{item}}</button>


      </div>
    </div>
  
  </div>
  </div>
</template>

<script>


import NavBar from "./Bars/NavBar.vue"
import StatClassBar from "./Bars/StatClassBar.vue"

export default {
  name: "Statistics",
  components: {
    NavBar: NavBar,
    StatClassBar: StatClassBar

  },
  data () {
      return {
      thename: 'Statistics',
      myPanelItems: ['Uldir',"Battle of Dazar'alor",'Crucible of Storms','The Eternal Palace'] 
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
}

#moremainstuff {
  
  height: 2.5rem;
  width: 75rem;
  background-color: red;
}

.buttonPanelItem {
  height: 100%;
  width: 25%;
}


</style>
