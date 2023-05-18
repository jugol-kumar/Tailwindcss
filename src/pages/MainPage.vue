<script setup>
const routes = [
    {name:'Landing 1', url:'/landing-1', icon:null},
    {name:'Login Form', url:'/login-form', icon:null},
    {name:'Flex Box', url:'/flex-box', icon:null},
    {name:'Grid', url:'/grid', icon:null},
    {name:'Responsive', url:'/responsive', icon:null},
    {name:'Filtering', url:'/filtering', icon:null},
    {name:'Price Plan', url:'/price-plan', icon:null},
    {name:'Grid Blog', url:'/grid-blog', icon:null},
]


</script>

<template>
    <div class="h-screen">
        <div class="p-12">
            <div class="mt-10 grid lg:grid-cols-8 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-6 ">
                <RouterLink class="focus:outline-none focus:rounded-lg focus:ring-2 focus:ring-rose-200" :to ="route.url" v-for="route in routes">
                    <div class="w-full h-20 grid place-items-center dark:shadow-lg bg-rose-100 dark:bg-slate-800 dark:text-rose-100 rounded-lg shadow-md">
                       <h1>{{ route.name }}</h1>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>