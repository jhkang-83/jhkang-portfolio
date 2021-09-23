<template>
<section class="pt-20 sm:pt-28">
  <div class="text-center">
    <p class="text-2xl sm:text-5xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light">
      Projects Portfolio
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
    <div v-for="(item, index) in projectList" :key="index" class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
      <router-link :to="{ path: '/projects/single-project', query: { projectNo: item.no }}">
        <div>
          <img :src="require(`@/assets/images/${item.thumbnail}`)" class="rounded-t-3xl border-none"/>
        </div>

        <div class="text-center px-4 py-6">
          <p class="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
            {{ item.title }}
          </p>
          <span class="select-value-color-default select-value-margin text-ternary-dark dark:text-ternary-light">{{ item.task[0] }}</span>
          <span v-for="(stack, index) in item.tech_stack" :key="index" :class="`select-value-color-${index}`" class="select-value-color-gray select-value-margin text-ternary-dark dark:text-ternary-light">{{ stack }}</span>
        </div>
      </router-link>
    </div>
  </div>
</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import feather from 'feather-icons'

export default {
  name: 'ProjectGrid',
  computed: mapGetters(['projectList']),
  created () {
    this.getList()
  },
  mounted () {
    feather.replace()
  },
  methods: {
    ...mapActions(['initProjectList']),
    async getList () {
      this.initProjectList()
    },
    updated () {
      feather.replace()
    }
  }
}
</script>

<style scoped>
</style>
