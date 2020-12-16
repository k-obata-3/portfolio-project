<template>
  <div class="top">
    <div class="arrow-button-area fade-in" v-scroll="handleScroll">
      <div class="arrow-div" v-on:click="newPage(4)">
        <ArrowButton text="ブログ"></ArrowButton>
      </div>
      <div class="arrow-div" v-on:click="newPage(3)">
        <ArrowButton text="採用情報"></ArrowButton>
      </div>
    </div>
    <Spacer></Spacer>
    <Spacer></Spacer>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.min.js'

import Spacer from '../parts/Spacer.vue'
import ArrowButton from '../parts/ArrowButton.vue'
import Util from '../../Util.vue'

export default {
  name: 'Top',
  components: {
    Spacer,
    ArrowButton,
  },
  mixins: [Util],
  mounted: function(){
    anime({
      targets: '.top-img',
      duration: 2500,
      opacity: 1,
      easing: 'easeInOutQuad'
    });
    // NEWS要素を表示させておく
    var elNews = this.$el.getElementsByClassName('top-news fade-in');
    elNews.forEach(el => {
      el.setAttribute(
        'style',
        'opacity: 1; transform: translate3d(0, -100px, 0)'
      )
    });
    // Facebook要素を表示させておく
    var elFb = this.$el.getElementsByClassName('fb-page fade-in');
    elFb.forEach(el => {
      el.setAttribute(
        'style',
        'opacity: 1; transform: translate3d(0, -100px, 0)'
      )
    });
  }
}
</script>

<style>
.top {
  margin-bottom: -100px; /* スクロール調整 */
}

.top img {
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
}

.top .top-news {
  display: inline-block;
  max-height: 500px;
  min-width: 70%;
  background-color: rgba(255,255,255,0);
  padding-left: 2rem;
}

.top .fb-page {
  display: inline-block;
  min-width: 30%;
  text-align: center;
}

.top .fb-page iframe{
  margin-top: 100px;
}

.top .top-menu-card > .menu-card {
  max-width: 70%;
  margin-right: auto;
  margin-left: auto;
}

.top .arrow-button-area .arrow-div {
  display: inline-block;
  width: 50%;
  padding: 0 1rem;
}

.top .top-contact-button {
  text-align: center;
}

/* Mobileサイズ用 */
@media screen and (max-width:1023px) {
  .top .top-news {
    display: block;
    margin-top: 100px;
    min-width: 100%;
    padding: 0;
  }

  .top .fb-page {
    display: none;
  }

  .top .top-menu-card > .menu-card {
    max-width: 100%;
  }

  .top .arrow-button-area .arrow-div {
    display: block;
    width: 100%;
    padding: 1rem 0;
  }
}
</style>
