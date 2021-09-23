<template>
  <div class="block sm:flex gap-0 sm:gap-10">
    <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
      <p v-for="(item, index) in desc"
      :key="index"
      class="mb-5 text-sm text-gray-600">
      {{ item }}
      </p>
    </div>

    <div class="mb-10 sm:mb-0" v-for="(item, index) in project_img" :key="index">
      <img :src="require(`@/assets/images/${item}`)"/>
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
