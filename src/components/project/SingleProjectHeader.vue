<template>
  <div>
    <p class="text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-7 sm:mt-20 mb-7">
      {{ title }}
    </p>
  </div>
  <div class="flex">
    <div>
      <div class="flex items-center mr-10">
        <div>
          <listIcon/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listIcon from '@/assets/images/header_listIcon.svg'
export default {
  name: 'Projects',
  components: { listIcon },
  props: {
    title: { type: String, default: '' }
  }
}
</script>

<style>
</style>
