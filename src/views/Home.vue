<template>
  <div class="home">
    <project-grid />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectGrid from '@/components/project/ProjectGrid'

export default {
  name: 'Home',
  components: {
    ProjectGrid
  }
}
</script>
