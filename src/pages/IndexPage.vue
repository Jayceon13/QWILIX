<template>
  <preloader-menu ref="preloader"></preloader-menu>
  <q-page ref="page" class="horizontal-scroll">

    <div class="first-block">
      <div class="block-logo">
        <img class="logo" src="/img/QWILIX.svg">
      </div>
      <div class="first-block-text">
        <h5>Welcome to our company, a leading provider of website development services. Our team of skilled professionals is dedicated to creating stunning websites that not only look great, but also provide exceptional user experiences.</h5>
      </div>
    </div>
    <div class="second-block"></div>
    <div class="third-block"></div>
  </q-page>
</template>

<script>
import { onMounted, onUnmounted, reactive } from 'vue'
import PreloaderMenu from "components/PreloaderMenu";

export default {
  name: 'IndexPage',
  components: {
    PreloaderMenu
  },
  setup () {
    const state = reactive({
      isHorizontalScroll: window.innerWidth > 780
    })

    const handleWheelScroll = (event) => {
      event.preventDefault()
      const el = document.querySelector('.horizontal-scroll')
      if (el) {
        el.scrollLeft += event.deltaY
      }
    }

    const toggleHorizontalScroll = () => {
      state.isHorizontalScroll = window.innerWidth > 780

      const el = document.querySelector('.horizontal-scroll')
      if (el) {
        if (state.isHorizontalScroll) {
          el.addEventListener('wheel', handleWheelScroll)
        } else {
          el.removeEventListener('wheel', handleWheelScroll)
        }
      }
    }

    onMounted(() => {
      toggleHorizontalScroll()
      window.addEventListener('resize', toggleHorizontalScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', toggleHorizontalScroll)
      const el = document.querySelector('.horizontal-scroll')
      if (el) {
        el.removeEventListener('wheel', handleWheelScroll)
      }
    })

    return {
      handleWheelScroll
    }
  }
};
</script>

<style scoped>
.first-block{
  width: 100vw;
  height: 100vh;
  background: url("/img/japan.jpg");
  background-size: cover;
  display: flex;
}
.second-block{
  width: 100vw;
  height: 100vh;
  background: blue;
}
.third-block{
  width: 100vw;
  height: 100vh;
  background: green;
}
.first-block-text{
  color: white;
}

@media only screen and (min-width: 780px) {
  .q-page.horizontal-scroll {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .q-page::-webkit-scrollbar{
    display: none;
  }
  @media only screen and (min-width: 780px) {
  .q-page.horizontal-scroll {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .first-block, .second-block, .third-block {
    flex: 0 0 100vw;
    height: 100vh;
  }
}
  .first-block, .second-block, .third-block {
    flex: 0 0 100vw;
    height: 100vh;
  }
  .block-logo{
    margin-left: 30px;
    align-self: center;
  }
  .first-block-text{
    display: flex;
    align-self: flex-end;
    padding-right: 130px;
  }
}
</style>


