<template>
  <section class="flex flex-col">
    <div class="bg-[#f4f4f4]">
      <div class="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 py-[5rem]">
        <div class="col-span-3 categories">
          <div class="relative">
            <a href="" class=" rounded-[0.625rem]">
              <div class="absolute">
                <img src="@/static/Img/3.jpg" alt="photo">
              </div>
              <div class="absolute after:content-[''] categories_img">
                <h4 class="text-white">Javascript</h4>
              </div>
            </a>
          </div>
          <div class="relative">
            <a href="" class="rounded-[0.625rem]">
              <div class="absolute">
                <img src="@/static/Img/4-2.jpg" alt="photo">
              </div>
              <div class="absolute after:content-[''] categories_img">
                <h4 class="text-white">Design</h4>
              </div>
            </a>
          </div>
          <div class="relative">
            <a href="" class="rounded-[0.625rem]">
              <div class="absolute">

                <img src="@/static/Img/5.jpg" alt="photo">
              </div>
              <div class="absolute after:content-[''] categories_img">
                <h4 class="text-white">Drupal</h4>
              </div>
            </a>
          </div>
          <div class="relative">
            <a href="" class="rounded-[0.625rem]">
              <div class="absolute">

                <img src="@/static/Img/6.jpg" alt="photo">
              </div>
              <div class="absolute after:content-[''] categories_img">
                <h4 class="text-white">Joomla</h4>
              </div>
            </a>
          </div>
        </div>
        <div class="col-span-9">
          <div class="grid grid-cols-12">
            <div class="col-span-8 main_img">
              <div>
                <a href="">
                  <img src="@/static/Img/6-1.jpg" alt="photo">
                </a>
              </div>
              <div>
                <a href="">
                  <img src="@/static/Img/1-2.jpg" alt="photo">
                </a>
              </div>
            </div>
            <div class="col-span-4">
              <div v-for="item in blogs" :key="item.id" class="flex flex-col text-[1rem] mt-3 mb-[3.6rem] text-black">
                <div class="flex">
                  <a href="" class="py-[0.2rem] px-4 border h-[35px] bg-[#edebf5] rounded hover:bg-[#5138ee] hover:text-white">{{ item.language }}</a>
                  <a href="" class="ml-3 h-[35px] py-[0.2rem] px-4"><span class="text-[#9b9ea1]">By </span>{{ item.author }}</a>
                </div>
                <h2 class="text-[1.5rem] font-bold pt-4">
                  <a href="" class="hover:text-[#5138ee]">
                    {{ item.title }}
                  </a>
                </h2>
                <p class="pt-4 text-[#333]">
                  {{ item.description }}
                </p>
                <div class="flex pt-4">
                  <div class="text-[#333]">
                    <i class="fa-solid fa-calendar-days  pr-2" /><span>{{ item.date }}</span>
                  </div>
                  <div class="ml-4 text-[#333]">
                    <i class="fa-solid fa-clock px-2" /><span>{{ item.time }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[4rem] mb-[2rem] trending text-black text-[1rem]">
      <div class="max-w-screen-xl mx-auto ">
        <h2 class="text-2xl font-bold mb-12 leading-6">
          Trending Articles
        </h2>
        <div class="grid grid-cols-2 gap-7 mb-12 mt-6">
          <div
            v-for="item in trendings"
            :key="item.id"
            class="grid grid-cols-2 gap-2 item_trending"
          >
            <div class="rounded-[0.625rem] overflow-hidden max-w-[272px] max-h-[125px]">
              <img :src="item.img" alt="trending" class="w-full h-full img_trending">
            </div>
            <div class="pr-[2px]">
              <div class="flex">
                <a href="#" class="bg-[#edebf5] hover:bg-[#5138ee] hover:text-white  rounded-md w-[86px] h-[34px] leading-[34px] text-center">{{ item.language }}</a>
                <div class="text-[#333] ml-6 pt-1">
                  <i class="fa-solid fa-calendar-days  pr-2" /><span>{{ item.date }}</span>
                </div>
              </div>
              <h2 class="text-lg mt-4 font-semibold">
                <a href="" class="hover:text-[#5138ee]"> {{ item.title }}</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="author text-black my-4">
      <div class="max-w-screen-xl mx-auto flex flex-col">
        <profile />
        <div class="h-[200px] flex  items-center slider_profile overflow-hidden">
          <!-- <h2 ref="profile" class="font-bold text-2xl float-right">
            <h1>hh h hh h h h h h h h h h h h ah h h h  h ah h</h1>
          </h2> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Profile from '~/components/Profile.vue'
export default {
  components: {
    Profile
  },
  data () {
    return {
      blogs: [
        {
          id: '1',
          language: 'Javascript',
          author: 'Uzzal Hossain',
          title: 'The best website layout for your bus ...',
          description: 'You need to be sure there isn’t anything embarrassing hidden in the middle of text',
          date: '12 Apr 2022',
          time: '3 min read'
        },
        {
          id: '2',
          language: 'Magento',
          author: 'Uzzal Hossain',
          title: 'Make your store stand out from the others by ...',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry has been',
          date: '12 Apr 2022',
          time: '3 min read'
        }

      ],
      trendings: [
        {
          id: '1',
          language: 'JavaScript',
          title: 'With WooLentor’s drag and drop interface for creating c...',
          date: '12 Apr 2022',
          img: require('@/static/Img/trending/6-11.jpg')
        },
        {
          id: '2',
          language: 'Design',
          title: 'Create a custom checkout page in minutes and increase y...',
          date: '12 Apr 2022',
          img: require('@/static/Img/trending/7.jpg')
        },
        {
          id: '3',
          language: 'JavaScript',
          title: 'The best website template layout for your business',
          date: '12 Apr 2022',
          img: require('@/static/Img/trending/9.jpg')
        },
        {
          id: '4',
          language: 'Wordpress',
          title: 'Create beautiful designs that will help convert more cu...',
          date: '12 Apr 2022',
          img: require('@/static/Img/trending/13.jpg')
        },
        {
          id: '5',
          language: 'Vue Js',
          title: 'WooLentor is a powerful WP plugin for WooCommerce site',
          date: '12 Apr 2022',
          img: require('@/static/Img/trending/14-1.jpg')
        },
        {
          id: '6',
          language: 'JavaScript',
          title: 'Customize your WooCommerce store with countless design ...',
          date: '12 Apr 2022',
          img: require('@/static/Img/trending/16.jpg')
        }
      ]
    }
  },
  methods: {
    arrowLeft () {
      this.$refs.profile.classList.add('slider')
    }
  }
}
</script>

<style lang="scss">
.categories{
  div{
    @apply h-[125px] rounded-[0.625rem] mb-4 truncate max-w-[272px] ;
    .categories_img{

      @apply w-full text-center font-bold text-[1.2rem] leading-[125px] ;
    }
    .categories_img:hover{
        @apply bg-[#5138ee] opacity-20 ;
        h4{
          z-index: 10;
        }
    }
  }
}
  .main_img{
    div{
      @apply  mb-[1.2rem] rounded-[0.625rem] truncate h-[265px] w-[575px] ;
      img{
        @apply transition duration-300
      }
      img:hover{
        @apply scale-[1.2]
      }
    }
  }

  .trending{
     .img_trending{
      @apply transition duration-300
     }
      .item_trending:hover{
        @apply cursor-pointer ;
        .img_trending{
          @apply scale-125
        }
      }
  }

  .author{
    .slider{
      @apply animate-[fadeInOutProFile_3s_ease-in-out]
    }
  }
</style>
