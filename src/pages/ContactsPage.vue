<template>
  <div class="block-contacts">
    <div class="block-contacts-text">
      <div class="block-contacts-text-1">
        <h5>
          Connect with us
        </h5>
        <p>You can fill out the feedback form and we will contact you as soon as possible</p>
        <q-btn class="btn-form" outline rounded color="black" label="Form"
               @click="blockFeed" style="width: 90px"/>
      </div>
      <div class="block-contacts-text-2">
        <p>Or you can write to contact us in one of the ways convenient for you.</p>
        <a href="https://www.instagram.com/qwilix.dev">Instagram</a>
        <a href="https://t.me/qwilix_dev">Telegram</a>
        <a href = "mailto: qwilix.dev@gmail.com">qwilix.dev@gmail.com</a>
      </div>
    </div>
    <div class="block-contacts-image">
      <transition name="feedbackanim">
        <div class="feedback-block" v-if="showFeed">
          <img class="xicon" src="/icons/xicon.svg" @click="blockFeed">
          <feedback-form></feedback-form>
        </div>
      </transition>
      <img class="qwilix-img" src="/img/imgqwilix.svg" alt="">
    </div>
  </div>
</template>
<script>
import {defineComponent, ref} from "vue";
import FeedbackForm from "components/FeedbackForm";

export default defineComponent({
  name: 'DefinePage',
  components: {
    FeedbackForm
  },
  setup () {
    const showFeed = ref(false)
    return {
      showFeed,
      blockFeed() {
        showFeed.value = !showFeed.value;
      },
    }
  }

})
</script>
<style scoped>
.feedback-block{
  display: flex;
  width: 50%;
  height: 100%;
  background: white;
  flex-flow: column;
}
.xicon{
  cursor: pointer;
  z-index: 89;
  width: 20px;
  align-self: self-end;
  margin-right: 90px;
  margin-top: 30px;
}
.feedbackanim-enter-active {
  animation: slide-fade 0.5s ease-in-out;
}
@keyframes slide-fade {
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(0);
  }
}
.feedbackanim-leave-active {
  animation: slide-fade-up 0.5s ease-in-out;
}
@keyframes slide-fade-up {
  0%{
    transform: translateY(0%);
  }
  100%{
    transform: translateY(-100%);
  }
}

.block-contacts{
  font-family: "Oleo Script";
  display: flex;
}
.block-contacts-text{
  display: flex;
}
.block-contacts-text-1,
.block-contacts-text-2{
  display: flex;
}
.block-contacts-text-2 a{
  color: black;
  margin: 7px;
  text-decoration: none;
}
.block-contacts-image{
  display: flex;
}
@media screen and (max-width: 1100px){
  .qwilix-img{
    width: 350px;
  }
  .block-contacts-image{
    width: 70%;
    justify-content: center;
    border-left: black 1px solid;
  }
  .block-contacts-text{
    width: 30%;
    flex-flow: column;
    align-self: self-end;
  }
}
@media screen and (min-width: 600px){
  .feedback-block{
    position: absolute;
  }
}
@media screen and (max-width: 600px){
  .qwilix-img{
    width: 350px;
  }
  .block-contacts-image{
    width: 100%;
    justify-content: center;
    border: none;
  }
  .block-contacts-text{
    width: 100%;
    flex-flow: column;
    align-self: self-end;
  }
  .block-contacts{
    flex-flow: column;
    margin: 30px;
  }
  .block-contacts-text-1{
    flex-flow: column;
  }
  .block-contacts-text-2{
    flex-flow: column;

  }
  .feedback-block{
    display: flex;
    width: 100%;
    height: 100%;
    background: white;
    position: absolute;
    flex-flow: column;
  }
}

@media screen and (min-width: 1100px){
  .qwilix-img{
    width: 500px;
  }
  .block-contacts-image{
    width: 60%;
    justify-content: center;
  }
  .block-contacts-text{
    width: 40%;
    border-right: black 1px solid;
  }
}
@media screen and (min-width: 780px){
  .block-contacts{
    height: 100vh;
    width: 100vw;
  }
  .block-contacts-text-1,
  .block-contacts-text-2{
    display: flex;
    flex-flow: column;
    padding: 30px;
    align-self: flex-end;
  }
}
</style>
