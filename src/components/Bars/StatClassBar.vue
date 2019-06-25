<template>
  <div class="statclassbar">

<nav  class="site-navigation" role="navigation">
  
  <button class="accordion" @click="toggle">Select Class</button>
   
   <div v-if="shouldShow">
      <StatBarElement
  v-for="(item,index) in wowClasses"
  v-bind:arrayEle="item"
  v-bind:arraySubEle="item.specs"
  v-bind:key="index"
  @listenToChild="transmitWowClass"
  
  >
  </StatBarElement>
  </div>

</nav>

  </div>
</template>

<script>

import StatBarElement from '../Pieces/StatBarElement.vue'

export default {
  name: "StatClassBar",
  props: {
    msg: String
  },
  data() {
    return {
      shouldShow: true,
      wowClasses: [
        {
          id: 1,
          name: "Death Knight",
          specs: [
            {
              id: 1,
              name: "Blood"
            },
            {
              id: 2,
              name: "Frost"
            },
            {
              id: 3,
              name: "Unholy"
            }
          ]
        },
        {
          id: 2,
          name: "Druid",
          specs: [
            {
              id: 1,
              name: "Balance"
            },
            {
              id: 2,
              name: "Feral"
            },
            {
              id: 3,
              name: "Guardian"
            },
            {
              id: 4,
              name: "Restoration"
            }
          ]
        },
        {
          id: 3,
          name: "Hunter",
          specs: [
            {
              id: 1,
              name: "Beast Mastery"
            },
            {
              id: 2,
              name: "Marksmanship"
            },
            {
              id: 3,
              name: "Survival"
            }
          ]
        },
        {
          id: 4,
          name: "Mage",
          specs: [
            {
              id: 1,
              name: "Arcane"
            },
            {
              id: 2,
              name: "Fire"
            },
            {
              id: 3,
              name: "Frost"
            }
          ]
        },
        {
          id: 5,
          name: "Monk",
          specs: [
            {
              id: 1,
              name: "Brewmaster"
            },
            {
              id: 2,
              name: "Mistweaver"
            },
            {
              id: 3,
              name: "Windwalker"
            }
          ]
        },
        {
          id: 6,
          name: "Paladin",
          specs: [
            {
              id: 1,
              name: "Holy"
            },
            {
              id: 2,
              name: "Protection"
            },
            {
              id: 3,
              name: "Retribution"
            }
          ]
        },
        {
          id: 7,
          name: "Priest",
          specs: [
            {
              id: 1,
              name: "Discipline"
            },
            {
              id: 2,
              name: "Holy"
            },
            {
              id: 3,
              name: "Shadow"
            }
          ]
        },
        {
          id: 8,
          name: "Rogue",
          specs: [
            {
              id: 1,
              name: "Assassination"
            },
            {
              id: 2,
              name: "Combat"
            },
            {
              id: 3,
              name: "Subtlety"
            },
            {
              id: 4,
              name: "Outlaw"
            }
          ]
        },
        {
          id: 9,
          name: "Shaman",
          specs: [
            {
              id: 1,
              name: "Elemental"
            },
            {
              id: 2,
              name: "Enhancement"
            },
            {
              id: 3,
              name: "Restoration"
            }
          ]
        },
        {
          id: 10,
          name: "Warlock",
          specs: [
            {
              id: 1,
              name: "Affliction"
            },
            {
              id: 2,
              name: "Demonology"
            },
            {
              id: 3,
              name: "Destruction"
            }
          ]
        },
        {
          id: 11,
          name: "Warrior",
          specs: [
            {
              id: 1,
              name: "Arms"
            },
            {
              id: 2,
              name: "Fury"
            },
            {
              id: 3,
              name: "Protection"
            },
            {
              id: 4,
              name: "Gladiator"
            }
          ]
        },
        {
          id: 12,
          name: "Demon Hunter",
          specs: [
            {
              id: 1,
              name: "Havoc"
            },
            {
              id: 2,
              name: "Vengeance"
            }
          ]
        }
      ]
    };
  },
    components: {
    StatBarElement: StatBarElement
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
}


 
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
  background-color:rgb(18, 7, 48);
  padding: 5px 2px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  
  overflow: hidden;
  
  position: relative;
  
 
}

.accordion-content-item {
 
}

.accordion-content-item:hover {
 text-decoration: underline;
 cursor: pointer;
 
} 


</style>
