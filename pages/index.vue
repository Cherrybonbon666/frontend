<template>
    <div class="container">
        <div v-for="product in data.products">
            <img :src=product.thumbnail>
            <NuxtLink :to="`/products/${product.id}`">
                <h4 class="title">{{ product.title }}</h4>
                <h4 class="price">${{ product.price }}</h4>
            </NuxtLink>


        </div>
    </div>
</template>

<script setup>
useHead({
    title: "TrendyTreehugger | หน้าเเรกของเว็บไซต์",
    meta: [
        { name: "description", content: "ร้านค้าเเฟชั่น" }
    ]
})
const { data: data } = await useFetch('https://dummyjson.com/products?limit=20')
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.container div {
    width: 300px;
    height: 350px;
    margin: 10px 10px;
    background: #638889;
    padding-bottom: 10px;
    border-radius: 10px;

}

.title {
    color: white;
    margin-left: 10px;
    margin-bottom: -20px;
    margin-top: -10px;
}

.price {
    color: white;
    margin-left: 10px;
}

.container div:hover {
    background: #9DBC98;
}

img {
    padding: 10px;
    width: 280px;
    height: 300px;

}

a {
    text-decoration: none;
}
</style>