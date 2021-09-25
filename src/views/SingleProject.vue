<template>
<!-- project detail -->
  <div class="container mx-auto mt-10 sm:mt-20">
    <SingleProjectHeader
    :title="projectData.title"
    :platform="projectData.platform"
    :task="projectData.task"
    :tech_stack="projectData.tech_stack"
    />
    <SingleProjectInfo :desc="projectData.desc" :project_img="projectData.project_img"/>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import SingleProjectHeader from '@/components/project/SingleProjectHeader.vue'
import SingleProjectInfo from '@/components/project/SingleProjectInfo.vue'

export default {
  name: 'Projects',
  components: {
    SingleProjectHeader,
    SingleProjectInfo
  },
  data () {
    return {
      projectData: []
    }
  },
  computed: {
    ...mapState({
      projectData: state => state.projectList
    }),
    ...mapGetters(['projectList'])
  },
  props: {
    projectNo: {
      type: Number,
      default: null
    }
  },
  mounted () {
  },
  created () {
    this.getList()
  },
  methods: {
    ...mapActions({
      GET_PROJECT_LIST: 'get_project_list'
    }),
    async getList () {
      await this.GET_PROJECT_LIST()

      this.projectData = this.projectList.find(item => item.no === this.projectNo)
    }
  }
}
</script>
