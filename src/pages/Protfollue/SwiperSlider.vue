
<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, Pagination, Virtual } from 'swiper';
  import 'swiper/swiper-bundle.css';
  
  import IconGithub from "@/components/icons/IconGithub.vue";
  import IconLink from "@/components/icons/IconGithub.vue";
  import Img from "@/assets/images/app-bg.jpg"
  import Img2 from "@/assets/images/project2.png"
  import Img3 from "@/assets/images/project3.png"
  import Img4 from "@/assets/images/project4.png"
  const projects = [
    {img:Img, title:'Project ', gitLink:'',liveLink:''},
    {img:Img2, title:'Project ', gitLink:'',liveLink:''},
    {img:Img3, title:'Project ', gitLink:'',liveLink:''},
    {img:Img2, title:'Project ', gitLink:'',liveLink:''},
    {img:Img3, title:'Project ', gitLink:'',liveLink:''},
    {img:Img4, title:'Project ', gitLink:'',liveLink:''},
  ]


</script>



<template>
  <Swiper 
  speed="500" loop="true"
  :breakpoints="{ 600:{ slidesPerView:1 }, 900:{ slidesPerView:2} }"
  :autoplay='{
  "delay": 2500}'
  :space-between="50" 
  :modules="[ Pagination, Virtual]" 
  :pagination="{clickable:true, dynamicBullets:true}" 
  class="mySwiper">
    <SwiperSlide v-for="(item, i) in projects" :key="item.title" :virtualIndex="n">
      <div class="h-fit w-full p-4 bg-slate-700 rounded-xl">
        <img :src="item.img" class="rounded-md" alt="">
        <h3 class="text-xl my-4">{{ item.title+' '+i }}</h3>
        <div class="flex gap-3">
          <a :href="item.gitLink" class="bg-slate-800 py-1 flex items-center justify-center text-sm px-4 rounded-md">
            Github
          </a>
          <a :href="item.liveLink" class="bg-slate-800 py-1 flex items-center justify-center text-sm px-4 rounded-md">Live Demo</a>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
