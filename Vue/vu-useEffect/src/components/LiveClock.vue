<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';


// create a new dat object that has the current date and time   
const time = ref(new Date());
const greet = ref("");


// local variable to define a timer (refresh the time and date after every second) 
let timer;

// creating the onMounted which executes once at the component mount phase
onMounted(() => {
    timer = setInterval(() => {
        time.value = new Date();
    }, 1000) // refreshing the time after every 1000 milliseconds
})


// watch time and when it changes display the message on console
watch(time, (newTime) => {
        const hour = newTime.getHours();

        if(hour < 12)
            greet.value = "Good Morning";
        else if(hour < 18)
            greet.value = "Good Afternoon";
        else
            greet.value = "Good Evening";
})  

onUnmounted(()=> {
    clearInterval(timer) // clearing the interval once the component is unmounted
})

</script>

<template>
    <h1>{{ greet }}</h1>
    <h2>{{ time.toLocaleTimeString() }}</h2>
    <!-- <h2>{{ time.getHours() + " - "+time.getMinutes() + " - "+ time.getSeconds()  }}</h2> -->
</template>