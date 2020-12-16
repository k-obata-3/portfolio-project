<template>
  <div class="title-label">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: "TitleLabel",
  props: {
    title: String,
  }
}
</script>

<style>
.title-label h2 {
    padding: 1rem 0;
}
</style>
