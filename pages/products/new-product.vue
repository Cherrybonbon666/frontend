<template>
    <div>
        <h1>New Arrivals</h1>
        <product :product="product" />
    </div>
</template>

<script setup>
useHead({
    title: "TrendyTreehugger | สินค้า",
    meta: [
        { name: "description", content: "ร้านค้าเเฟชั่น" }
    ]
})
import product from '/pages/products/product.vue';
</script>

<style scoped></style>