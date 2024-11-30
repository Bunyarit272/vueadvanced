<template>
    <div class="p-4 max-w-4xl mx-auto">
        <div class="space-y-4">
        <!-- <CartCardSkeleton v-for="n in 15" :key="n" /> -->
        </div>
        <div class="space-y-4">
            <CartCard
            v-for="(cartProduct, index) in products"
            :key="index"
            :cartProduct="cartProduct"
            />
            <div class="text-right text-2xl md:text-2xl font-bold py-4">
                ยอดรวม: 2,520.00
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

  import CartCard from '../components/CartCard.vue';
//   import CartCardSkeleton from '../components/CartCardSkeleton.vue'

// Mockup
import  products from '../mockupdata/product.json'

</script>