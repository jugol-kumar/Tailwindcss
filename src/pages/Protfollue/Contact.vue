<script setup>
    import IconEmail from '@/components/icons/IconEmail.vue';
    import IconPhone from '@/components/icons/IconPhone.vue';
    import IconLocation from '@/components/icons/IconLocation.vue';
    import IconWhatsapp from '@/components/icons/IconWhatsapp.vue';
    import IconGithub from '@/components/icons/IconGithub.vue';

    const contacts = [
        {iconComponent:IconEmail, data:"jugolkumar23@gmail.com"},
        {iconComponent:IconPhone, data:"+88 017 23 - 71 79 33"},
        {iconComponent:IconWhatsapp, data:"017 23 - 71 79 33"},
        {iconComponent:IconLocation, data:"Dhaka, Merul-Badda Dhaka-1200"},
    ]

</script>

<template>
    <section id="contact" class="mt-10 py-10 bg-slate-800">


        <div class="mt-8 text-gray-100 text-center">
            <h4 class="text-4xl font-semibold">Contact <span class="text-gradient">Us</span></h4>
            <p class="md:text-2xl text-xl my-3 text-gray-600">Message Me here</p>
        </div>

            
            <div class="container flex justify-between w-full bg-slate-700 rounded-xl mx-auto">
                <div class="flex flex-1 flex-col p-4 w-4/5">
                    <input type="text" class="bg-slate-800 px-2 py-4 rounded-xl focus:outline-none checked:outline-none" placeholder="e.g My Name Is">
                    <input type="text" class="bg-slate-800 px-2 py-4 rounded-xl mt-2 focus:outline-none checked:outline-none" placeholder="e.g My Message Subject Is">
                    <textarea class="bg-slate-800 px-2 py-4 rounded-xl mt-2 focus:outline-none checked:outline-none" placeholder="e.g Explain here message" rows="8"></textarea>
                    <div class="mt-3">
                        <button class="btn-prot-main mb-5 ms-3">Contact Us</button>
                    </div>
                </div>  

                <div class="bg-slate-700 flex p-5 items-start flex-col gap-4">
                    <div class="flex items-center gap-3" v-for="item in contacts" :key="item.data">
                        <div class="w-14 h-14 min-gradient-bg rounded-full flex items-center justify-center">
                            <Component :is="item.iconComponent" class="text-2xl"/>
                        </div>
                        <h2>{{ item.data }}</h2>  
                    </div>
                </div>
            </div>

    </section>
</template>