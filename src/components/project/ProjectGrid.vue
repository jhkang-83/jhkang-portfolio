<template>
<section class="pt-20 sm:pt-28">
  <div class="text-center">
    <p class="text-2xl sm:text-5xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light">
      Projects Portfolio
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
    <div v-for="(item, index) in projectList" :key="index">
      <div class="text-center px-4 py-6">
        <p class="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
          {{ item.title }}
        </p>
        <span class="select-value-color-green select-value-margin text-ternary-dark dark:text-ternary-light">{{ item.task[0] }}</span>
      </div>
    </div>
    {{ this.projectList }}
  </div>
</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProjectGrid',
  data () {
    return {
      PROJECT_LIST: []
    }
  },
  computed: mapGetters(['projectList']),
  created () {
    this.getList()
  },
  methods: {
    ...mapActions(['initProjectList']),
    async getList () {
      this.initProjectList()
    }
  }
}
</script>
