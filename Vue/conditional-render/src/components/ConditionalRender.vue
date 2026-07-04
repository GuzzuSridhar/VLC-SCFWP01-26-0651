
<script setup>
import {ref } from "vue";

// declare a variable using ref 
 const isLoggedIn = ref(true)

//  function to toggle the login state
const toggleLogin = () => {
    isLoggedIn.value = !isLoggedIn.value
}
 </script>

 <template>
    <div>
        <!-- if the value of isLoggedIn is false the element is removed from DOM -->
        <h1 v-if ="isLoggedIn" > Welcome Back User!</h1>
        <h1 v-else> Please login to continue</h1>
        <button @click = "toggleLogin"> {{ isLoggedIn ? "Logout" : "Login" }} </button>

        <!-- v-show -->
         <p v-show = "isLoggedIn">  paid content visible  </p>

    </div>
 </template>