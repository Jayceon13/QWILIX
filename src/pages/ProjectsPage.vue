<template>
  <div class="main">
    <div class="container">
      <div class="container-block" v-for="(container, index) in projects" :key="container.id">
        <div class="container-block--item hide" :class="{ hide: index !== currentImage }">
          <a class="container-block--item_link" :href="container.url">
            <img class="project-img" :src="container.img" alt="">
          </a>
        </div>
      </div>
      <div class="container-block--mobile" v-for="container in projects" :key="container.id">
        <div class="container-block--mobile_item">
          <a class="mobile-item--img" :href="container.url">
            <img class="project-mobile--img" :src="container.img" alt="">
          </a>
          <div class="mobile-item--name bold">
            <a class="mobile-item--name-link" :href="container.url">
              {{container.name}}
            <p class="mobile-name">View Project</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="nav-block" v-for="(container, index) in projects" :key="container.id">
        <div class="nav-block--item" @click="showImage(index)" :class="{ bold: index === currentImage }">{{ container.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImage: 0,
      projects: [
        {id:1, img:'/img/degno.png', name:'Degno Group', url:'https://degno.netlify.app/'},
        {id:2, img:'/img/eamedia.png', name:'EAmedia', url:'https://eamedia.ae/'},
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const containerElements = document.querySelectorAll('.container-block');
      let currentIndex = 0;

      containerElements.forEach((container, index) => {
        const containerTop = container.offsetTop;
        const containerBottom = containerTop + container.offsetHeight;

        if (scrollPosition >= containerTop && scrollPosition < containerBottom) {
          currentIndex = index;
        }
      });

      this.currentImage = currentIndex;

      const navBlocks = document.querySelectorAll('.nav-block');
      navBlocks.forEach((navBlock, index) => {
        if (index !== currentIndex) {
          setTimeout(function () { navBlock.classList.remove('bold');
          },9000) ;
        }
      });
    },
    showImage(index) {
      this.currentImage = index;

      const navBlocks = document.querySelectorAll('.nav-block');
      navBlocks.forEach((navBlock) => {
        setTimeout(function () { navBlock.classList.remove('bold');
          },9000) ;
      });
      navBlocks[index].classList.add('bold');

      const containerElements = document.querySelectorAll('.container-block');
      const selectedContainer = containerElements[index];
      selectedContainer.scrollIntoView({ behavior: 'auto' });
    },
  },
};
</script>

<style>
.main {
  display: flex;
}
.container {
  height: 200vh;
  width: 50%;
  position: relative;
}
@media only screen and (max-width: 1000px) {
  .container {
    width: 60%;
  }
}
@media only screen and (max-width: 850px) {
  .container {
    width: 100%;
    height: auto;
    padding: 80px 0px;
  }
}
.container-block {
  height: 100vh;
}
@media only screen and (max-width: 850px) {
  .container-block {
    display: none;
  }
}
.container-block--mobile {
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0px;
}
@media only screen and (min-width: 850px) {
  .container-block--mobile {
    display: none;
  }
}
.container-block--item{
  height: 100vh;
}
.container-block--item_link {
  height: 100%;
}

.nav {
  position: fixed;
  width: 40%;
  left: 50%;
  top: 50%;
}
@media only screen and (max-width: 1000px) {
  .nav {
    left: 60%;
  }
}
@media only screen and (max-width: 850px) {
  .nav {
    display: none;
  }
}


.nav-block {
  display: flex;
}
.nav-block--item {
  font-size: 40px;
  padding: 10px 40px;
  color: silver;
  cursor: pointer;
  width: 400px;
}
@media only screen and (max-width: 1000px) {
  .nav-block--item {
    font-size: 30px;
  }
}
.mobile-item--name-link{
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 14px;
  color: black;
  text-decoration: none;
  padding: 10px 80px;
  cursor: pointer;

}

.nav-block--item:hover {
  animation-name: colorBlack;
  animation-duration: 1s;
}
.hide {
  display: block;
}
.bold {
  font-weight: normal;
  color: black;
  animation-duration: 1s;
  animation-name: colorBlack;

}
.mobile-name{
  font-weight: bold;
  text-decoration-line: underline;
}
.project-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.project-mobile--img {
  height: 100%;
  width: 100%;
}
@keyframes colorBlack {
  0%{
    color: silver;
  }

  100% {
    color: black;
  }
}
</style>
