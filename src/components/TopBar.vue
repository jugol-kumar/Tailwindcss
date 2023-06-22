<script setup>
import {ref, onMounted} from 'vue'
import IconMoon from '@/components/icons/IconMoon.vue';
import IconSun from '@/components/icons/IconSun.vue';
import Logo from "@/components/Logo.vue"
const currentTheme = ref(localStorage.getItem('theme'));
const theme = (theme) => {
    if(currentTheme.value === 'dark'){
        document.documentElement.classList.remove("dark")
        localStorage.setItem('theme', 'light')
        currentTheme.value = 'light'
    } else{
        document.documentElement.classList.add("dark")
        localStorage.setItem('theme', 'dark')
        currentTheme.value = 'dark'
    }
}

onMounted(() => document.documentElement.classList.add(localStorage.getItem('theme')))



</script>

<template>
    <div class="px-16 py-8 flex items-center justify-between bg-slate-50 w-full">
        <div>
            <Logo/>
        </div>
        <ul class="flex gap-5 items-center">
            <li>Login</li>
            <li>Contact Us</li>
            <li>
                <button @click="theme('dark')" v-if="currentTheme==='dark'">
                    <IconSun />    
                </button>

                <button @click="theme(null)" v-else>
                    <IconMoon />
                </button>
            </li>
        </ul>
    </div>
</template>




