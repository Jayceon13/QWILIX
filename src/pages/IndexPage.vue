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
    <div class="second-block">
      <div class="second-block-text">
        <div class="second-block-p">
          <p>We are two professional web developers who specialize in Vue.js. Our expertise in this cutting-edge technology allows us to create dynamic and responsive web applications that provide an excellent user experience. Our commitment to quality and attention to detail ensures that the end product is both functional and visually appealing. As Vue.js continues to evolve, we remain dedicated to staying up-to-date with the latest developments and incorporating them into our work.</p>
        </div>
      </div>
      <div class="block-developers">
      <div class="block-vit">
        <img src="/img/vit.png">
        <p>Vitalii Alferuk</p>
        <p>Nickname: Jayceon</p>
        <p>FullStack Developer</p>
      </div>
        <div class="block-dyuk">
          <img src="/img/dyuk.png">
          <p>Andrey Alferuk</p>
          <p>Nickname: Dyuk</p>
          <p>FullStack Developer</p>
        </div>
      </div>
    </div>
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
}
.third-block{
  width: 100vw;
  height: 100vh;
}
.first-block-text{
  color: white;
  display: flex;
  align-items: flex-end;
}
.second-block{
  display: flex;
}
.second-block-text p{
  padding: 50px;
}
.block-developers{
  width: 60%;
  display: flex;
  justify-content: center;
  flex-flow: column;
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
  .second-block-text{
    width: 40%;
    border-right: black 1px solid;
  }
  .second-block-p{
    display: flex;
    height: 100%;
    align-items: flex-end;
    font-weight: bold;
  }
  .block-vit{
    height: 38%;
    display: flex;
    text-align: center;
    margin: 40px;
    flex-flow: column;
    font-weight: bold;
  }
  .block-dyuk{
    height: 38%;
    display: flex;
    text-align: center;
    margin: 40px;
    flex-flow: column;
    font-weight: bold;
  }
  .block-developers img{
    width: 30%;
    align-self: center;
  }
  .second-block{
    border-right: black 1px solid;
  }
}
</style>


