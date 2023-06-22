<script setup>
    const props = defineProps({
        title:{
            type:String,
            required:true,
        }
    })
</script>

<template>
    <div class="absolute hidden inset-y-0 left-12 flex items-center">
        <div class="whitespace-nowrap px-4 py-2 bg-white rounded-md font-semibold drop-shadow-lg text-gray-900">
            <div class="absolute flex inset-y-0 items-center -left-1">
                <div class="h-2 w-2 rotate-45 bg-white"> 

                </div>
            </div>
            <slot/>
        </div>
    </div>
</template>