<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" :src="src" alt="" />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm leading-5 font-medium text-indigo-600">
          <!--          <a href="#" class="hover:underline"> Blog </a>-->
        </p>
        <a href="#" class="block">
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            Отзыв № 1
          </h3>
          <p class="mt-3 text-base leading-6 text-gray-500">Текст отзыва</p>
        </a>
      </div>
      <div class="mt-6 flex justify-between items-center">
        <div class="flex-shrink-0">
          <a href="#">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm leading-5 font-medium text-gray-900">
            <a href="#" class="hover:underline"> Roel Aufderhar </a>
          </p>
          <div class="flex text-sm leading-5 text-gray-500">
            <time datetime="2020-03-16"> Mar 16, 2020 </time>
          </div>
        </div>

        <div class="ml-3">
          <div class="flex text-sm leading-5 text-gray-500">
            <div class="flex items-center mr-1 text-lg">5</div>
            <svg
              class="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    value: {
      type: Number,
      default: () => ({}),
      require: true,
    },
  },
  data: () => ({
    srcImage: 'https://loremflickr.com/320/240/',
  }),

  computed: {
    src() {
      return this.srcImage + this.value
    },
  },
}
</script>

<style scoped></style>
