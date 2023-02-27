<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row window-height">

      <q-parallax
        src="/img/bgmain.png"
      >
        <h1 class="text-white">Basic</h1>
      </q-parallax>

    </div>
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
