<template>
  <div class="pt-15 sm:pt-20 pb-8">
    <div class="flex justify-center items-center text-center">
      <div class="text-base text-ternary-dark dark:text-ternary-light">
        &copy; Copyright 2021. JH Kang
      </div>
    </div>
  </div>
</template>

<script>
import feather from 'feather-icons'
export default {
  mounted () {
    feather.replace()
  },
  updated () {
    feather.replace()
  }
}
</script>
