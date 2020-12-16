<template>
  <div class="skills">
    <PageLabel text="SKILLS"></PageLabel>
    <Spacer></Spacer>
  </div>
</template>

<script>
import PageLabel from '../parts/PageLabel.vue'
import Spacer from '../parts/Spacer.vue'
import anime from 'animejs/lib/anime.min.js'

export default {
  name: "Skills",
  components: {
    PageLabel,
    Spacer
  },
  data: function() {
    return {
    }
  },
  mounted: function() {
    anime({
    });
  },
  updated: function() {
    if(!this.isShowOverlay){
      scrollTo(0, 0);
    }
  },
  methods: {
    OpenModal(imgPath) {
      this.isShowOverlay = true;
      this.modalImg = imgPath;
    },
    CloseModal() {
      this.isShowOverlay = false;
      this.modalImg = null;
    },
  }
}
</script>

<style>
.line-stamp .creator-name {
  padding-left: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  font-weight: bold;
  font-size: large;
  color: #333333;
}

.line-stamp .overlay {
  z-index: 1;
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100% - 100px);
  background-color: rgba(255,255,255,1.0);
  display: flex;
  align-items: center;
  justify-content: center;
}

.line-stamp .modalImg {
  height: 100%;
  max-width: 80%;
  overflow: scroll;
  background-color: #ffffff;
  text-align: center;
}

.line-stamp .modalImg img {
  max-width: 100%;
}

.line-stamp .stamp-col {
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: 1rem;
}

.line-stamp .stamp-col img{
  max-height: 250px;
  width: 100%;
  object-fit: cover;
  object-position:50% 0%;
}

.line-stamp .stamp-col > div{
  transition: 0.2s;
  margin-top: 1rem;
  cursor: pointer;
}

.line-stamp .stamp-col > div:hover{
  transform: scale(1.1, 1.1);
}

.line-stamp .img-note {
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: dashed 1px #000000;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.5s;
}

.close-icon {
  position: absolute;
  top: 2rem;
  margin-left: -1rem;
  cursor: pointer;
}

.close-icon:hover {
  opacity: 0.5;
}

/* Mobileサイズ用 */
@media screen and (max-width:1023px) {
  .line-stamp .stamp-row {
    align-items: center;
    justify-content: center;
  }

  .line-stamp .stamp-row .col-4 {
    max-width: 100%;
  }

  .line-stamp .overlay {
    top: 50px;
    height: calc(100% - 50px);
    width: 100%;
  }
}
</style>
