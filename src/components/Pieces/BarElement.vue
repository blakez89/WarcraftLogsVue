<template>
  <li class="menu-item">
    <button class="accord" @click="toggle">{{arrayEle.name}} {{shouldShow ? '-' : '+' }}</button>

    
      <ul class="accord-content" v-show="shouldShow">
        <li
          class="accord-content-item"
          v-for="(child,index) in arraySubEle"
          :key="index"
          @click="transmitChildInfo(arrayEle.name,arrayEle.id,child.name,child.id)"
        >{{child.name ? child.name : child}}</li>
      </ul>
    
  </li>
</template>

<script>
export default {
  name: "BarElement",
  props: ["arrayEle", "arraySubEle"],
  data: function() {
    return {
      shouldShow: false
    };
  },
  methods: {
    toggle: function() {
      this.shouldShow = !this.shouldShow;
    },
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

<style scoped>
button.accord {
  width: 100%;
  background-color:  #ddd;
  border: #ddd;
  outline: none;
  text-align: left;
  padding: 8px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s linear;
}
button.accord:hover {
  background-color:  whitesmoke;
}
.accord-content {
  background-color:rgb(18, 7, 48);
  padding: 0 20px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.accord-content-item:hover {
 text-decoration: underline;
 cursor: pointer;
}
</style>