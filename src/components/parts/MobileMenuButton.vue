<template>
  <div class="mobile-menu-button">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'MobileMenuButton',
}
</script>

<style>
.mobile-menu-button, .mobile-menu-button span {
  display: inline-block;
  transition: all 0.2s;
  box-sizing: border-box;
}

.mobile-menu-button {
  position: relative;
  width: 50px;
  height: 44px;
  cursor: pointer;
  margin-left: -10px;
}

.mobile-menu-button span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #000000;
  border-radius: 4px;
}

.mobile-menu-button span:nth-of-type(1) {
  top: 5px;
}

.mobile-menu-button span:nth-of-type(2) {
  top: 20px;
}

.mobile-menu-button span:nth-of-type(3) {
  bottom: 5px;
}

.mobile-menu-button::after {
  position: absolute;
  left: 0;
  bottom: -25px;
  display: block;
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  transition: all .4s;
}

/* active */
.mobile-menu-button.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(-45deg);
  transform: translateY(15px) rotate(-45deg);
}

.mobile-menu-button.active span:nth-of-type(2) {
  opacity: 0;
}

.mobile-menu-button.active span:nth-of-type(3) {
  -webkit-transform: translateY(-20px) rotate(45deg);
  transform: translateY(-15px) rotate(45deg);
}
</style>
