<template>
  <q-layout view="lHh Lpr lFf">
    <header-qwilix></header-qwilix>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HeaderQwilix from "components/HeaderQwilix";


export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderQwilix,
  },

})
</script>

