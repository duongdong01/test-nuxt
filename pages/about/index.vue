<template>
  <div class="flex flex-col bg-[#fff]">
    <div class="about_header">
      <div class="h-[200px] bg-[#fafafa] flex justify-center items-center">
        <ul class="rounded-lg border text-center bg-[#f4f4f4]  text-black">
          <li>
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li><i class="fa-solid fa-circle text-[0.58rem]" /></li>
          <li>About</li>
        </ul>
      </div>
    </div>
    <div class="my-[5rem] about_video">
      <div class="max-w-screen-xl mx-auto m-full flex">
        <div class="relative w-full flex justify-center items-center">
          <img src="@/static/Img/about-video-banner.jpg" class="w-full" alt="">
          <div class="absolute">
            <div>
              <div class="relative play rounded-[50%] bg-[#5138ee] w-[80px] h-[80px] flex justify-center items-center cursor-pointer" @click="showModal" />
              <a-modal v-model="visible" :footer="null" on-ok="handleOk">
                <!-- <video src="https://www.youtube.com/watch?v=u8RjmidYOL0&t=4s" controls /> -->
                <iframe class="w-[1200px] h-[600px]" src="https://www.youtube.com/embed/u8RjmidYOL0?autoplay=1&mute=1" />
              </a-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-[5rem]  text-[1rem]">
      <div class=" grid grid-cols-12 max-w-screen-xl mx-auto m-full gap-7   ">
        <div class="flex flex-col col-span-4 space-y-4 bg-[#f4f4f4] py-[3rem] px-[3rem] rounded-xl">
          <div class="w-[90px] h-[90px] bg-[#5138ee]  rounded-lg flex justify-center items-center">
            <img src="@/static/Img/open-platform.png" class="w-[56px] h-[56px]" alt="">
          </div>
          <h4 class="font-bold text-[1.1rem]">
            Open Platform
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's
            standard dummy text ever since the 1500s when an unknown printer took galley type and scrambled.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-7 col-span-8 bg-[#f4f4f4] py-[3rem] px-[3rem] rounded-xl">
          <div class="flex flex-col space-y-4">
            <div class="w-[90px] h-[90px] bg-[#5138ee] rounded-lg flex justify-center items-center ">
              <img src="@/static/Img/digital-publishing.png" class="w-[56px] h-[56px]" alt="">
            </div>
            <h4 class="font-bold text-[1.1rem]">
              Open Platform
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's
              standard dummy text ever since the 1500s when an unknown printer took galley type and scrambled.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard.
            </p>
          </div>
          <div class="space-y-4 bg-[#f4f4f4]">
            <div class="relative flex  justify-center items-end">
              <img src="@/static/Img/about-ex-share.jpg" alt="">
              <a href="" class="font-[600] absolute hover:bg-[#5138ee] hover:text-white bg-sky-500/100 mb-[30px] px-[50px] py-[14px] rounded-lg text-white">
                Share your think <i class="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      visible: false
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      this.loading = true
      setTimeout(() => {
        this.visible = false
        this.loading = false
      }, 3000)
    },
    handleCancel (e) {
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
.about_header{
  ul{
    li{
      @apply float-left inline-block py-3 px-3
    }
  }
}
.about_video{
  .play::before{
    @apply content-['']  absolute border-solid border-[25px] border-[#fff]
           border-t-[15px] border-t-[transparent] border-b-[15px] border-b-[transparent]
           border-r-[0px] border-r-[transparent] translate-x-[4px]
  }
}
.ant-modal{
   @apply w-[100%] #{!important} ;
}
// .ant-modal-body{
//   @apply bg-[#000]/[.45]
// }
.ant-modal-content {
 @apply bg-[#000]/[.45] h-[97vh] flex justify-center items-center
}
.ant-modal-wrap {
  @apply top-[-100px]
}
// .ant-modal-footer{
//       @apply hidden
//   }
</style>
