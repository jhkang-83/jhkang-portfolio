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

export default {
  name: 'Home',
  components: {
    ProjectGrid,
    Banner
  }
}
</script>
