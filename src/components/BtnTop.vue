<template>
  <transition name="fade">
    <div v-show="isShowTobBtn" class="u-btn-floating">
      <div class="fixed-max-width">
        <a href="#" class="btn-top" @click.prevent="handleClickScrollTop">
          <span>TOP</span>
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BtnTop',
  data () {
    return {
      isShowTobBtn: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScrollY)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScrollY)
  },
  methods: {
    handleClickScrollTop () {
      const elementId = document.querySelector('body')
      const durationTime = 300
      let ey = elementId.getBoundingClientRect().top
      const dy = (ey * 30) / durationTime
      const direction = dy > 0 ? 1 : -1

      const timer = setInterval(() => {
        scrollBy(0, dy)
        ey -= dy

        if (direction * ey <= 0) clearInterval(timer)
      }, 5)
    },
    onScrollY () {
      if (window.pageYOffset > 100) {
        this.isShowTobBtn = true
      } else {
        this.isShowTobBtn = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep {
  &.fade-enter-active,
  &.fade-leave-active {
    transition: all 0.4s cubic-bezier(0.41, 0.66, 0.54, 0.91);
  }
  &.fade-leave-to {
    opacity: 0;
  }
}
.u-btn-floating {
  &.page {
    z-index: 200;
  }
}

.btn-top {
  position: fixed;
  margin-right: 15px;
  right: 15px;
  bottom: 25px;
  z-index: 100;
  border-radius: 50%;
  box-shadow: 0 1px 3px 0 hsl(0deg 0% 68% / 20%);
  border: 1px solid #e7e4e0;
  background-color: #fff;
  color: #999;
  display: flex;
  width: 40px;
  height: 40px;
  text-align: center;

  span {
    position: absolute;
    overflow: hidden;
    background: url(~@/assets/images/btnTopIcon.png) no-repeat;
    background-position: 12px 10px;
    vertical-align: top;
    margin: auto;
    color: transparent;
    background-size: 15px auto;
  }
}
</style>
