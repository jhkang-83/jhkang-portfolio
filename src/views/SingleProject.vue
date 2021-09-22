<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <SingleProjectHeader :title="projectData.title"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SingleProjectHeader from '@/components/project/SingleProjectHeader.vue'

export default {
  name: 'Projects',
  components: {
    SingleProjectHeader
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
