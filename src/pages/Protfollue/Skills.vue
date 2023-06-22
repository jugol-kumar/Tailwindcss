<script setup>
import {usePortfolio} from "@/composables/usePortfolio.js"
import Tooltip from "@/components/Tooltip.vue"
const {tools, skills} = usePortfolio();

</script>

<template>
    <section id="skills" class="py-10 bg-gray-800 relative">
        <div class="mt-8 text-gray-100 text-center">
            <h4 class="text-4xl font-semibold">My <span class="text-gradient">Skills</span></h4>
            <p class="md:text-2xl text-xl my-3 text-gray-600">My Knoladge</p>
        </div>

        <div class="flex mt-12 gap-10 justify-between md:px-20 px-10 md:flex-row flex-col">

            <div class="flex-1">
                <h4>Skills</h4>
                <div class="flex flex-col mt-12 gap-5">
                    <div  v-for="(item, i) in skills" :key="item.name+'-'+i">
                        <h4>{{ item.name }}</h4>
                        <div class="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                            <div class="flex flex-col justify-center overflow-hidden bg-gradient-to-r from-purple-400 to-orange-400 rounded-full text-xs text-white text-center animate-progress" 
                            role="progressbar" :style="`width:${item.skill}`" :aria-valuenow="item.skill" aria-valuemin="0" aria-valuemax="100">{{ item.skill }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1">
                <h4>Using Tools</h4>
                <div class="grid md:grid-cols-4 grid-cols-3 gap-4 mt-12">
                    <div v-for="(item, i) in tools" :key="item.name+'-'+i">
                        <div class="relative group w-full h-20 grid place-items-center bg-rose-100 rounded-lg shadow-md">
                            <div class="w-12">
                                <img :src="item.icon" alt="">
                            </div>
                            <Tooltip class="group-hover:block delay-200 transition">
                                {{ item.name }}
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>