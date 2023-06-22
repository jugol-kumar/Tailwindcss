<template>
    <div class="grid place-items-center">
        <input type="text" v-model="telNumber" class="w-72 px-2 py-4 border-red-100 border-2" id="telephone">
    </div>
</template>


<script setup>
import { onMounted } from "vue";
import intlTelInput from 'intl-tel-input'


import {ref} from 'vue'


const telNumber = ref()


onMounted(() =>{
    const input = document.querySelector("#telephone");
    intlTelInput(input, {
      // any initialisation options go here
          preferredCountries: ["in", "us", "ca"],
    });
})
    
    
</script>