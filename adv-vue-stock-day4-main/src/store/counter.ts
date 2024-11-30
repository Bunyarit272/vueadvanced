import { defineStore } from 'pinia'

export const useCounterStore = defineStore("counter", {

    state: () => {
        return{
            count: 0
        }
    },

    // ไว้เขียนฟังก์ชันจัดการตัวแปรใน state
    actions: {
        increment(val: number){
            this.count += val
        },
        decrement(val: number){
            this.count -= val
        },
        async waitAndAdd() {
            setTimeout(() => {
                this.count++
            }, 3000)
        }
    },

    // ไว้กำหนดค่าของตัวแปรแบบอัตโนมัติ
    getters: {
       doubleCount: (state) => state.count * 2
    },
    

})