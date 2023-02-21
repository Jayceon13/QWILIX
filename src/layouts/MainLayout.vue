<template>
  <preloader-menu ref="preloader"></preloader-menu>
  <q-layout view="lHh Lpr lFf">
    <header-qwilix></header-qwilix>
    <q-page-container>
      <transition :key="$route.meta.key" name="router-anim">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import HeaderQwilix from "components/HeaderQwilix";
import PreloaderMenu from "components/PreloaderMenu";

export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderQwilix,
    PreloaderMenu
  },
})
</script>

<style>

</style>
