<template>
  <transition name="fade">
    <div v-show="!isShowTopBtn ? isScrolling : isShowTopBtn"
      class="u-btn-floating"
      :class="{ page: !forPopup, 'posi-type2': !isShowBottomNav }">
      <div class="fixed-max-width">
        <a href="#" class="btn-top" @click.prevent="handleClickScrollTop">
          <span>맨 위로</span>
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BtnTop',
  props: ['isShowTopBtn', 'forPopup', 'scrollTop', 'showBottomNav'],
  data () {
    return {
      isScrolling: false
    }
  },
  computed: {
    isShowBottomNav () {
      return !!this.$route.meta.isShowBottomNav || this.showBottomNav
    }
  },
  created () {
    document.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount () {
    document.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    handleClickScrollTop () {
      this.$emit('scrollTop')
      window.scrollTo(0, 0)
    },
    onScroll () {
      if (this.utils.ui.isFrozen()) return
      this.isScrolling = window.scrollY > 50
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
  display: flex;
  float: right;
  margin-right: 15px;
  text-align: center;
  color: #999;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 1px 3px 0 hsl(0deg 0% 68% / 20%);
  border: 1px solid #e7e4e0;
  background-color: #fff;

  span {
    display: block;
    overflow: hidden;
    margin: auto;
    width: 15px;
    height: 15px;
    background: url('~@/assets/images/btnTopIcon.png') no-repeat;
    background-size: 15px auto;
    background-position: 9px 10px;
    color: transparent;
  }
}
</style>
