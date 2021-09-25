<template>
  <div>
    <p class="text-left text-2xl sm:text-3xl font-bold text-primary-dark dark:text-primary-light mt-7 sm:mt-20 mb-7">
      {{ title }}
    </p>
  </div>

  <div>
    <!-- platform -->
    <div class="flex pb-3">
      <div class="flex items-center list-title">
        <i class="header-list-icon"></i>
        <div class="text-primary-gray dark:text-primary-light">platform</div>
      </div>
      <div class="list-item sm:pl-5">
        <span v-for="(item, index) in platform" :key="index" :class="`select-value-color-${Math.floor(Math.random() * 8)}`" class="header-list-margin text-ternary-dark dark:text-ternary-light">{{ item }}</span>
      </div>
    </div>

    <!-- task -->
    <div class="flex pb-3">
      <div class="flex items-center list-title">
        <i class="header-list-icon"></i>
        <div class="text-primary-gray dark:text-primary-light">task</div>
      </div>
      <div class="list-item sm:pl-5">
        <span v-for="(item, index) in task" :key="index" :class="`select-value-color-${Math.floor(Math.random() * 8)}`" class="header-list-margin text-ternary-dark dark:text-ternary-light">{{ item }}</span>
      </div>
    </div>

    <!-- tech_stack -->
    <div class="flex pb-3">
      <div class="flex items-center list-title">
        <i class="header-list-icon"></i>
        <div class="text-primary-gray dark:text-primary-light">tech_stack</div>
      </div>
      <div class="list-item sm:pl-5 pl-5">
        <span v-for="(item, index) in tech_stack" :key="index" :class="`select-value-color-${Math.floor(Math.random() * 8)}`" class="header-list-margin text-ternary-dark dark:text-ternary-light">{{ item }}</span>
      </div>
    </div>
  </div>

  <div class="h-line"/>
</template>

<script>

export default {
  name: 'Projects',
  props: {
    title: { type: String, default: '' },
    platform: { type: Array, default: () => [] },
    task: { type: Array, default: () => [] },
    tech_stack: { type: Array, default: () => [] }
  },
  computed: {
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.header-list-icon {
  background: url(~@/assets/images/svgIcons/header_listIcon.svg) no-repeat;
  border: 0;
  background-size: cover;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  display: block;
}
.list-title {
  width: 120px;
}
.list-item {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  min-width: 0px;
  margin-left: 5px;
}
</style>
