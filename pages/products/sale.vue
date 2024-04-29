<template>
    <div class="background">
        <div class="head-con"></div>
        <div class="container">
            <div v-for="product in products" :key="product.sale_id">
                <img :src="product.sale_pic" alt="Product Image">
                <h4 class="title">{{ product.sale_name }}</h4>
                <div class="price">
                    <span class="old-price">Old Price: {{ product.old_price }}</span>
                    <span class="sale-price">Sale Price: {{ product.sale_price }}</span>
                </div>
                <button type="button" @click="addToCart(product)">Add to cart</button>
                <button type="button" @click="addToFavorites(product)">Add to favorites</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const products = ref([]);
        const favorites = ref([]); // Add a new ref for favorites

        onMounted(async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/sale');
                products.value = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        });

        const addToCart = (product) => {
            // Implement your logic to add the product to the cart
            console.log('Adding product to cart:', product);
        };

        const addToFavorites = (product) => {
            // Implement your logic to add the product to favorites
            favorites.value.push(product);
            console.log('Adding product to favorites:', product);
        };

        return { products, addToCart, addToFavorites, favorites };
    },
};
</script>

<style scoped>
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
    justify-content: space-around;
    margin: 0px 20px;
}

.container div {
    width: calc(33.33% - 20px);
    margin-bottom: 20px;
    background: #FFF9ED;
    box-sizing: border-box;
    padding: 10px;
}

.container div img {
    width: 100%;
    height: auto;
}

.title {
    color: #333;
    margin-top: 10px;
}

.price {
    color: #333;
}

.old-price {
    text-decoration: line-through;
    margin-right: 10px;
}

.sale-price {
    color: red;
}

.container div:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

a {
    text-decoration: none;
}
</style>
