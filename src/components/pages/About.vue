<template>
  <div class="about">
    <PageLabel text="ABOUT"></PageLabel>
    <Spacer></Spacer>
  </div>
</template>

<script>
import Spacer from '../parts/Spacer.vue'
import PageLabel from '../parts/PageLabel.vue'
import anime from 'animejs/lib/anime.min.js'

export default {
  name: "About",
  components: {
    Spacer,
    PageLabel,
  },
  mounted: function() {
    anime({
    });
  }
}
</script>

<style>
.company .company-text-logo, .company .company-logo {
  text-align: center;
}

.company .company-text-logo img, .company .company-logo img {
  max-width: 100%;
}

.company .company-text-logo img {
  filter: drop-shadow(5px 5px 5px rgba(55, 55, 55, 0.8));
}
</style>
