<template>
  <div class="contact">
    <PageLabel text="CONTACT"></PageLabel>
    <Spacer></Spacer>
  </div>
</template>

<script>
import PageLabel from '../parts/PageLabel.vue'
import Spacer from '../parts/Spacer.vue'
import anime from 'animejs/lib/anime.min.js'

export default {
  name: "Contact",
  components: {
    Spacer,
    PageLabel,
  },
  mounted: function(){
    anime({
    });
  }
}
</script>

<style>

</style>
