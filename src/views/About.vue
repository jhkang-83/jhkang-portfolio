<template>
  <div class="container mx-auto">
    <Profile />
    <Career />
  </div>
</template>

<script>
import Profile from '@/components/about/Profile.vue'
import Career from '@/components/about/Career.vue'
import feather from 'feather-icons'

export default {
  name: 'About',
  components: {
    Profile,
    Career
  },
  mounted () {
    feather.replace()
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  },
  updated () {
    feather.replace()
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
}
</script>
