<template>
  <div class="mobile-nav">
      <b-row class="mobile-nav-row" v-for="(page, index) in router" v-bind:key="page.path" v-on:click="newPage(index)" v-on:mouseover="overAction" v-on:mouseleave="leaveAction">
        <b-col class="mobile-nav-menu">{{page.name}}</b-col>
      </b-row>
  </div>
</template>

<script>
import routers from '../../router.js'
import Util from '../../Util.vue'

export default {
  data: function() {
    return {
      router: routers.options.routes.slice(0, 7)
    }
  },
  mounted: function() {
    this.setCurrentPageColStyle();
  },
  methods: {
    overAction: function(el) {
      if(el.target.children.length != 0){
        this.setColStyle(el.target);
      }
    },
    leaveAction: function(el) {
      if(el.target.innerText !== this.$route.name){
        this.clearColStyle(el.target);
      }
    },
    setCurrentPageColStyle: function() {
      var cols = this.$el.children;
      cols.forEach(element => {
        if(element.innerText == this.$route.name){
          this.setColStyle(element)
        }
      });
    },
    clearColStyle: function(el) {
      el.setAttribute(
        'style',
        'background-color:steelblue;'
      )
    },
    setColStyle: function(el) {
      el.setAttribute(
        'style',
        'background-color: #08088A;'
      )
    }
  },
  watch: {
    '$route': function () {
      var cols = this.$el.children;
      cols.forEach(element => {
        this.clearColStyle(element)
      });
      this.setCurrentPageColStyle();
    }
  },
  mixins: [Util]
}
</script>

<style>
.mobile-nav{
  width: 100%;
  height: 100%;
  background-color: #4682b4;
  color: #ffffff;
  opacity: 0.9;
}

.mobile-nav-row
{
  height: 10%;
  width: 100%;
  margin: 0 !important;
  cursor: pointer;
}

.mobile-nav-menu
{
  text-align: center;
  margin: auto;
}
</style>
