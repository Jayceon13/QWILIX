<template>
  <div class="about-page">
    <a style="position: absolute; top: 20px;left: 20px;" v-if="$router.path !== '/'"
       @click="$router.push ('/')">Главная</a>
About
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutPage'
})
</script>

<style scoped>
.about-page{
  width: 100vw;
  height: 100vh;
  background: #21BA45;
}
</style>
