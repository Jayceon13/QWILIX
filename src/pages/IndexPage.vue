<template>
  <preloader-menu ref="preloader"></preloader-menu>
  <q-page ref="page" class="horizontal-scroll">

    <div class="first-block">
      <div class="parallax-container">
        <div class="parallax-layer"></div>
        <div class="parallax-layer">
          <div class="parallax-content">
            <!-- Ваш контент здесь -->
          </div>
        </div>
      </div>
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
    <div class="third-block">
      <div class="third-block-text">
        <h4>What We Do</h4>
        <p>Our team of experienced designers and developers work together to bring your vision to life. We pride ourselves on staying up-to-date with the latest design trends and web development technologies to ensure that your website is not only visually stunning, but also highly functional and user-friendly.

          Whether you need a brand new website or a redesign of an existing one, we can help. We work closely with our clients to understand their unique needs and goals, and then create custom solutions that are tailored to their specific requirements.

          At our core, we are passionate about creating beautiful and functional websites that help our clients achieve their business objectives. Contact us today to learn more about how we can help bring your website to the next level.</p>
      </div>
      <div class="third-block-img">
        <img src="/img/index1.jpg">
      </div>
    </div>
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
        let delta = event.deltaY
        if (event.deltaMode === 1) {
          delta *= 40
        }
        el.scrollLeft += delta / 2
      }
    }

    const handleKeyDown = (event) => {
      const el = document.querySelector('.horizontal-scroll')
      if (el) {
        if (event.key === 'ArrowUp') {
          el.scrollLeft -= 40
        } else if (event.key === 'ArrowDown') {
          el.scrollLeft += 40
        }
      }
    }

    const toggleHorizontalScroll = () => {
      state.isHorizontalScroll = window.innerWidth > 780

      const el = document.querySelector('.horizontal-scroll')
      if (el) {
        if (state.isHorizontalScroll) {
          el.addEventListener('wheel', handleWheelScroll)
          document.addEventListener('keydown', handleKeyDown)
        } else {
          el.removeEventListener('wheel', handleWheelScroll)
          document.removeEventListener('keydown', handleKeyDown)
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
        document.removeEventListener('keydown', handleKeyDown)
      }
    })

    return {
      handleWheelScroll,
      handleKeyDown
    }
  }
};
</script>



<style scoped>
.first-block{
  width: 100vw;
  height: 100vh;
  background-image: url("/img/japan.jpg");
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
.third-block{
  display: flex;
}
.third-block-text{
  display: flex;
  height: 100%;
  flex-flow: column;
}
.third-block h4{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
.third-block-img{
  display: flex;
  padding: 40px;
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
  .third-block-text{
    width: 40%;
    border-right: black 1px solid;
    padding: 40px;
    justify-content: space-between;
    font-weight: bold;
  }
  .third-block-img{
    width: 60%;
    align-items: center;
    justify-content: center;
  }
  .third-block-img img{
    width: 80%;
    height: auto;
  }
}
@media only screen and (max-width: 1000px) {
 .first-block-text h5{
   font-size: 15px;
 }
  .first-block-text{
    width: 100%;
  }
}
@media only screen and (max-width: 780px) {
  .first-block{
    flex-flow: column;
  }
  .block-logo{
    align-self: center;
    margin: 100px 0 100px 0;
  }
  .block-logo img{
    width: 300px;
  }
  .first-block-text h5{
    font-size: 15px;
  }
  .first-block-text{
    width: 100%;
    padding: 40px;
  }
  .second-block{
    flex-flow: column;
  }
  .block-developers img{
    width: 80px;
  }
  .block-developers{
    text-align: center;
    width: 100%;
  }
  .third-block{
    flex-flow: column;
  }
  .third-block-text{
    padding: 40px;
  }
  .third-block-img img{
    width: 300px;
  }
  .third-block-img{
    align-self: center;
  }
}
</style>


