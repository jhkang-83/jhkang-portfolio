<template>
  <section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-2">
    <div class="w-full sm:w-1/3 text-left">
      <h1 class="text-2xl sm:text-5xl text-center sm:text-left font-semibold text-ternary-dark dark:text-primary-light uppercase">
        웹 서비스가 좋아 일하는 개발자
      </h1>

      <p class="mt-4 text-2xml sm:text-4xl text-center sm:text-left font-semibold leading-none text-gray-400">
        Front-End Developer
      </p>
    </div>

    <div class="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0">
      <img v-if="theme === 'light'"
      src="@/assets/images/devloper_banner.svg"
      alt="Developer"
      />

      <img v-else
      src="@/assets/images/devloper_banner_dark.svg"
      alt="Developer"
      />
    </div>
  </section>

  <br>
  <section>
    <ul class="flex gap-4 sm:gap-8">
      <div
          class="text-gray-400 rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm∫ p-4 text-left"
      >
        <p class="mt-2 mb-2">웹 서비스가 좋아 일하는 개발자로 콘텐츠, Web, SI에서 개발/배포/운영 경험이 있습니다.</p>
        <p class="mb-2">주로 웹서비스 Front 개발을 담당했으며 현재 위메프 Front-end 개발 운영하면서 Vue.js와 TypeScript, REST API를 사용하여 Front-end 개발 경험이 있습니다.</p>
        <p class="mb-2">현업의 다양한 니즈와 불편사항을 이해하여 보다 더 편리하게 사용 할 수 있도록 고민하고 서비스에 반영하는 업무를 진행 하고 있습니다.</p>
      </div>
    </ul>
  </section>
<!-- Banner end -->
</template>

<script>
import feather from 'feather-icons'

export default {
  name: 'Home',
  data: () => {
    return {
      theme: ''
    }
  },
  created () {
    this.theme = localStorage.getItem('theme') || 'light'
  },
  mounted () {
    feather.replace()
    this.theme = localStorage.getItem('theme') || 'light'
  },
  updated () {
    feather.replace()
  },
  methods: {}
}
</script>
