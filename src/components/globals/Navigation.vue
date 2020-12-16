<template>
  <div class="nav-menu">
      <b-row class="logo">
        <b-col cols="3" class="name" v-on:click="newPage(0)"></b-col>
      </b-row>
      <b-row class="menu-row">
        <b-col class="menu-col" v-for="(page, index) in router" v-bind:key="page.path" v-on:click="newPage(index)" v-on:mouseover="overAction" v-on:mouseleave="leaveAction">
          {{page.name}}
        </b-col>
      </b-row>
  </div>
</template>

<script>
import routers from '../../router.js'
import Util from '../../Util.vue'

export default {
  components: {
  },
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
      this.setColStyle(el.target);
    },
    leaveAction: function(el) {
      if(el.target.innerText !== this.$route.name){
        this.clearColStyle(el.target);
      }
    },
    setCurrentPageColStyle: function() {
      var cols = this.$el.children[1].children;
      cols.forEach(element => {
        if(element.innerText == this.$route.name){
          this.setColStyle(element)
        }
      });
    },
    clearColStyle: function(el) {
      el.setAttribute(
        'style',
        'border-bottom: none;'
      )
    },
    setColStyle: function(el) {
      el.setAttribute(
        'style',
        'border-bottom: inset 5px #08088A;'
      )
    }
  },
  watch: {
    '$route': function () {
      var cols = this.$el.children[1].children;
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
.menu-row
{
  margin: 0 !important;
  cursor: pointer;
  background-color: #ffffff;
  border-bottom: inset 1px #000000;
}

.menu-col
{
  text-align: center;
  height: 50px;
  padding-top: 10px;
  cursor: pointer;
  font-weight: 600;
}

.logo
{
  margin-right: 0 !important;
  margin-left: 0 !important;
  background-color: #0B0B3B;
}

.name{
  color: #ffffff;
  font-size: 2em;
  font-weight: bold;
  cursor: pointer;
}

.name img{
  max-height: 50px;
  padding-right: 10px;
}

.name .company-logo {
  display: inline-block;
}

.menu
{
  text-align: center;
  margin: auto;
}

</style>
