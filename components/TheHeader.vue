<template>
  <header class="flex flex-col bg-[#fff]">
    <div class="bg-[#5138ee]">
      <div class="flex flex-row  max-w-screen-xl mx-auto h-12  text-white font-semibold">
        <div class="basis-1/4 leading-[3rem]">
          <ul class="Text_Contract">
            <li class="ml-2">
              Help
            </li>
            <li class="ml-3">
              Status
            </li>
            <li class="ml-3">
              Write
            </li>
          </ul>
        </div>
        <div class="basis-1/4 leading-[3rem]">
          <ul class="text-right">
            <span>
              <a-icon type="phone" class="text-base mr-1.5 text-[1.25rem] inline-flex" />
              <li class="mr-10">0123456789</li>
            </span>
          </ul>
        </div>
        <div class="basis-1/4 leading-[3rem]">
          <ul class="text-left">
            <div class="flex items-center">
              <div>
                <i class="fa-regular items-center fa-envelope ml-1 text-[1.25rem] mt-[0.1rem]" />
              </div>
              <div>
                <li class="ml-2.5 mb-[0.3rem]">
                  Duong19120@gmail.com
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div class="basis-1/4 leading-[3rem]">
          <ul class="text-right">
            <li>
              <div class="icons-list items-center">
                <a href="#">
                  <a-icon type="google" />
                </a>
                <a href="#">
                  <icon-font type="icon-facebook" />
                </a>
                <a href="#">
                  <icon-font type="icon-twitter" />
                </a>
                <a href="#">
                  <a-icon type="github" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- banner -->
    <div class="border-solid border-b">
      <div class="flex flex-row max-h-[8rem]  max-w-screen-xl w-full mx-auto">
        <div class="basis-1/2 py-4 px-1 m ">
          <img src="@/static/Img/logo.png" class="py-4" alt="photo">
        </div>
        <div class=" basis-1/2 py-4 px-1">
          <div class="overflow-hidden md:block hidden rounded-[0.625rem] ">
            <a href="">
              <img src="@/static/Img/Add-banner.jpg" class="img_add-banner rounded-[0.625rem] w-full" alt="photo">
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- nav -->
    <div ref="menu" class="menu w-full max-h-[5rem] bg-[#fff]">
      <the-nav />
    </div>
  </header>
</template>
<script>
import { Icon } from 'ant-design-vue'
import TheNav from './TheNav.vue'
// eslint-disable-next-line no-unused-vars
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
})
export default {
  components: {
    IconFont,
    TheNav
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 230) {
        this.$refs.menu.classList.add('fixeds')
      } else {
        this.$refs.menu.classList.remove('fixeds')
      }
    }
  }

}
</script>

<style lang="scss" scoped>
header{
  div{

    ul{
       li{
        @apply inline-table ;
        .icons-list {
          a{
           @apply rounded-full border-solid border py-1 px-[0.2rem] mr-2 ;
            .anticon {
            @apply px-0.5 text-[1rem] inline-flex;

            }
          }
          a:hover{
            @apply bg-[#f4f4f4]
          }
        }
      }
    }
    .Text_Contract{
      li{
        @apply mr-5
      }
    }

  }
  .img_add-banner{

    @apply transition duration-300;
  }
  .img_add-banner:hover{

      @apply scale-110;

  }
   .fixeds {
    @apply fixed shadow-md top-0 animate-[fadeInOut_0.5s_ease-in-out] z-50

}
}

</style>
