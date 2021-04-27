<template>
  <div
    class="container border border-black dark:border-grey-300 bg-gray-100 dark:bg-gray-700 shadow mx-auto sm:my-5 lg:my-10 p-6"
  >
    <Nuxt />
  </div>
</template>

<style>
body {
  @apply bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-50 font-mono;
}

p {
  @apply py-4 text-lg;
}

h1 {
  @apply py-5 px-3 text-4xl border-b border-black dark:border-gray-300 font-sans;
}

a {
  @apply focus:underline hover:underline;
}
</style>
