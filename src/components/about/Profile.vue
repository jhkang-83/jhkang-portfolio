<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <div class="w-full sm:w-1/3 mb-7 sm:mb-0">
      <img :src="require(`@/assets/images/jh_profile.jpg`)"
        class="rounded-xl w-96"
      />
    </div>

    <div class="text-left mb-10">
      <p class="text-2xl sm:text-3xl font-semibold mb-3 sm:mt-1 text-ternary-dark dark:text-ternary-light">
        Contact
      </p>
      <div class="flex text-left mb-2">
        <p class="text-primary-gray dark:text-primary-light font-semibold">
          Email.
        </p>
        <div class="pl-10">
          <p>jihye8301@gmail.com</p>
        </div>
      </div>

      <div class="flex text-left">
        <p class="text-primary-gray dark:text-primary-light font-semibold">
          phone.
        </p>
        <div class="pl-8">
          <p>010-6408-8301</p>
        </div>
      </div>

      <p class="text-2xl sm:text-3xl font-semibold mt-7 mb-3 sm:mt-10 text-ternary-dark dark:text-ternary-light">
        Channel
      </p>
      <div class="flex text-left mb-2">
        <p class="text-primary-gray dark:text-primary-light font-semibold">
          GitHub.
        </p>
        <div class="pl-7">
          <p><a href="https://github.com/jhkang-83" target="_blank">https://github.com/jhkang-83</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>
