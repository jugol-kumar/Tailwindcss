<script setup>
    import Bot from '@/pages/protfollue/Bot.vue';
    import Navbar from '@/pages/protfollue/Navbar.vue';
    import Hero from '@/pages/protfollue/Hero.vue';
    import About from '@/pages/protfollue/About.vue';
    import Skills from '@/pages/protfollue/Skills.vue';
    import HireMe from '@/pages/protfollue/HireMe.vue';
    import Project from '@/pages/protfollue/Project.vue';
    import Contact from '@/pages/protfollue/Contact.vue';

    import { onBeforeUnmount, onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router'
    const route = useRoute()

    onMounted(() => {
        updateBodyClass(route.path)
    })

    const updateBodyClass = (path) => {
        const body = document.body
        if (path === '/protfollue') {
            body.classList.add('bg-gray-900', 'text-gray-100')
        } else {
            body.classList.remove('bg-gray-900', 'text-gray-100')
        }
    }

    onBeforeUnmount(() => {
        const body = document.body
        body.classList.remove('bg-gray-900', 'text-gray-100')
    })

</script>


<template>
    <Bot/>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <HireMe/>
    <Project/>
    <Contact/>
</template>