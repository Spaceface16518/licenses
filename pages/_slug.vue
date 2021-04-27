<template>
  <main>
    <nav>
      <a href="/"><span aria-hidden="true">🏠</span> All Licenses</a>
    </nav>
    <h1>{{ license.title }}</h1>
    <nuxt-content :document="license" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const license = await $content('licenses', params.slug).fetch()
    return {
      license,
    }
  },
  head() {
    return {
      title: this.license['spdx-id'],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.license.description,
        },
      ],
    }
  },
}
</script>

<style scoped></style>
