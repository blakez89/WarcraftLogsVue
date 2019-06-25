<template>
  <div id="rankings">
    
    <NavBar :theStyle='rankingsPage'/>
    <!-- <p>Add buttons so you can skip to certain pages in the pagnation</p>
    <p>Make the + / - signs spans and align them to the right</p>
    <p>Make the classes be highlighted with their color when you hover over them</p> -->
    <div class="challenge">

    <div class="sitelogo">
    
    <h2>Warcraft Logs Vue Version</h2>

    <p>All data is generated from <a href="https://warcraftlogs.com">WarcraftLogs.com</a> API ... {{encounterName}} {{wowSpec}} {{wowClass}}</p>
    
    </div>

     <div class = "wowclasses">
   
    <ClassBar @transmitWowClass="updateWowClass"/>
    </div>

  
    <div class = "therankings">
    
    <div class="loaders" v-if="loading">
    
   
    
    <div><grid-loader ></grid-loader></div>
    
    
    </div>

    <div v-if="!loading">
    <WoWTable :rankings="rankings"/>
    </div>
    </div>    
  


    
 <div class = "encounters">
    
    <FightBar @transmitEncounterUpdate="updateEncounter"/>
    </div>



  </div>
    
   

  </div>
</template>

<script>
import ClassBar from "./Bars/ClassBar.vue";
import WoWTable from "./Bars/WoWTable.vue";
import FightBar from "./Bars/FightBar.vue";
import GridLoader from "./Pieces/GridLoader.vue"
import NavBar from "./Bars/NavBar.vue"

export default {
  name: "Main",
  components: {
    WoWTable: WoWTable,
    ClassBar: ClassBar,
    FightBar: FightBar,
    GridLoader: GridLoader,
    NavBar: NavBar
    
  },
  data: function() {
    return {
      loading: true,
      wowClass: "Warlock",
      wowClassId: 10,
      wowSpec: "Destruction",
      wowSpecId: 3,
      zoneName: "Battle for Dazar'alor",
      zoneId: 21,
      encounterName: "Champion of the Light",
      encounterId: 2265,
      rankings: [],
      rankingsPage: 'Rankings' 
    };
  },

  created() {

    this.getJsonData(2265, 10, 3);
  },

  methods: {
    updateWowClass(payload) {
      this.wowClass = payload.className;
      this.wowClassId = payload.classId;
      this.wowSpec = payload.specName;
      this.wowSpecId = payload.specId;
      this.getJsonData(this.encounterId, this.wowClassId, this.wowSpecId);
    },

    updateEncounter(payload) {
      this.zoneName = payload.zoneName;
      this.zoneId = payload.zoneId;
      this.encounterName = payload.encounterName;
      this.encounterId = payload.encounterId;
      this.getJsonData(this.encounterId, this.wowClassId, this.wowSpecId);
    },

    getJsonData: function(fightID, WoWclass, spec) {
      this.loading = true;
      let trueJsonArray = [];
      let key = "api_key=30ff6c3bd1b9fbda8a0cb3f8d574b88b";
      let url = `https://www.warcraftlogs.com:443/v1/rankings/encounter/${fightID}?difficulty=5&class=${WoWclass}&spec=${spec}&region=US&${key}`;
      return new Promise((resolve, reject) => {
        let theJsonData = fetch(url)
          .then(data => data.json())
          .then(data => data.rankings);
        if (!theJsonData) reject(new Error('Error retrieving Warcraft Log information'));
        resolve(theJsonData);
      }).then(chars => {
        chars.forEach(char =>
          trueJsonArray.push({
            title: char.name,
            value: char.guildName,
            server: char.serverName,
            region: char.regionName,
            talents: char.talents.map(talent => talent.name),
            azeritepowers: char.azeritePowers
              .filter(
                azeritePower => azeritePower.ring === 3 || azeritePower === 2
              )
              .map(azeritePower => azeritePower.name)
          })
        );
        this.loading = false;
        this.rankings = trueJsonArray;
      }).catch(error =>{alert(error.message)});
    },


  }
};
</script>

<style>


.challenge {
  width: 1200px;
  margin: 30px auto;
  display: grid;
  grid-template-rows: 100px 1000px;
  grid-template-columns: 200px 800px 200px;
  grid-gap: 10px;
}

.sitelogo{
  
  grid-column: 1 / -1;
  text-align: center;
  text-orientation: initial;
  align-content: stretch;
  
}

.wowclasses{
  
}

.therankings{
  
  
}

.loaders {
  display: grid;
  text-align: center;
  text-orientation: initial;
  align-content: stretch;
}


.encounters {
  
} 



</style>