<template>
    <div>
        <div>
            <h2>Favorites</h2>
            <ul>
                <li v-for="favorite in favorites" :key="favorite.id">
                    {{ favorite.men_name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "TrendyTreehugger | สินค้าที่อยากได้",
    meta: [
        { name: "description", content: "ร้านค้าเเฟชั่น" }
    ]
})
</script>

<style lang="scss" scoped></style>