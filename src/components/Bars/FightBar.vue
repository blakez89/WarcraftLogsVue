<template>
  <div class="FightBar">

<nav  class="site-navigation" role="navigation">
  <ul class="menu">
      <BarElement
  v-for="(item,index) in zones"
  v-bind:arrayEle="item"
  v-bind:arraySubEle="item.encounters"
  v-bind:key="index"
  @listenToChild="transmitEncounterUpdate"
  >
  </BarElement>
  </ul>
</nav>

  </div>
</template>

<script>
import BarElement from '../Pieces/BarElement.vue'


export default {
  name: "FightBar",
  props: {
    msg: String
  },
  data() {
    return {
        zones : [
            {
      "id": 19,
      "name": "Uldir",
      "frozen": true,
      "encounters": [
        {
          "id": 2144,
          "name": "Taloc",
          "npcID": 137119
        },
        {
          "id": 2141,
          "name": "MOTHER",
          "npcID": 135452
        },
        {
          "id": 2128,
          "name": "Fetid Devourer",
          "npcID": 133298
        },
        {
          "id": 2136,
          "name": "Zek'voz",
          "npcID": 134445
        },
        {
          "id": 2134,
          "name": "Vectis",
          "npcID": 134442
        },
        {
          "id": 2145,
          "name": "Zul",
          "npcID": 138967
        },
        {
          "id": 2135,
          "name": "Mythrax",
          "npcID": 134546
        },
        {
          "id": 2122,
          "name": "G'huun",
          "npcID": 132998
        }
      ]
    },
    
    {
      "id": 21,
      "name": "Battle of Dazar'alor",
      "frozen": false,
      "encounters": [
        {
          "id": 2265,
          "name": "Champion of the Light",
          "npcID": 144680
        },
        {
          "id": 2266,
          "name": "Jadefire Masters",
          "npcID": 144690
        },
        {
          "id": 2263,
          "name": "Grong",
          "npcID": 144637
        },
        {
          "id": 2271,
          "name": "Opulence",
          "npcID": 145261
        },
        {
          "id": 2268,
          "name": "Conclave of the Chosen",
          "npcID": 144747
        },
        {
          "id": 2272,
          "name": "King Rastakhan",
          "npcID": 145616
        },
        {
          "id": 2276,
          "name": "Mekkatorque",
          "npcID": 144796
        },
        {
          "id": 2280,
          "name": "Stormwall Blockade",
          "npcID": 146256
        },
        {
          "id": 2281,
          "name": "Lady Jaina Proudmoore",
          "npcID": 146416
        }
      ]
    },
    {
      "id": 22,
      "name": "Crucible of Storms",
      "frozen": false,
      "encounters": [
        {
          "id": 2269,
          "name": "The Restless Cabal",
          "npcID": 146497
        },
        {
          "id": 2273,
          "name": "Uu'nat, Harbinger of the Void",
          "npcID": 145371
        }
      ]
    },
    {
      "id": 23,
      "name": "The Eternal Palace",
      "frozen": true,
      "encounters": [
        {
          "id": 2298,
          "name": "Abyssal Commander Sivarra",
          "npcID": 145371
        },
        {
          "id": 2305,
          "name": "Radiance of Azshara",
          "npcID": 145371
        },
        {
          "id": 2289,
          "name": "Blackwater Behemoth",
          "npcID": 145371
        },
        {
          "id": 2304,
          "name": "Lady Ashvane",
          "npcID": 145371
        },
        {
          "id": 2303,
          "name": "Orgozoa",
          "npcID": 145371
        },
        {
          "id": 2311,
          "name": "The Queen's Court",
          "npcID": 145371
        },
        {
          "id": 2293,
          "name": "Za'qul, Harbinger of Ny'alotha",
          "npcID": 145371
        },
        {
          "id": 2299,
          "name": "Queen Azshara",
          "npcID": 145371
        }
      ]
    }
        ]
    }
},
  components: {
    BarElement: BarElement
  },

   methods: { 
     transmitEncounterUpdate: function(payload) {
       this.$emit("transmitEncounterUpdate", {
        zoneId: payload.y,
        encounterId: payload.b,
        zoneName: payload.x,
        encounterName: payload.a
      }); 
    }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
/* 
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
} */





</style>
