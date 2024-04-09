<template>
    <div class="container">
        <div v-for="product in data.products">
            <NuxtLink :to="`/products/${product.id}`">
                <h2 class="title">{{ product.title }}</h2>
            </NuxtLink>
            <img :src=product.thumbnail>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "TrendyTreehugger | สินค้าทั้งหมด",
    meta: [
        { name: "description", content: "ร้านค้าเเฟชั่น" }
    ]
})
const { data: data } = await useFetch('https://dummyjson.com/products?limit=12')
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.container div {
    width: 300px;
    height: 300px;
    margin: 30px 15px;
    background: #638889;
    border-radius: 10px;
}

.title {
    color: white;
    text-align: center;
    font-size: 1.2em;
}

.container div:hover {
    background: #9DBC98;
}

img {
    width: 300px;
    height: 300px;
}

a {
    text-decoration: none;
}
</style>