<template>

<div class="text-gray-800 min-h-screen  bg-gray-100 antialiased">

    
    <span class="block p-32">
        <RouterLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
        </RouterLink>
    </span>


    <div class="flex flex-col justify-center py-6 ">    
        <div class="relative py-3 sm:w-96 mx-auto">
            <span class="text-2xl font-light">Login Your Account</span>
            <div class="mt-4 bg-white shadow-md rounded-lg text-center">
                <div class="h-2 bg-indigo-400 rounded-t-md"></div>
                <div class="px-8 py-6 text-left">
                    <label class="block font-semibold">Username Or email</label>
                    <input type="text" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 focus:ring-1 focus:ring-indigo-600 focus:outline-none hover:outline-none rounded-md" >
       
                     
                    <label class="block font-semibold">Password</label>
                    <input type="text" placeholder="Email" class="form-control" >

                    <div class="flex items-center justify-between">
                        <button class="mt-2 btn-primary">Login</button>
                        <span class="text-sm hover:underline">forgot password?</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>