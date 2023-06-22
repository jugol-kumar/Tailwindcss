<script setup>
import {usePortfolio} from '@/composables/usePortfolio.js'
const {aboutHireme, HireMe} = usePortfolio();
</script>


<template>
    <section id="skills" class="py-10 bg-gray-800 relative">
        <div class="mt-8 text-gray-100 text-center">
            <h4 class="text-4xl font-semibold">Hire <span class="text-gradient">Me</span></h4>
            <p class="md:text-2xl text-xl my-3 text-gray-600">Do you have any work ?</p>
        </div>

        <div class="bg-gray-700 relative px-8 py-5 mt-24 rounded-2xl lg:max-w-4xl mx-auto min-h-[24rem] flex items-center gap-6 lg:flex-row flex-col-reverse">
            <div class="lg:text-left text-center">
                <h2 class="text-2xl font-semibold">Do you have any work for me?</h2>
                <p class="max-w-md text-justify text-sm mt-4 text-gray-200 leading-6">
                  {{ aboutHireme }}
                </p>
                <button class="btn-prot-main mt-5">Say Hello !</button>
            </div>
            <img :src="HireMe" alt="" class="lg:h-[32rem] h-80 bottom-0 -right-3 object-cover lg:absolute">
        </div>
    </section>
</template>