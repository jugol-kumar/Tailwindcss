<script setup>
import { ref } from 'vue';

    const myData = ref([
        {id:2, name:"jugol kumar", age:23, dept: "CSE", catId:2},
        {id:6, name:"milon kumar", age:21, dept: "EEE", catId:5},
        {id:5, name:"jugol kumar", age:25, dept: "FOOD", catId:7},
        {id:3, name:"jugol kumar", age:11, dept: "CMS", catId:1},
    ]);


    const filterMyData = (event) =>{
        
    }
    
    // setTimeout(() =>{
    //     myData.value.push({id:6, name:"New Name", age:19, dept: "RAC", catId:9})
    //     alert("thsi is passed")
    // }, 3000)



</script>


<template>



<div class="h-full bg-red-200">

    <div class="container mx-auto p-12">

        <input type="text" 
        @input="filterMyData"
        class="search-box" placeholder="What are you looking for...">
        <div v-for="item in myData" class="shadow-sm mb-3 p-5 bg-white max-w-2xl rounded-md">
            <h2 class="text-gray-600 text-2xl font-semibold capitalize">{{  item.name }}</h2>
            <p>Age: <span>23</span></p>
            <span class="inline-block text-sm rounded-full px-5 mt-2 border border-red-300 text-red-500">CSE</span>
        </div>
    </div>

</div>

</template>