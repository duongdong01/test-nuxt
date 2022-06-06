<template>
  <div>
    <the-header />
    <nuxt/>
    <the-footer />
    <nuxt-link to="/about">about</nuxt-link>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
