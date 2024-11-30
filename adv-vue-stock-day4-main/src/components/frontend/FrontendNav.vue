<template>
    <header class="w-full fixed bg-emerald-700 md:bg-white dark:bg-zinc-900">
        <div class="container md:flex md:items-center md:justify-between px-4 py-4 mx-auto md:my-2">
            
            <div class="flex items-center justify-between">
                <div>
                    <router-link to="/"><img :src="img_logo" alt="Logo" /></router-link>
                </div>

                <div class="md:hidden">
                    <a href="#menu" @click="toggleMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </a>
                </div>
            </div>


            <div class="space-x-6 font-medium md:block">
                
               <ul 
               :class="showMenu ? 'flex' : 'hidden'"
               class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-3 md:mt-0 text-center">
                    <li>
                        <router-link to="/" class="transition-colors duration-200 text-gray-100  dark:text-white  md:text-black hover:text-emerald-700">Home</router-link>
                    </li>
                    <li @click="toggleDropdownMenu">
                        <router-link to="/features" class="transition-colors duration-200 text-gray-100  dark:text-white md:text-black hover:text-emerald-700">Features</router-link>

                        <!-- Submenu -->
                        <ul 
                            v-show="show"
                            ref="target"
                            class="
                            md:absolute 
                            md:bg-white 
                            w-48 
                            mt-2 
                            mx-auto
                            bg-emerald-800
                            rounded-md 
                            md:text-start 
                            shadow-lg 
                            ring-1 
                            ring-black 
                            ring-opacity-5">
                            <li>
                                <a href="#Incredible" class="md:text-black block px-4 py-2 md:hover:bg-gray-100">Incredible</a>
                            </li>
                            <li>
                                <a href="#Fantastic" class="md:text-black block px-4 py-2 md:hover:bg-gray-100">Fantastic</a>
                            </li>
                            <li>
                                <a href="#Intelligent" class="md:text-black block px-4 py-2 md:hover:bg-gray-100">Intelligent</a>
                            </li>
                        </ul>

                    </li>
                    <li>
                        <router-link to="/services" class="transition-colors duration-200 text-gray-100  dark:text-white md:text-black hover:text-emerald-700">Services</router-link>
                    </li>
                    <li>
                        <router-link to="/testimonials" class="transition-colors duration-200 text-gray-100  dark:text-white md:text-black hover:text-emerald-700">Testimonials</router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="transition-colors duration-200 text-gray-100  dark:text-white md:text-black hover:text-emerald-700">Contact</router-link>
                    </li>

                    <li>
                        <router-link to="/getstarted">
                            <button class="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold">Get Started ({{ count }})</button>
                        </router-link>
                    </li>

                    <li>
                        <button class="px-4 py-2 text-black dark:text-white" @click="toggleDark()">{{ isDark ? 'Light' : 'Dark' }}</button>
                    </li>

               </ul> 

            </div>  

        </div>
    </header>
</template>

<script setup lang="ts">

    import { ref } from 'vue'
    import { useDark, useToggle, onClickOutside  } from '@vueuse/core'

    // Import counter.ts
    import { useCounterStore } from '@/store/counter'

    // Import Pinia
    import { storeToRefs } from 'pinia'

    // Object store
    const store = useCounterStore()

    // หรือจะเขียนแบบ destructuring
    const { count } = storeToRefs(store)

    // Toggle Menu
    const showMenu = ref(false)

    // Method Toggle Menu
    const toggleMenu = () => showMenu.value = !showMenu.value

    // Toggle Dropdown Menu
    const show = ref(false)

    // Method Toggle Dropdown Menu
    const toggleDropdownMenu = () => show.value = !show.value

    // Hide Dropdow Menu when click outside
    const target = ref(null)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClickOutside(target, (event) => {
        // console.log(event)
        show.value = false
    })

    // Dark Mode
    const isDark = useDark()
    const toggleDark = useToggle(isDark)
    

    // Choose Logo
    const img_logo = isDark ? "./src/assets/img/logo-white.svg":"./src/assets/img/logo.svg"

</script>

<style scoped>

</style>