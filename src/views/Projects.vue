<template>
  <div class="container mx-auto">
    <ProjectGrid/>
  </div>
</template>

<script>
import ProjectGrid from '@/components/project/ProjectGrid.vue'
import feather from 'feather-icons'

export default {
  name: 'Projects',
  components: {
    ProjectGrid
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
