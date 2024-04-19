<template>
    <div>
        <h2>Shopping Cart</h2>
        <ul>
            <li v-for="item in cart" :key="item.id">
                {{ item.name }} - Quantity: {{ item.quantity }} - Price: {{ item.price * item.quantity }}
            </li>
        </ul>
        <p>Total: {{ cartTotal }}</p>
    </div>
</template>

<script setup>
useHead({
    title: "TrendyTreehugger | ตะกร้าสินค้า",
    meta: [
        { name: "description", content: "ร้านค้าเเฟชั่น" }
    ]
})
</script>
<script>
export default {
    props: ['cart', 'cartTotal']
}
</script>


<style scoped></style>