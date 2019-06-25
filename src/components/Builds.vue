<template>
  <div id="builds">
    <NavBar :theStyle="thename"/>
    <h1>Builds </h1>
  </div>
</template>

<script>


import NavBar from "./Bars/NavBar.vue"

export default {
  name: "Builds",
  components: {
    NavBar: NavBar
  },
  data () {
      return {
      thename: 'Builds'  
    }
  }
}
</script>

<style>




</style>
