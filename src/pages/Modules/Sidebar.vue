<script setup>
    import {ref} from 'vue'
    import IconBoxCheck from "@/components/icons/IconBoxCheck.vue"
    import IconStar from "@/components/icons/IconStar.vue"
    import IconMenu from "@/components/icons/IconMenu.vue"
    import IconNotefication from "@/components/icons/IconNotefication.vue"
    import IconDashboard from "@/components/icons/IconDashboard.vue"

    const isShowSidebar = ref(true)
    const isSubMenu = ref(false)
    const hideMenu = () => isShowSidebar.value = !isShowSidebar.value;
    const openSubmenu = () => isSubMenu.value = !isSubMenu.value;
    const isBgImage = ref(true)

    const menus = [
        {title : "Dashboard", icon:'grid'},
        {title : "Autorization", icon:'unlock'},
        {title : "Users", icon:'users'},
        {title : "Products"},
        {title : "Orders"},
        {
            title : "Projects",
            submenu: true,
            submenuItems:[
                {title : "Submenu 1"},
                {title : "Submenu 1"},
                {title : "Submenu 1"},
                {title : "Submenu 1"}
            ]
        },
        {title : "Analisys"},
        {title : "Profile"},
        {title : "Business"},
        {title : "Transactions"},
        {title : "Settings"},
        {title : "Logout"},
    ]

</script>

<template>
    <div class="relative flex flex-col bg-no-repeat  bg-center bg-gray-300" :class="{ 'bg-image bg-cover' : isBgImage }">

        <div class="flex p-5" :class="{'backdrop-blur-xl' : isBgImage}">       
            <!-- <div class="w-32 h-32 from-orange-500 to-yellow-100 bg-gradient-to-r absolute top-2 left-2 rounded-md backdrop-blur-2xl">
            </div> -->

            <div class="p-5 h-screen bg-[#fdf8f84f] rounded-xl border border-[#4e4e4e54] backdrop-blur-xl shadow-lg
             border-slate-500 border text-white drop-shadow-2xl me-5 duration-300" :class="isShowSidebar ? 'w-3/12' : 'w-1/12'">
                <div class="flex gap-4">
                    <img src="@/assets/images/bard.png" class="w-20">
                    <h2 class="text-xl font-bold uppercase duration-300" :class="{'scale-0' : !isShowSidebar }">Ju<span class="text-emerald-200">g</span>ol <!--Ku<span class="text-emerald-200">m</span>ar--></h2>
                </div>  

                <div class="mt-8">
                    <ul :class="{'flex flex-col items-center': !isShowSidebar,}">
                        <div v-for="menu in menus" :key="menu.title">
                            <li :class="{'px-4 py-2' : !isShowSidebar}" v-on="isShowSidebar ? { click: openSubmenu } : {}" class="text-sm flex items-center
                            gap-x-2 p-2 cursor-pointer active:bg-white hover:bg-white hover:text-black rounded-md duration-200" 
                           >
                                <span class="block float-left mt-1">
                                    <VueFeather :type="menu.icon" size="16"/>
                                </span>
                                <span :class="{'hidden' : !isShowSidebar }" class="text-base font-medium flex-1" href="">
                                    {{  menu.title }}
                                </span>
                                
                                <span v-if="menu.submenu && isShowSidebar">
                                    <VueFeather :type="isSubMenu ? 'chevron-up' : 'chevron-down'" size="15"/>
                                </span>
                            </li>
                            <ul class="ms-11 duration-500" v-if="isSubMenu && isShowSidebar">
                                <li v-for="subMenu in menu.submenuItems" :key="subMenu.title" :class="{'px-4 py-2' : !isShowSidebar}" class="text-sm flex items-center
                            gap-x-2 p-2 cursor-pointer active:bg-white hover:bg-white hover:text-black rounded-md duration-200" 
                           >{{ subMenu.title }}</li>
                            </ul>
                        </div>

                    </ul>
                </div>

            </div>
            
            <div class="w-full">
                <header class="h-20 shadow-sm flex justify-between items-center px-5 backdrop-style text-white">
                    <ul class="flex items-center gap-2">
                        <li>
                            <vue-feather :type=" isShowSidebar ? 'menu' : 'x'"
                             class="text-3xl cursor-pointer duration-500"
                             :class="isShowSidebar ? 'rotate-[360deg]' : ''"
                              @click="hideMenu"/></li>
                    </ul>
                    <ul class="flex items-center gap-4">
                        <li><IconBoxCheck class="text-3xl"/></li>
                        <li><IconStar class="text-3xl"/></li>
                        <li><IconNotefication class="text-3xl"/></li>
                        <li>
                            <RouterLink to="#">
                                <img src="@/assets/images/user.avif" class="w-10 rounded-full ring-1 p-1" alt="">
                            </RouterLink>
                        </li>
                    </ul>
                </header>
                <main class="mt-5 first-letter:w-full">
                    <div class="flex gap-6">
                        <div class="w-1/4 h-20 bg-white shadow-md rounded-xl"></div>
                        <div class="w-1/4 h-20 bg-white shadow-md rounded-xl"></div>
                        <div class="w-1/4 h-20 bg-white shadow-md rounded-xl"></div>
                        <div class="w-1/4 h-20 bg-white shadow-md rounded-xl"></div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped>

.bg-image{
    background-image: url('../src/assets/images/app-bg.jpg')
}

</style>