<template>
  <div class="preloader" :class="{ 'hidden': isPreloaderHidden }">
    <div class="preloader-logo-1">
    </div>
    <div class="preloader-logo-2">
      <img class="img-2" src="/img/QWILIX.svg">
    </div>
    <div class="preloader-logo-3">
    </div>
  </div>
</template>

<style>
.preloader {
  font-family: 'PT Sans', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
}
.preloader-logo-1,
.preloader-logo-2,
.preloader-logo-3{
  transform: scale(1);
  background: black;
  height: 100%;
  color: white;
  width: 33.3%;
  position: relative;
  overflow: hidden;
  display: flex;
}
.preloader-logo-1{
  animation: slide-up-1 1.2s ease-in-out forwards;
}
.preloader-logo-2{
  display: flex;
  justify-content: center;
  animation: slide-up-2 1.5s ease-in-out forwards;
}
.preloader-logo-3{
  animation: slide-up-3 1.7s ease-in-out forwards;
}
.img-2 {
  width: 300px;
}

@media screen and (max-width: 500px){
  .img-2{
    width: 100px;
  }
}
@keyframes slide-up-1 {
  0%{
    transform: translateY(0%);
  }
  50%{
    transform: translateY(0%);
  }
  100%{
    transform: translateY(-100%);
  }
}
@keyframes slide-up-2 {
  0%{
    transform: translateY(0%);
  }
  50%{
    transform: translateY(0%);
  }
  100%{
    transform: translateY(-100%);
  }
}
@keyframes slide-up-3 {
  0%{
    transform: translateY(0%);
  }
  50%{
    transform: translateY(0%);
  }
  100%{
    transform: translateY(-100%);
  }
}

/* Добавим класс для скрытия preloader */
.preloader.hidden {
  display: none;
}

</style>

<script>
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'PreloaderMenu',
  setup() {
    const isLoaded = ref(false)
    const isPreloaderHidden = ref(false) // Изменим на false, чтобы preloader был виден

    onMounted(() => {
      setTimeout(() => {
        isPreloaderHidden.value = true // Изменяем на true, чтобы скрыть preloader
        isLoaded.value = true
      }, 1600)
    })

    return {
      isPreloaderHidden,
      isLoaded
    }
  }
})
</script>
