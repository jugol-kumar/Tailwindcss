<script setup>
import SwiperSlider from '@/pages/Protfollue/SwiperSlider.vue';
import ProjectPerson from "@/assets/images/project_person.png"

</script>



<template>
    <section id="projects py-10">
        <div class="mt-8 text-gray-100 text-center">
            <h4 class="text-4xl font-semibold">My <span class="text-gradient">Projects</span></h4>
            <p class="md:text-2xl text-xl my-3 text-gray-600">My awesome works</p>
        </div>


        <div class="flex items-center max-w-6xl px-5 py-2 mx-auto relative">
            <div class="lg:w-2/3 w-full">
                <swiper-slider/>
            </div>
            <div class="lg:block hidden">
                <img :src="ProjectPerson" class="h-96 absolute right-0 bottom-0" alt="">
            </div>
        </div>



    </section>
</template>