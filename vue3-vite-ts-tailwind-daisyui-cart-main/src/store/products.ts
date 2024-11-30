import { defineStore } from 'pinia'

const fakeStoreUrl = 'https://fakestoreapi.com'
import type { Product } from '../types/product_type'


export const useProductStore = defineStore({ id: 'products',

    state:()  => ({
        
    }),

    getters: {

        // List Products


        // Loaded Products

    },

    actions: {

        // Fetch All Products

    }

})