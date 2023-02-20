<template>
  <div>
    <a style="position: absolute; top: 20px;left: 20px;" v-if="$router.path !== '/'"
       @click="$router.push ('/')">Главная</a>
Contacts
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'DefinePage'
})
</script>

<style scoped>

</style>
