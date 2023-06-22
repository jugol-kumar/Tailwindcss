<template>
    <div class="bg-slate-200">
        <div class="w-full h-16 bg-orange-300 fixed top-0 z-10">
            <div class="container flex items-center h-full">
                <vue-feather type="menu"/>
            </div>
        </div>

        <div class="flex mt-16 relative">
            <div class="w-72 h-screen bg-slate-50 fixed left-0 overflow-y-scroll">
                <ul>
                    <li v-for="i in 500" :key="i">ites</li>
                </ul>
            </div>
            <div class="flex-1 ms-[19rem] bg-white h-screen">
                main content
            </div>
        </div>
        <footer class="h-16 bg-orange-300 text-center z-10">
            {{ Date }}
        </footer>
    </div>
</template>