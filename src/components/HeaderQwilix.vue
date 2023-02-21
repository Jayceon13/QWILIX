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
      <div @click="() => {$router.push ('about'); blockBurgerMenu()}"
           class="block-about"
           style="cursor: pointer"
      >
        ABOUT US
      </div>
      <div @click="() => {$router.push ('examples'); blockBurgerMenu()}"
           class="block-examples">
        EXAMPLES
      </div>
      <div @click="() => {$router.push ('contacts'); blockBurgerMenu() }"
           class="block-contacts"
           style="cursor: pointer"
      >
        CONTACTS
      </div>
    </div>
  </transition>
  <transition name="bg-block">
  <div class="block-background" v-if="showBurgerMenu">
  </div>
  </transition>
  <transition name="router-animation">
    <router-view></router-view>
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
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
}
.router-animation-leave-active,
.router-animation-enter-active{
  transition: opacity 0.5s ease-in-out;
}
.bg-block-leave-active,
.bg-block-enter-active {
  transition: opacity 0.5s ease-in-out;
}
.bg-block-enter-from,
.bg-block-leave-to {
  opacity: 0;
}
.menu-leave-active {
  z-index: 999;
  animation: slide-up 0.5s ease-in-out;
}
@keyframes slide-up {
  0%{
    transform: translate(0, 0);
  }
  100%{
    transform: translate(100%, -200%);
  }
}
.menu-enter-active{
  z-index: 999;
  animation: slide-down 0.5s ease-in-out;
}
@keyframes slide-down {
  0%{
    transform: translate(100%, -200%);
  }
  100%{
    transform: translate(0, 0);
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
    height: 100vh;
    width: 700px;
    background: white;
    border: black 1px solid;
    position: absolute;
    font-weight: bold;
    display: flex;
    align-items: self-end;
    padding: 80px;
    font-size: 30px;
  }
  .block-about:hover{
    background: black;
    transition: 0.3s ease;
    color: white;
  }
  .block-examples{
    height: 450px;
    width: 450px;
    background: white;
    border: black 1px solid;
    position: absolute;
    font-weight: bold;
    display: flex;
    align-items: self-end;
    padding: 80px;
    font-size: 25px;
  }
  .block-examples:hover{
    background: black;
    transition: 0.3s ease;
    color: white;
  }
  .block-contacts{
    height: 250px;
    width: 250px;
    background: white;
    border: black 1px solid;
    position: absolute;
    font-weight: bold;
    display: flex;
    align-items: self-end;
    padding: 80px;
    font-size: 20px;
  }
  .block-contacts:hover{
    background: black;
    transition: 0.3s ease;
    color: white;
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
