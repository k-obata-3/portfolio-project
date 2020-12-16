<template>
  <div class="template">
    <RouterView class="router-view"></RouterView>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'Template',
  components: {
    Footer,
  }
}
</script>

<style>
.footer{
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
