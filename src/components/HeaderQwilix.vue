<template>
  <div class="header-block">
    <div :class= "!showBurgerMenu? 'hamburger hamburger--arrow-r' : 'hamburger is-active hamburger--arrow-r'" @click="blockBurgerMenu">
      <div class="hamburger-box">
        <div class="hamburger-inner" >
        </div>
      </div>
    </div>
  </div>
  <transition name="menu">
    <div class="block-menu"
         v-if="showBurgerMenu">
      <div class="block-about">

      </div>
      <div class="block-examples">

      </div>
      <div class="block-contacts">

      </div>
    </div>
  </transition>
  <transition name="bg-block">
  <div class="block-background" v-if="showBurgerMenu">
  </div>
  </transition>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "HeaderQwilix",
  setup () {
    const showBurgerMenu = ref(false)
    return {
      drawer: ref(false),
      showBurgerMenu,
      blockBurgerMenu() {
        showBurgerMenu.value = !showBurgerMenu.value;
      },
    }
  }
}
</script>

<style scoped>
.block-background{
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
}
.bg-block-leave-active,
.bg-block-enter-active {
  transition: opacity 1s ease-in-out;
}
.bg-block-enter-from,
.bg-block-leave-to {
  opacity: 0;
}
.menu-leave-active {
  z-index: 999;
  animation: slide-up 1s ease-in-out;
}
@keyframes slide-up {
  0%{
    transform: translate3d(0);
  }
  100%{
    transform: translate3d(100%, -100%, -1000px);
  }
}
.menu-enter-active{
  z-index: 999;
  animation: slide-down 1s ease-in-out;
}
@keyframes slide-down {
  0%{
    transform: translate3d(100%, -100%, -1000px);
  }
  100%{
    transform: translate3d(0);
  }
}
.block-menu{
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99;
}
.header-block{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 50px;
}
@media screen and (min-width: 780px) {
  .header-block{
    width: 70px;
    background: lightgray;
    display: flex;
    height: 100vh;
    float: right;
    align-items: center;
    position: fixed;
    right: 0;
    z-index: 999;
  }
  .hamburger{
    transform: rotate(-90deg);
  }
  .block-menu{
    display: flex;
    justify-content: flex-end;
    padding-right: 70px;
  }
  .block-about{
    cursor: pointer;
    height: 100%;
    width: 700px;
    background: white;
    border: black 1px solid;
    position: absolute;
  }
  .block-about:hover{
    background: black;
    transition: 0.3s ease;
  }
  .block-examples{
    height: 450px;
    width: 450px;
    background: white;
    border: black 1px solid;
    position: absolute;
  }
  .block-examples:hover{
    background: black;
    transition: 0.3s ease;
  }
  .block-contacts{
    height: 250px;
    width: 250px;
    background: white;
    border: black 1px solid;
    position: absolute;
  }
  .block-contacts:hover{
    background: black;
    transition: 0.3s ease;
  }
}
.hamburger {
  z-index: 9999;
  position: fixed;
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible; }
.hamburger:hover {
  opacity: 0.7; }
.hamburger.is-active:hover {
  opacity: 0.7; }
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #000; }

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative; }

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; }
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease; }
.hamburger-inner::before, .hamburger-inner::after {
  content: "";
  display: block; }
.hamburger-inner::before {
  top: -10px; }
.hamburger-inner::after {
  bottom: -10px; }
.hamburger--arrow-r.is-active .hamburger-inner::before {
  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }

.hamburger--arrow-r.is-active .hamburger-inner::after {
  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }
</style>
