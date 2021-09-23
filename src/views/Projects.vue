<template>
  <div>
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
  },
  updated () {
    feather.replace()
  },
  methods: {}
}
</script>
