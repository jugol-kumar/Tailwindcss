<script setup>
import {ref, onMounted} from 'vue'
import IconMoon from '@/components/icons/IconMoon.vue';
import IconSun from '@/components/icons/IconSun.vue';
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
    
</template>


<!-- <ul class="flex items-center gap-2">
    <li>
        <button @click="theme('dark')" v-if="currentTheme==='dark'">
            <IconSun />    
        </button>

        <button @click="theme(null)" v-else>
            <IconMoon />
        </button>
    </li>

</ul> -->