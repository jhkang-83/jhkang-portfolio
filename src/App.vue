<template>
  <div :class="appTheme">
    <Header></Header>
    <router-view />
    <btn-top/>
    <Footer />
  </div>
</template>

<script>
import feather from 'feather-icons'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import BtnTop from '@/components/BtnTop.vue'

export default {
  components: {
    Header,
    Footer,
    BtnTop
  },
  data: () => {
    return {
      appTheme: localStorage.getItem('theme')
    }
  },
  mounted () {
    feather.replace()
  },
  updated () {
    feather.replace()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
