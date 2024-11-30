<template>
    <div class="p-4">
        <div class="lg:card-compact bordered">
            <figure class="px-10 pt-0">
                <img
                :src="productStore.find(x => x.id === pid )?.image"
                alt="Card Image"
                class="object-contain w-1/4 h-full mx-auto"
                />
            </figure>
            <div class="card-body max-w-4xl mx-auto mt-8">
                <h2 class="card-title text-2xl" v-text="productStore.find(x => x.id === pid )?.title"></h2>
                <p v-text="productStore.find(x => x.id === pid )?.description"></p>
                <p class="mt-4 text-2xl mb-4">{{ toCurrency(productStore.find(x => x.id === pid)?.price as number) }}</p>
                <div class="card-actions">
                <button class="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>&nbsp;
                        เพิ่มลงรถเข็น
                </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

// Mockup
import { toCurrency } from '../shared/utils'
import  productStore from '../mockupdata/product.json'

const route = useRoute()
let pid = Number(route.params.productId)

</script>