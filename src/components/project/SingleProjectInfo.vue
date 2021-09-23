<template>
  <div class="sm:mt-10">
    <div v-for="(item, index) in desc"
      :key="index" class="w-full text-left sm:mt-0">
      <span
      class="mb-5 text-sm text-gray-600">
      {{ item }}
      </span>
    </div>

    <div v-for="(item, index) in project_img" :key="index" class="mt-8 sm:mt-10 mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" >
      <img :src="require(`@/assets/images/${item}`)" class="rounded-2xl shadow-lg border-opacity-10"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    desc: { type: Array, default: () => [] },
    project_img: { type: Array, default: () => [] }
  }
}
</script>
