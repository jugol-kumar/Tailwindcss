<script setup>
import Logo from "@/components/Logo.vue"
import IconMenu from "@/components/icons/IconMenu.vue"
import IconClose from "@/components/icons/IconClose.vue"
import { onMounted, ref } from "vue"

const isStikey = ref(false)
const isOpen = ref(false)
const openMenu = () =>{
    isOpen.value =!isOpen.value
}
onMounted(() =>[
    window.addEventListener("scroll", ()=>{
        const nav = document.querySelector("nav");
        window.scrollY > 0 ? isStikey.value = true :  isStikey.value = false;
    })
])


const navLinks = [
    {name:"Home", link:'/protfollue', id:'#home'},
    {name:"About", link:'/protfollue', id:'#about'},
    {name:"Skills", link:'/protfollue', id:'#skills'},
    {name:"Project", link:'/protfollue', id:'#project'},
    {name:"Contact", link:'/protfollue', id:'#contact'},
]
</script>

<template>
    <nav class="fixed w-full left-0 top-0 z-[999]" :class="isStikey ? 'bg-[#ededed45] backdrop-blur-md text-gray-900' : 'text-white'">
        <div class="flex justify-between items-center">
            <div class="mx-7">
                <Logo/>
            </div>
            <div class="text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full" :class="{'bg-white': !isStikey}">
                <ul class="flex items-center gap-1 text-lg py-2 ">
                    <li class="px-6 hover:text-orange-400" v-for="(item, i) in navLinks" :key="item.name+'-'+i">
                        <a :href="item.id" class="uppercase">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="z-[999] text-3xl lg:hidden m-5" @click="openMenu" :class="{'text-gray-900' : isOpen}">
                <icon-close v-if="isOpen"/>
                <icon-menu v-else/>
            </div>
            <div class="md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300" :class="isOpen ? 'right-0' : 'right-[-100%]'">
                <ul class="flex flex-col items-center gap-10 text-lg py-2 ">
                    <li class="px-6 hover:text-orange-400" v-for="(item, i) in navLinks" :key="item.name+'-'+i">
                        <a :href="item.id" class="uppercase">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>