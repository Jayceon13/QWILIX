<template>
  <div style="height: 100vh;">
    <a style="position: absolute; top: 20px;left: 20px;" v-if="$router.path !== '/'"
       @click="$router.push ('/')">Главная</a>
    <div class="project">
      <div class="project-block">
        <div class="project-block--one">
          <div class="project-block--one_img">
            <img src="/img/degno.jpg">
          </div>
        </div>
        <div class="project-block--two">
          <div class="project-block--two_img">
            <img src="/img/eamedia.jpg">
          </div>
        </div>
      </div>
      <div class="project-block--nav">
        <div class="project-block--nav_white">
        </div>
        <nav>
          <div class="project-block--nav_name">
            <p>DEGNO group</p>
            <a href="https://degno.netlify.app/">Перейти</a>
          </div>
          <div class="project-block--nav_name">
            <p>EAmedia</p>
            <a href="https://eamedia.ae/">Перейти</a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'ProjectsPage'

})

</script>

<style scoped>
.project {
  display: flex;
  width: 100%;
}
.project-block--one {
  display: flex;
  width: 100%
}
.project-block--two {
  display: flex;
  width: 100%
}
.project-block--nav{
  height: 100vh;
  width: 100%;
}
.project-block--nav_white {
  height: 50%;
}
nav {
  height: 50%;
}
</style>
