<template>
  <div class="block">
    <div class="text-left sm:mt-10">
      <p class="sm:text-3xl text-2xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light">
        Work Experience
      </p>
    </div>

    <div class="inner sm:mt-5">
      <div v-for="(item, index) in careerList" :key="index" class="flex dotted_line">
        <div class="thumbnail">
          <img :src="require(`@/assets/images/w_icon.png`)"
          class="thumImg"/>
        </div>

        <div class="careerBox text-left">
          <div class="font-bold text-lg">{{ item.company }}</div>
          <div class="text-sm">{{ item.dept_posion }}</div>
          <div class="text-xs text-primary-gray">{{ item.period }}</div>
          <div class="mt-2 text-sm text-primary-gray font-medium">
            <div class="text-xs sm:text-sm">
              {{ item.task_title }}
              <div v-for="(task, index) in item.task_list" :key="index" class="mb-5">
                <p>{{ task.sub_title }}</p>
                <p class="ml-2">{{ task.sub_period }}</p>
                <p class="ml-2">{{ task.task }}</p>
                <p class="ml-2">{{ task.tech_stack }}</p>
                <p class="ml-2">{{ task.etc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import feather from 'feather-icons'

export default {
  name: 'Career',
  computed: {
    ...mapState({
      careerList: state => state.careerList
    }),
    ...mapGetters(['careerList'])
  },
  mounted () {
    feather.replace()
  },
  created () {
    this.getList()
  },
  methods: {
    ...mapActions(['get_career_list']),

    async getList () {
      this.get_career_list()
    },

    updated () {
      feather.replace()
    }
  }
}
</script>

<style lang="scss" scoped>
.thumbnail {
  width: 24px;
  height: 24px;
  min-width: 24px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(245, 245, 245);
  border-radius: 50%;
  margin-left: -13px;
}
.thumImg {
  vertical-align: middle;
  width: 12px;
  height: 12px;
}
.careerBox {
  min-height: 56px;
  width: 100%;
  margin-left: 25px;
}
.dotted_line {
  border-left: 1px dotted rgb(128, 128, 128, 0.5);
  border-top: 0;
  left: 50%;
  padding-bottom: 20px;
  height: 120%;
  margin-left: 15px;

  &:last-child {
    border-left: 0;
  }
}
</style>
