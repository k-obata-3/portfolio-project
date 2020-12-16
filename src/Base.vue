<template>
  <div id="app">
    <div v-show="isMobile">
      <b-row id="mobile-header">
        <b-col cols="2" v-on:click="menuClick">
          <MobileMenuButton v-bind:class="{active: show}"></MobileMenuButton>
        </b-col>
      </b-row>
      <transition name="fade">
        <MobileNavigation  class="mobile-menu" v-if="show"></MobileNavigation>
      </transition>
    </div>
    <Navigation class="header" v-if="!isMobile"></Navigation>
    <Template class="main" v-bind:class="{active: isMobile}"></Template>
  </div>
</template>

<script>
import Navigation from './components/globals/Navigation.vue'
import MobileNavigation from './components/globals/MobileNavigation.vue'
import Template from './components/globals/Template.vue'
import MobileMenuButton from './components/parts/MobileMenuButton.vue'
import Util from './Util.vue'

export default {
  name: 'Base',
  components: {
    Navigation,
    MobileNavigation,
    Template,
    MobileMenuButton,
  },
  data: function() {
    return {
      show :true,
      isMobile: false,
    }
  },
  methods: {
    menuClick() {
      this.show = !this.show;
    },
    handleResize: function() {
      if (window.innerWidth <= 1023) {
        this.isMobile = true
        this.show = false;
      }
      else
      {
        this.isMobile = false
        this.show = false;
      }
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  watch: {
    '$route': function () {
      this.show = this.isMobile == false ? true : false;
    }
  },
  mixins: [Util]
}
</script>

<style>
/* PCサイズ用ナビゲーションメニュー表示エリア */
.header {
  position: fixed;
  top: 0;
  right: 0;
	left:0;
  width: 100%;
  max-height: 100px;
  box-shadow: 0px 1px 1px black;
  z-index: 999;
}

/* メインコンテンツ表示エリア */
.main {
  position: absolute;
  top: 100px;
	right:0;
  left: 0;
  width: 100%;
  z-index: 997;
}

.main .router-view {
  min-height: 100vh;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

/* Mobileサイズ header非表示に対応させるためのメインコンテンツ表示エリア位置調整 */
.main.active {
  top: 50px;
}

/* Mobileサイズ用メニュー */
.mobile-menu {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  z-index: 998;
}

/* Mobileサイズ用ヘッダ */
#mobile-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 50px;
  margin-left: 0 !important;
  margin-right: 0 !important;
  border-bottom: inset 1px #000000;
  background-color: #ffffff;
  z-index: 999;
}

/* Mobileサイズ用ヘッダ ロゴ */
#mobile-header .text-logo img {
  max-width: 100%;
  max-height: 50px;
  padding: 5px 10px;
  cursor: pointer;
}

/* スクロールバー非表示 */
::-webkit-scrollbar {
  display: none;
  -webkit-appearance: none;
}

/* 以降 Mobileサイズ用 */

/* メニュー表示時アニメーション */
.fade-enter-active, .fade-leave-active {
  transform: translate(0px, 0px); 
  transition: transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

/* メニュー非表示時アニメーション */
.fade-enter, .fade-leave-to {
  transform: translateY(-100vh) translateY(0px);
}
</style>

<style lang="scss">
@import './assets/styles/custom.scss';

</style>