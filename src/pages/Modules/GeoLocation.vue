<script setup>

    import axiox from "axios"

    const key="AIzaSyBaeKJs0k1bOvUDVQGlWEfOI04Qzzf-e8M";

    const selectCurrentLocation = () =>{
        if(navigator.geolocation){
           let loc = navigator.geolocation.getCurrentPosition(position => {
                console.log(position);
                getCUrrentAddress(position.coords.latitude, position.coords.longitude);
           }, error => {
                console.log(error.message)
           });
        }else{
            console.log("navigator not supported for this browser...");
        }
    }


    const getCUrrentAddress = (lat, long) =>{
        axiox.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${key}`).then((res) => {
            if(res.data.error_message){
                console.log(res.data.error_message)
            }else{
                console.log(res)
            }

        }).catch((err) =>{
            console.log(err.message);
            console.log("error in catch");
        })
    }



    


</script>


<template>
    <div class="bg-red-100 h-screen">
        <div class="glex items-center justify-center">
            <div class="flex place-items-center flex-col gap-5">
                <input type="text" class="px-3 py-2 border border-red-400">
                <button class="px-5 py-2 bg-red-500 text-white" @click="selectCurrentLocation">Get Current Location</button>
            </div>
        </div>

        <div id="map">

        </div>
    </div>
</template>