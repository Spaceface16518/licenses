<!--suppress ALL -->
<template>
  <nav>
    <h1>Licenses</h1>
    <ul class="py-4 text-lg list-disc ml-2">
      <li v-for="license in licenses" :key="license['spdx-id']" class="p-1">
        <a :href="`/${license.slug}`" class="text-gray-900 dark:text-gray-200">
          {{ license.title }}
          <span class="text-gray-400">({{ license['spdx-id'] }})</span>
        </a>
        <span v-if="license.featured">⭐</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const licenses = await $content('licenses')
      .only(['title', 'spdx-id', 'slug', 'featured'])
      .fetch()
    return {
      licenses,
    }
  },
}
</script>
