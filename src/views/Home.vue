<template>
  <div class="container mx-auto">
    <banner />
    <project-grid />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectGrid from '@/components/project/ProjectGrid'
import Banner from '@/components/home/Banner.vue'
import feather from 'feather-icons'

export default {
  name: 'Home',
  components: {
    ProjectGrid,
    Banner
  },
  data: () => {
    return {}
  },
  mounted () {
    feather.replace()
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  },
  updated () {
    feather.replace()
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  },
  methods: {}
}
</script>
