<template>
  <div class="container">
    <div class="test" :class="{ hide: !testVisible }">TEST</div>
    <div class="test2" :class="{ hide: testVisible || !test2Visible }">TEST 2</div>
  </div>
</template>

<style>
.container {
  height: 200vh;
  position: relative;
}

.test {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.test2 {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hide {
  display: none;
}
</style>

<script>
export default {
  data() {
    return {
      testVisible: true,
      test2Visible: false,
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
      if (window.scrollY >= window.innerHeight * 0.5) {
        this.testVisible = false;
        this.test2Visible = true;
      } else {
        this.testVisible = true;
        this.test2Visible = false;
      }
    },
  },
};
</script>







