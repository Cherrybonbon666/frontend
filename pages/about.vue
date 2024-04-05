<template>
    <div class="container">
        <h1>เกี่ยวกับเรา</h1>
        <img src="/image/about.svg">
    </div>
</template>

<script setup>
useHead({
    title:"Pete Shop | เกี่ยวกับเรา",
    meta: [
        {name:"description",content:"ร้านค้ามอุปกรณ์คอมพิวเตอร์,เสื้อผ้า"}
    ]
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    width: 500px;
    height: 500px;
}
</style>