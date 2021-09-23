<template>
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
import { mapGetters, mapActions } from 'vuex'
import SingleProjectHeader from '@/components/project/SingleProjectHeader.vue'
import SingleProjectInfo from '@/components/project/SingleProjectInfo.vue'

export default {
  name: 'Projects',
  components: {
    SingleProjectHeader,
    SingleProjectInfo
  },
  computed: mapGetters(['projectList']),
  props: {
    projectNo: {
      type: Number,
      default: null
    },
    projectArr: { type: Object, required: true }
  },
  data () {
    return {
      projectData: {
        desc: [],
        no: null,
        platform: [],
        project_img: [],
        task: [],
        tech_stack: [],
        title: ''
      }
    }
  },
  mounted () {
    // this.projectData = this.projectList.find(item => item.no === this.projectNo)
  },
  created () {
    this.getList()
  },
  methods: {
    ...mapActions({
      GET_PROJECT_LIST: 'initProjectList'
    }),
    async getList () {
      await this.GET_PROJECT_LIST()

      this.projectData = this.projectList.find(item => item.no === this.projectNo)
      console.log('projectNo >>>', this.projectNo)

      console.log('create projectList >>>', this.projectList)
    }
  }
}
</script>
