<template>
    <div class="card md:card-side border-2 hover:bg-gray-300">
        <figure class="p-8">
        <img
            :src="cartProduct.image"
            alt="Card Image"
            class="object-contain w-40 h-40"
        />
        </figure> 
        <div class="card-body">
            <h2 class="card-title w-96">
                <router-link class="link link-hover" :to="`/product/${cartProduct.id}`">{{ cartProduct.title }}</router-link>
            </h2>
            <p>{{ toCurrency(199) }}</p>
            <div class="card-actions">
                <div class="btn-group">
                    <button class="btn btn-primary"> - </button>
                    <button class="btn btn-ghost no-animation">{{ 1 }}</button>
                    <button class="btn btn-primary">+</button>
                </div>
            </div>
        </div>
    </div>   
</template>

<script setup lang="ts">

  // Mockup
  import type { Product } from '../types/product_type'
  import { toCurrency } from '../shared/utils'
  defineProps<{
    cartProduct: Product
  }>()

</script>