<template>
    <div class="container">
        <div v-for="product in data.products">
            <img :src=product.thumbnail>
            <NuxtLink :to="`/products/${product.id}`">
                <h2 class="title">{{ product.title }}</h2>
            </NuxtLink>

            <button @click="addToCart">Add to Cart</button>
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
export default {
    props: ['product'],
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.product);
        }
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.head-con {
    text-align: center;
    margin: 2rem;
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
    background: #fff;
}

.title {
    color: #333;
    margin-left: 10px;
    margin-top: -10px;
}

.price {
    color: orange;
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