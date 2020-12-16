<template>
  <div class="arrow-button">
    <b-row>
        <b-col><h4>{{text}}</h4></b-col>
        <b-col><div class="arrow-col"></div></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    name: "ArrowButton",
    props: {
        text: String,
    }
}
</script>

<style>
.arrow-button {
    background-color: #696969;
    border-bottom: inset 1px #696969;
    cursor: pointer;
    transition: 0.2s all;
}

.arrow-button .row {
    height: 4rem;
    align-content: center;
}

.arrow-button h4 {
    text-align: left;
    color: #ffffff;
    padding-left: 1rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    margin: 0;
}

.arrow-button .arrow-col {
    width: 50%;
    height: 0.5rem;
    border-bottom: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
    transform: skew(45deg);
    margin-top: 3rem;
    margin-left: 40%;
}

.arrow-button:hover {
    border-bottom: inset 1px #000000;
    background-color: #ffffff;
}

.arrow-button:hover h4 {
    color: unset;
}

.arrow-button:hover .arrow-col {
    border-bottom: 1px solid none;
    border-right: 1px solid none;
}
</style>
