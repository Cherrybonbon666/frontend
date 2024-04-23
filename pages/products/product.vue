<template>
    <div class="background">
        <div class="head-con">

        </div>
        <div class="container">
            <div v-for="product in data.products">
                <img :src=product.thumbnail>
                <NuxtLink :to="`/products/${product.id}`">
                    <h4 class="title">{{ product.title }}</h4>
                    <h4 class="price">${{ product.price }}</h4>
                </NuxtLink>
                <button type="button" onclick="#">Add to cart</button>
            </div>
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
<script>

</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.background {
    background-color: #FFF9ED;
}

.head-con {
    text-align: center;
    padding: 2rem;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px 20px;
}

.container div {
    width: 300px;
    height: 350px;
    margin-bottom: 10px;
    background: #FFF9ED;
}

.title {
    color: #333;
    margin-left: 10px;
    margin-top: -10px;
}

.price {
    color: #333;
    margin-left: 10px;
}

.container div:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

img {

    padding: 10px;
    width: 300px;
    height: 300px;

}

a {
    text-decoration: none;
}
</style>