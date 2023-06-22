<script setup>
import {usePortfolio} from '@/composables/usePortfolio.js'
  const {aboutImg, aboutMe, info, cvLink} = usePortfolio();
</script>

<template>
    <section id="about" class="py-10">
        <div class="mt-8">
            <div class="text-center">
                <h4 class="text-4xl font-semibold">About <span class="text-gradient">Me</span></h4>
                <p class="md:text-2xl text-xl my-3 text-gray-600">My Introduction</p>
            </div> 

            <div class="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-12 max-w-6xl mx-auto">
                <div class="p-2">
                    <div class="text-gray-300 my-5">
                        <p class="text-justify">
                          {{ aboutMe }}
                        </p>
                    </div>
                    <div class="flex items-center gap-7">
                        <div class="flex items-center flex-col" v-for="item in info" :key="item.title">
                            <h4 class="md:text-4xl text-2xl font-semibold ">
                                {{  item.count }}
                                <span class="text-gradient">+</span>
                            </h4>
                            <span class="md:text-base text-sm md:text-left text-center">{{ item.title }}</span>
                        </div>
                    </div>
                    <a :href="cvLink" target="_blank">
                        <button class="btn-prot-main mt-8">Download Resume</button>
                    </a>
                </div> 

                <div class="flex-1 flex items-center justify-center">
                    <div class="lg:w-96 sm:w-10/12 w-11/12 max-w-sm h-full relative aboutImage md:mt-0 mt-6">
                        <img class="w-full object-cover bg-gradient-to-r from-purple-400 to-orange-400 rounded-xl"
                         :src="aboutImg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>