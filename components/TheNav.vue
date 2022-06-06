<template>
  <div class="max-w-screen-xl mx-auto flex menu_header">
    <a-menu v-model="current" mode="horizontal" class="basis-1/2 font-semibold menu_header my-2 border-b-0">
      <a-menu-item key="home">
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="about" class="ml-3">
        <nuxt-link to="/about">
          About
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="app" class="ml-3">
        Blog
      </a-menu-item>
      <a-sub-menu class="ml-3">
        <span
          slot="title"
          class="submenu-title-wrapper"
        >
          Categories
          <a-icon type="down" /></span>
        <a-menu-item key="categories:1">
          Option 1
        </a-menu-item>
        <a-menu-item key="categories:2">
          Option 2
        </a-menu-item>
        <a-menu-item key="categories:3">
          Option 3
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu class="ml-3">
        <span
          slot="title"
          class="submenu-title-wrapper"
        >
          Pages
          <a-icon type="down" /></span>

        <a-menu-item key="setting:1">
          Option 1
        </a-menu-item>
        <a-menu-item key="setting:2">
          Option 2
        </a-menu-item>
        <a-menu-item key="setting:3">
          Option 3
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="contact" class="ml-3">
        Contact
      </a-menu-item>
    </a-menu>

    <div class="basis-1/2">
      <div class="float-right px-1">
        <a-input-search placeholder="search ..." class="input_header rounded-md py-[1.2rem] px-[0.5rem] w-[18.5rem]" @search="onSearch" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: ['home']
    }
  },
  methods: {
    onSearch (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss">
.menu_header{
  .input_header{
    input{
      @apply py-[1.4rem] px-2 text-base ;
    }
    .ant-input-suffix{
      .ant-input-search-icon{
        @apply text-[1.25rem] pr-[0.25rem]
      }
    }
  }
}
</style>
