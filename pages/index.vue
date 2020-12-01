<template>
  <div class="container mx-auto">
    <div
      class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2
            class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            Гостевая книга
          </h2>
          <p
            class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div
          class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
        >
          <Card :value="1" />
          <Card :value="2" />
          <Card :value="3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// "preview": "https://loremflickr.com/160/160/airship?random=5f2bb90af01f47feb86b5da0",
// "image": "https://loremflickr.com/900/900/people"

export default {
  middleware: 'auth',

  data: () => ({
    srcImg: `https://loremflickr.com/900/900/people${Math.random()}`,
  }),

  async created() {
    console.log('reviews: ', await this.$axios.get('/api/reviews'))
  },

  methods: {
    src() {
      return `https://loremflickr.com/600/600/${Math.floor(Math.random() * 10)}`
    },
  },
}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center text-center;
}
</style>
