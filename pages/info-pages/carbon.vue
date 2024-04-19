<template>
    <div class="background">
        <div class="hero1">

            <div class="text1">
                <h1>Track Your Footprint</h1>
                <br>
                <h3>Your Carbon Footprint Today:Number</h3>
            </div>

            <img src="/public/image/foot.png">
        </div>

        <div class="hero2">
            <div class="text2">
                <h1>Track product's carbon footprint</h1>
            </div>

        </div>

        <div class="hero3">
            <div class="text3">
                <h1>Carbon Footprint History</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "TrendyTreehugger | คาร์บอน ฟูทปริ้น เเทรกกิ้ง",
    meta: [
        { name: "description", content: "ร้านค้าเเฟชั่น" }
    ]
})
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.hero1 {
    display: flex;
    padding: 120px 176px;
    justify-content: space-between;
    background-color: #E4E8CC;

    & img {
        width: 512px;
        height: 512px;
    }
}

.text1 {
    margin-top: 100px;
    font-size: 2rem;
}

.hero2 {
    height: 567px;
    background-color: #FFF6CF;
}

.text2 {
    text-align: center;
    padding: 40px;
}

.hero3 {
    height: 567px;
    background-color: #fff9ed;
}

.text3 {
    text-align: center;
    padding: 40px;
}
</style>