<template>
  <footer class="bg-[#090524] text-base font-bold">
    <div class="max-w-screen-xl flex flex-col mx-auto">
      <div class="grid grid-cols-12 gap-4 py-20">
        <div class="col-span-3">
          <div class=" text-white logo_footer mr-2 px-3">
            <div><img src="@/static/Img/logo-white.png" class="mb-2" alt="photo"></div>
            <div class="my-6">
              <p class="font-medium">
                Lorem ipsum is simply dummy text the printing and typesetting
                industry has been the industry's standard text ever since.
              </p>
            </div>
            <div class="my-6">
              <div class="icons-list items-center text-[1rem]">
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
            </div>
          </div>
        </div>
        <div class="col-span-3 subscribe_footer text-white">
          <h3>Subscribe</h3>
          <div class="components-input-demo-size ">
            <a-input  class="mt-8 mb-4 focus:outline-none text-white font-bold" placeholder="Your name" />
            <a-input  class="mb-1 focus:outline-none text-white font-bold" placeholder="Your email address" />
            <a-button class="mt-2 max-h-[3rem] h-[3rem] max-w-[50%] w-full bg-[#5138ee] font-bold text-white border-none" :size="large">
              Subscribe Now
            </a-button>
          </div>
        </div>
        <div class="col-span-6 text-white">
          <div class="grid grid-cols-3 gap-4">
            <div class="Company_footer">
              <h3>Company</h3>
              <ul class="font-medium">
                <li><a>FAQ's</a></li>
                <li><a>Careers</a></li>
                <li><a>About Us</a></li>
                <li><a>Contact Us</a></li>
                <li><a>Blog</a></li>
              </ul>
            </div>
            <div class="link_footer">
              <h3>Quick Links</h3>
              <ul class="font-medium">
                <li><a>Discussion</a></li>
                <li><a>Support</a></li>
                <li><a>Privacy Policy</a></li>
                <li><a>Customer Support</a></li>
                <li><a>Terms & Conditions</a></li>
              </ul>
            </div>
            <div class="Category_footer">
              <h3>Category</h3>
              <ul class="font-medium">
                <li><a href="">Travel</a></li>
                <li><a href="">Business</a></li>
                <li><a href="">Medical</a></li>
                <li><a href="">Marketing</a></li>
                <li><a href="">Technology</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end -->
    <div class="text-center text-white py-4 bg-[#16122f]">
      <p>© 2022 Bunzo Made with <i class="fa-solid fa-heart text-red-600" /> by Codecarnival</p>
    </div>
  </footer>
</template>

<script>

import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
})
export default {
  components: {
    IconFont
  }
}
</script>

<style lang="scss">
.logo_footer{
    div{
        .icons-list{
            @apply mt-2;
           a{
                @apply mr-4 border-solid border inline-block rounded-lg bg-white;
                i{
                    @apply px-[0.7rem] py-2 mb-1 text-black;
                }
                i:hover{
                    color: white;
                }
           }
           a:hover{
               @apply bg-[#5138ee] border-transparent
           }
        }
    }
}
.subscribe_footer{
    .components-input-demo-size .ant-input {
        @apply w-full py-6 bg-[#16122f] border-none ;
        // width: 200px;
        // margin: 0 8px 8px 0;
    }
    .ant-btn:hover{
         @apply bg-[#1c0b87]
    }
}

h3{
    @apply text-white text-lg
}
.Company_footer,.link_footer,.Category_footer{
    ul{
        li{
           @apply my-4
        }
    }
}

</style>
