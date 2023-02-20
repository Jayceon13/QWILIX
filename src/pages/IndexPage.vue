<template>
  <q-page ref="page" class="horizontal-scroll">
    <div class="first-block"></div>
    <div class="second-block"></div>
    <div class="third-block"></div>
  </q-page>
</template>

<script>
import { onMounted, onUnmounted, reactive } from 'vue'

export default {
  name: 'IndexPage',
  setup () {
    const state = reactive({
      isHorizontalScroll: window.innerWidth > 780
    })

    const handleWheelScroll = (event) => {
      event.preventDefault()
      document.querySelector('.horizontal-scroll').scrollLeft += event.deltaY
    }

    const toggleHorizontalScroll = () => {
      state.isHorizontalScroll = window.innerWidth > 780

      if (state.isHorizontalScroll) {
        document.querySelector('.horizontal-scroll').addEventListener('wheel', handleWheelScroll)
      } else {
        document.querySelector('.horizontal-scroll').removeEventListener('wheel', handleWheelScroll)
      }
    }

    onMounted(() => {
      toggleHorizontalScroll()
      window.addEventListener('resize', toggleHorizontalScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', toggleHorizontalScroll)
      document.querySelector('.horizontal-scroll').removeEventListener('wheel', handleWheelScroll)
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
  background: orange;
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
}
</style>


