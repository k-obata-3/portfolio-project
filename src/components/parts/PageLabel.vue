<template>
  <div class="page-label">
    <div class="rect">
        <h1>{{text}}</h1>
    </div>
  </div>
</template>

<script>
export default {
    name: "PageLabel",
    props: {
        text: String,
    }
}
</script>

<style>
.page-label {
    height: 80px;
    margin-top: 25px;
    padding-bottom: calc(25px + 40px + 2rem);
    background-color: #ffffff;
}

.rect {
    position: relative;
    padding: 20px;
    /* border: solid 1px black; */
    margin-bottom: auto;
    margin-top: auto;
    z-index: 1; 
}

.page-label::before {
	position: absolute;
	content: "";
	width:80px;
	height: 80px;
    background-color: #293E97;
    border: solid 1px #0B0B3B;
    margin-left: -0.3rem;
    margin-top: -0.3rem;
    z-index: -1;
}
</style>
