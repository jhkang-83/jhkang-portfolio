<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <SingleProjectHeader />
  </div>
</template>

<script>
import SingleProjectHeader from '@/components/project/SingleProjectHeader.vue'

export default {
  name: 'Projects',
  components: {
    SingleProjectHeader
  }
}
</script>
