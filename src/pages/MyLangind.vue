<template>
  <div class="">
    <div class="container text-slate-800 h-screen">
      <header class="py-8">
        <div class="flex justify-between items-center">
          <h1 class="text-4xl font-bold text-purple-500">Jugol</h1>
          <ul>
            <li>Basic Components</li>
          </ul>
        </div>
      </header>

      <section class="py-16 flex flex-col lg:flex-row  gap-20">
        <section class="flex-1">
          <h1 class="text-6xl font-semibold leading-tight">Welcome To First Landing Page</h1>
          <p class="text-xl text-purple-500 mt-5">Decembor, 2023 - Bangladesh</p>
          <p class="mt-5 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga dolorum provident aperiam, omnis repudiandae fugit, rem magni magnam sequi sapiente. Accusamus repudiandae voluptatibus deleniti, fuga consequatur maiores provident libero fugiat ea in, quod non pariatur explicabo hic cumque omnis esse distinctio fugit! Possimus officia ut eligendi incidunt molestiae. Expedita.</p>
        </section>

        <section class="max-w-lg flex-1">
          <div class="max-w-lg bg-white shadow-lg rounded-lg">
            <div class="bg-purple-500 grid p-8 place-items-center rounded-t-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-white">
                <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
              </svg>
            </div>
            <div class="p-10">
              <p>Get Notified All The Update</p>
              <form action="" class="flex max-sm:flex-col max-sm:gap-3 mt-3">
                <input type="email" class="px-4 sm:rounded-r-none py-2 border rounded-md border-gray-300 hover:border-purple-400 flex-grow focus:outline-none focus:border-purple-500 focus:border-2" placeholder="e.g Email@mail.com">
                <button class="bg-purple-500 sm:rounded-l-none text-white p-2 rounded-md hover:bg-purple-400 transition font-semibold">Notify Me</button>
              </form>
            </div>
          </div>
        </section>
      </section>
      <footer class="">
        <ul class="flex gap-6 text-stone-500 justify-center">
          <li><a href="">About Us</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Pricacy Policy</a></li>
        </ul>
      </footer>
    </div>
  </div>

</template>