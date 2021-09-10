<template>
  <div :class="appTheme">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import feather from 'feather-icons'
import Header from '@/components/shared/Header'

export default {
  components: {
    Header
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
  color: #2c3e50;
}
</style>
