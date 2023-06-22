<script setup>
  import IconCheckCircle from '@/components/icons/IconCheckCircle.vue'
  import IconXCircle from '@/components/icons/IconXCircle.vue'
  import IconHome from '@/components/icons/IconHome.vue'
</script>

<template>
    <div class="bg-slate-100 dark:bg-slate-900">
        <div class="container">
            <div class="pt-10">
                <RouterLink to="/" class="bg-gray-300 text-white w-16 h-16 rounded-full flex items-center justify-center">
                    <IconHome class="cursor-pointer text-white"/>
                </RouterLink>
            </div>
            <h2 class="text-center p-8 text-4xl dark:text-white">Simple Responsive CSS Grid Layout Tables. Equal Heights & Reversing order on mobile</h2>

            <div class="grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:items-center sm:grid-cols-1 p-6">
                <div class="group order-last sm:order-last bg-white rounded-md shadow-md">
                    <div class="p-10 text-center">
                        <h2 class="text-2xl font-semibold">Free</h2>
                    </div>
                    <div class="p-8 bg-blue-950 group-hover:bg-yellow-300 transition">
                        <h2 class="text-2xl font-semibold text-white text-center  group-hover:text-black">$100/year</h2>
                    </div>
                    <div class="p-6">
                        <p class="text-center text-sm">Best For Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    </div>

                    <div class="text-center flex justify-center">
                        <div class="border-t border-b w-[80%] py-5">
                            <button class="py-2 px-16 text-lg font-semibold hover:bg-blue-950 hover:text-white transition rounded-full border border-gray-500 bg-yellow-300">Sign Up</button>
                        </div>
                    </div>
                    <div class="p-5">
                        <ul class="flex flex-col gap-3">
                            <li class="flex gap-4" v-for="i in 5">
                                <IconCheckCircle class="text-green-500" v-if="i%2"/>
                                <IconXCircle class="text-red-500" v-else/>
                                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            
            
                <div class="group order-2 sm:order-last bg-white rounded-md shadow-md">
                    <div class="p-10 text-center">
                        <h2 class="text-2xl font-semibold">Basci</h2>
                    </div>
                    <div class="p-8 bg-blue-950 group-hover:bg-yellow-300 transition">
                        <h2 class="text-2xl font-semibold text-white text-center  group-hover:text-black">$100/year</h2>
                    </div>
                    <div class="p-6">
                        <p class="text-center text-sm">Best For Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    </div>

                    <div class="text-center flex justify-center">
                        <div class="border-t border-b w-[80%] py-5">
                            <button class="py-2 px-16 text-lg font-semibold hover:bg-blue-950 hover:text-white transition rounded-full border border-gray-500 bg-yellow-300">Sign Up</button>
                        </div>
                    </div>
                    <div class="p-5">
                        <ul class="flex flex-col gap-3">
                            <li class="flex gap-4" v-for="i in 5">
                                <IconCheckCircle class="text-green-500" v-if="i%2"/>
                                <IconXCircle class="text-red-500" v-else/>
                                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="group order-first sm:order-last bg-white rounded-md shadow-md">
                    <div class="p-10 text-center">
                        <h2 class="text-2xl font-semibold">Advanched</h2>
                    </div>
                    <div class="p-8 bg-blue-950 group-hover:bg-yellow-300 transition">
                        <h2 class="text-2xl font-semibold text-white text-center  group-hover:text-black">$100/year</h2>
                    </div>
                    <div class="p-6">
                        <p class="text-center text-sm">Best For Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    </div>

                    <div class="text-center flex justify-center">
                        <div class="border-t border-b w-[80%] py-5">
                            <button class="py-2 px-16 text-lg font-semibold hover:bg-blue-950 hover:text-white transition rounded-full border border-gray-500 bg-yellow-300">Sign Up</button>
                        </div>
                    </div>
                    <div class="p-5">
                        <ul class="flex flex-col gap-3">
                            <li class="flex gap-4" v-for="i in 5">
                                <IconCheckCircle class="text-green-500" v-if="i%2"/>
                                <IconXCircle class="text-red-500" v-else/>
                                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>