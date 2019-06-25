<template>
  <div class="wowtable">
    <table class="container">
      <thead>
        <th>Rank</th>
        <th>Character Name</th>
        <th>Guild</th>
        <th>Server</th>
        <th>Region</th>
<!--         <th>Talents</th>
        <th>Azerite Powers</th>  -->
      </thead>
      <tbody>
        <tr v-for="(rank,key) in pagnated" :key="key">
          <td>{{( key+1)+((currentPage-1)*pageSize)}}</td>
          <td>{{ rank.title }}</td>
          <td>{{ rank.value }}</td>
          <td>{{ rank.server }}</td>
          <td>{{ rank.region }}</td>

<!--           <td>
            <div class="unique-gear-container">
              <div v-for="(talent,key) in rank.talents" :key="key" class="talent">
                {{talent}}
                <span class="tooltiptext">{{talent}}</span>
              </div>
            </div>
          </td>
          <td>
            <div class="apclass" v-for="(ap,key) in rank.azeritepowers" :key="key">{{ap}}</div>
          </td> 
 -->

        </tr>
      </tbody>
    </table>

<button @click="prevPage">Previous</button> 
<button @click="nextPage">Next</button>
 
  </div>
</template>

<script>
export default {
  //make current page into an array.... have a v-for loop generate the buttons?
  // ask user how many results they want to display per page?
  // allow user to log in and select fight preferences... ie they only want to be warlock or only want to see newest raids.
  name: "WoWTable",
  props: ['rankings'],
  data: function() {
    return {
    pageSize: 20,
    currentPage: 1,
    }
  },
  created: function (){
    this.pagnated
  },
  
  computed: {
    pagnated: function () {
      return this.rankings.filter((row,index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      })
    }
  },
  methods:{
    nextPage:function() {
  if((this.currentPage*this.pageSize) < this.rankings.length) this.currentPage++;
},
prevPage:function() {
  if(this.currentPage > 1) this.currentPage--;
}

  }



};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>




.container {
    text-align: center;
    display: table;
    width: 800px;
    height: 800px;

}

.container td {
    width: 160px;
    height: 40px;
  
}


.tiny-icon {
    display: block;
    width: 32px;
    height: 32px;
    border: 1px solid #555555;
    margin: 5px;
}

.talent .tooltiptext {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    position: absolute;
    z-index: 1;
}

.talent:hover .tooltiptext {
    visibility: visible;
}

.container tr {
    transition: background-color 0.2s linear;
    
}

.container th {
    transition: color 0.2s linear;
    
}


.container tr:hover {
    background-color: rgb(18, 7, 48) !important;

}

.container th:hover {
    color: rgb(18, 7, 48) !important;

}

.apclass:hover {
    color: whitesmoke !important;
}

.container tr:nth-child(odd) {
    background-color: rgb(38, 40, 46);
}

/* Background-color of the even rows */
.container tr:nth-child(even) {
    background-color: rgb(7, 8, 10);
}

</style>
