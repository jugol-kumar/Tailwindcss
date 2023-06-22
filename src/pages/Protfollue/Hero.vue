<script setup>
import {usePortfolio} from "@/composables/usePortfolio.js"
const {heroImage, socalMedias} = usePortfolio();


</script>
<template>
    <section class="min-h-screen flex py-10 md:flex-row flex-col items-center" id="home">
        <div class="flex-1 flex items-center justify-center h-full">
            <img :src="heroImage" class="md:w-11/12 h-full object-cover" alt="">
        </div>
        
        <div class="flex-1 md:text-left text-center">
            <h1 class="md:text-5xl text-center md:text-left text-2xl lg:leading-snug font-medium">
                <span class="font-normal">
                    Hello! <br/>                    
                </span> 
                My Name Is <span class="text-gradient">Jugo Kumar</span>
            </h1>
            <h4 class="md:text-2xl text-xl my-3 text-gray-600">Fullstack Developer</h4>

            <button class="btn-prot-main">Contact Me</button>
            <div class="flex items-center md:justify-start justify-center gap-3 mt-4">
                <a class="text-3xl text-gray-500 hover:text-white" v-for="item in socalMedias" :key="item.name" :href="item.link" target="_blank">
                    <component :is="item.icon"></component>
                </a>
            </div>
        </div>
    </section>
</template>