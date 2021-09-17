<template>
<section class="pt-20 sm:pt-28">
  <div class="text-center">
    <p class="text-2xl sm:text-5xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light">
      Projects Portfolio
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
    <div v-for="(item, index) in projectList" :key="index" class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
      <router-link :to="{ path: '/projects/single-project', query: { projectInfo: `${index}` } }">
        <div>
          <img :src="`/${item.thumbnail}`" class="rounded-t-3xl border-none"/>
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
    {{ this.projectList }}
  </div>
</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import feather from 'feather-icons'

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
  mounted () {
    feather.replace()
  },
  methods: {
    ...mapActions(['initProjectList']),
    async getList () {
      this.initProjectList()
      console.log(this.projectList)
    },
    updated () {
      feather.replace()
    }
  }
}
</script>

<style scoped>
.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }

.highlight-gray {
  color: rgb(155,154,151);
}
.highlight-brown {
  color: rgb(100,71,58);
}
.highlight-orange {
  color: rgb(217,115,13);
}
.highlight-yellow {
  color: rgb(223,171,1);
}
.highlight-teal {
  color: rgb(15,123,108);
}
.highlight-blue {
  color: rgb(11,110,153);
}
.highlight-purple {
  color: rgb(105,64,165);
}
.highlight-pink {
  color: rgb(173,26,114);
}
.highlight-red {
  color: rgb(224,62,62);
}
.highlight-gray_background {
  background: rgb(235,236,237);
}
.highlight-brown_background {
  background: rgb(233,229,227);
}
.highlight-orange_background {
  background: rgb(250,235,221);
}
.highlight-yellow_background {
  background: rgb(251,243,219);
}
.highlight-teal_background {
  background: rgb(221,237,234);
}
.highlight-blue_background {
  background: rgb(221,235,241);
}
.highlight-purple_background {
  background: rgb(234,228,242);
}
.highlight-pink_background {
  background: rgb(244,223,235);
}
.highlight-red_background {
  background: rgb(251,228,228);
}
.block-color-default {
  color: inherit;
  fill: inherit;
}
.block-color-gray {
  color: rgba(55, 53, 47, 0.6);
  fill: rgba(55, 53, 47, 0.6);
}
.block-color-brown {
  color: rgb(100,71,58);
  fill: rgb(100,71,58);
}
.block-color-orange {
  color: rgb(217,115,13);
  fill: rgb(217,115,13);
}
.block-color-yellow {
  color: rgb(223,171,1);
  fill: rgb(223,171,1);
}
.block-color-teal {
  color: rgb(15,123,108);
  fill: rgb(15,123,108);
}
.block-color-blue {
  color: rgb(11,110,153);
  fill: rgb(11,110,153);
}
.block-color-purple {
  color: rgb(105,64,165);
  fill: rgb(105,64,165);
}
.block-color-pink {
  color: rgb(173,26,114);
  fill: rgb(173,26,114);
}
.block-color-red {
  color: rgb(224,62,62);
  fill: rgb(224,62,62);
}
.block-color-gray_background {
  background: rgb(235,236,237);
}
.block-color-brown_background {
  background: rgb(233,229,227);
}
.block-color-orange_background {
  background: rgb(250,235,221);
}
.block-color-yellow_background {
  background: rgb(251,243,219);
}
.block-color-teal_background {
  background: rgb(221,237,234);
}
.block-color-blue_background {
  background: rgb(221,235,241);
}
.block-color-purple_background {
  background: rgb(234,228,242);
}
.block-color-pink_background {
  background: rgb(244,223,235);
}
.block-color-red_background {
  background: rgb(251,228,228);
}
.select-value-color-default { background-color: rgba(206,205,202,0.5); }
.select-value-color-0 { background-color: rgba(155,154,151, 0.4); }
.select-value-color-1 { background-color: rgba(140,46,0,0.2); }
.select-value-color-2 { background-color: rgba(245,93,0,0.2); }
.select-value-color-3 { background-color: rgba(233,168,0,0.2); }
.select-value-color-4 { background-color: rgba(0,135,107,0.2); }
.select-value-color-5 { background-color: rgba(0,120,223,0.2); }
.select-value-color-6 { background-color: rgba(103,36,222,0.2); }
.select-value-color-7 { background-color: rgba(221,0,129,0.2); }
.select-value-color-8 { background-color: rgba(255,0,26,0.2); }
.select-value-margin {
  font-size: 12px;
  padding: 5px;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 15px;
  border-radius: 5px;
  float: left;
}
</style>
