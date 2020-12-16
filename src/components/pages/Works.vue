<template>
  <div class="works">
    <PageLabel text="WORKS"></PageLabel>
    <Spacer></Spacer>
    <Spacer></Spacer>
  </div>
</template>

<script>
import PageLabel from '../parts/PageLabel.vue'
import Spacer from '../parts/Spacer.vue'
import anime from 'animejs/lib/anime.min.js'

export default {
  name: "Works",
  components: {
    PageLabel,
    Spacer,
  },
  mounted: function(){
    anime({
    });
  }
}
</script>

<style>

</style>
