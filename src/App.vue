
<script setup>
  import TopBar from '@/components/TopBar.vue'
</script>

<template>
  
  <div class="px-16 py-8 flex items-center justify-between bg-slate-400 w-full">
    <div>
      <img src="../src/assets/logo.svg" alt="">
    </div>
    <ul class="flex gap-5 items-center">
      <li>Login</li>
      <li>Contact Us</li>
    </ul>
  </div>




  <RouterView/>
</template>

