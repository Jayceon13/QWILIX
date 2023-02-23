<template>
  <div class="block-home" @click="$router.push ('/')" v-if="$route.path !== '/'">
    <img src="/icons/Q.svg">
  </div>
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
         v-if="showBurgerMenu"
         @click="blockBurgerMenu">
      <div @click="() => {$router.push ('about'); blockBurgerMenu()}"
           class="block-about"
           style="cursor: pointer"
      >
        ABOUT US
      </div>
      <div @click="() => {$router.push ('projects'); blockBurgerMenu()}"
           class="block-examples">
        Projects
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
  <div class="block-background" v-if="showBurgerMenu" @click="blockBurgerMenu">
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
      showBurgerMenu,
      blockBurgerMenu() {
        showBurgerMenu.value = !showBurgerMenu.value;
      },
    }
  }
}
</script>

<style scoped>
.block-home{
  position: fixed;
  display: flex;
}
.block-home img:hover{
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 30px;
  transition: 1s;
}
.block-background{
  position: fixed;
  top: 0;
  left: 0;
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
  position: absolute;
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
    width: 80%;
    background: white;
    border: black 1px solid;
    position: absolute;
    font-weight: bold;
    display: flex;
    align-items: self-end;
    padding: 80px;
    font-size: 30px;
  }
  @media only screen and (max-height: 500px) {
    .block-about {
      padding: 60px;
    }
  }
  .block-about:hover{
    background: black;
    transition: 0.3s ease;
    color: white;
  }
  .block-examples{
    height: 66%;
    width: 50%;
    background: white;
    border: black 1px solid;
    position: absolute;
    font-weight: bold;
    display: flex;
    align-items: self-end;
    padding: 80px;
    font-size: 25px;
  }
  @media only screen and (max-height: 500px) {
    .block-examples {
      padding: 40px;
    }
  }
  .block-examples:hover{
    background: black;
    transition: 0.3s ease;
    color: white;
  }
  .block-contacts{
    height: 33%;
    width: 25%;
    background: white;
    border: black 1px solid;
    position: absolute;
    font-weight: bold;
    display: flex;
    align-items: self-end;
    padding: 80px;
    font-size: 20px;
  }
  @media only screen and (max-height: 500px) {
    .block-contacts {
      padding: 20px;
    }
  }
  .block-contacts:hover{
    background: black;
    transition: 0.3s ease;
    color: white;
  }
  .block-home{
    width: 60px;
    height: 80px;
    z-index: 999;
    margin: 30px;
    cursor: pointer;
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
