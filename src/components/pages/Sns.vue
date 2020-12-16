<template>
  <div class="sns">
    <PageLabel text="SNS"></PageLabel>
    <Spacer></Spacer>
  </div>
</template>

<script>
import PageLabel from '../parts/PageLabel.vue'
import Spacer from '../parts/Spacer.vue'

export default {
  name: "Sns",
  components: {
    PageLabel,
    Spacer,
  }
}
</script>

<style>
.recruit .recruit-contact-button {
  text-align: center;
}
</style>
