<script setup>
    import Tooltip from "@/components/Tooltip.vue"
</script>


<template>
    <div class="flex bg-gray-100 font-sans text-gray-900">
        <aside class="flex flex-col items-center w-20 h-screen border-r border-gray-200 bg-white">
            <div class="h-18 w-full flex items-center justify-center border-b border-gray-200">
                <img src="@/assets/images/bard.png" alt="">
            </div>
            <nav class="flex flex-1 flex-col gap-y-4 pt-10">
                <a href="" class="relative flex items-center justify-center rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50 group">
                    <vue-feather class="text-gray-400 group-hover:text-blue-600" type="plus-square" size="24"/>
                    <Tooltip class="group-hover:block delay-200 transition">
                        Add element <span class="text-gray-400">(A)</span>
                    </Tooltip>
                </a>
                
                <a href="" class="relative flex items-center justify-center rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50 group">
                    <vue-feather class="text-gray-400 group-hover:text-blue-600" type="command" size="24"/>
                    <Tooltip class="group-hover:block delay-200 transition">
                        Theme <span class="text-gray-400">(T)</span>
                    </Tooltip>
                </a>
                
                <a href="" class="relative flex items-center justify-center rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50 group">
                    <vue-feather class="text-gray-400 group-hover:text-blue-600" type="umbrella" size="24"/>
                    <Tooltip class="group-hover:block delay-200 transition">
                        Temprature <span class="text-gray-400">(C)</span>
                    </Tooltip>
                </a>
                
                <a href="" class="relative flex items-center justify-center rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50 group">
                    <vue-feather class="text-gray-400 group-hover:text-blue-600" type="image" size="24"/>
                    <Tooltip class="group-hover:block delay-200 transition">
                        Images <span class="text-gray-400">(I)</span>
                    </Tooltip>
                </a>
            </nav>
            <div class="flex flex-col gap-y-8 py-10">
                <a href="" class="relative flex items-center justify-center rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50 group">
                    <vue-feather class="text-gray-400 group-hover:text-blue-600" type="info" size="24"/>
                    <Tooltip class="group-hover:block delay-200 transition">
                        Inormation <span class="text-gray-400">(F)</span>
                    </Tooltip>
                </a>   
                <a href="" class="relative flex items-center justify-center rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50 group">
                    <vue-feather class="text-gray-400 group-hover:text-blue-600" type="settings" size="24"/>
                    <Tooltip class="group-hover:block delay-200 transition">
                        Settings <span class="text-gray-400">(S)</span>
                    </Tooltip>
                </a>

                <button class="w-10 h-10 ring-2 ring-blue-600 rounded-full overflow-hidden">
                    <img class="" src="@/assets/images/user.avif" alt="">
                </button>

            </div>
        </aside>

        <div class="h-screen flex-1 flex flex-col">
            <div class=" flex items-center h-18 bg-white border-b border-gray-200 px-8 gap-x-6">
                <button class="flex items-center justify-center rounded-xl bg-gray-100 p-2">
                    <vue-feather type="chevron-left" class="stroke-current text-gray-400"/>
                </button>

                <button class="flex flex-col bg-gray-100 px-6 py-2 border border-gray-200 rounded-lg px8">
                    <div class="flex gap-x-2 items-center">
                        <span class="text-sm text-gray-900">Page: Homepage - Dipa</span>
                        <vue-feather class="text-gray-400" size="20" type="chevron-down"/>
                    </div>
                    <div class="text-xs text-gray-400">https://dipainhouse.com/</div>  

                </button>

            </div> 

        </div>
        <aside class="h-screen w-[300px] bg-white border-l border-gray-200">
            
        </aside>

    </div>
</template>