<template>
    <div class="page-container">

        <header class="header-con">

            <nav>

                <NuxtLink to="/" class="logo"><i class="fa-brands fa-pagelines"></i> TrendyTreehugger</NuxtLink>

                <div class="search-box">
                    <SearchBox />
                </div>

                <NuxtLink to="/menu-pages/account" class="menu"><i class="fa-regular fa-user"></i></NuxtLink>
                <NuxtLink to="/menu-pages/cart" class="menu"><i class="fa-solid fa-cart-shopping"></i></NuxtLink>
                <NuxtLink to="/menu-pages/favor" class="menu"><i class="fa-regular fa-heart"></i></NuxtLink>
                <NuxtLink to="/menu-pages/customer-service" class="menu"><i class="fa-solid fa-headset"></i></NuxtLink>
            </nav>

            <div class="optimize-category">
                <NuxtLink to="/products/category">หมวดหมู่</NuxtLink>
                <NuxtLink to="/products/new-product">มาใหม่</NuxtLink>
                <NuxtLink to="/products/sale">ลดราคา</NuxtLink>
                <NuxtLink to="/products/women">เสื้อผ้าผู้หญิง</NuxtLink>
                <NuxtLink to="/products/men">เสื้อผ้าผู้ชาย</NuxtLink>
                <NuxtLink to="/products/kid">เสื้อผ้าเด็ก</NuxtLink>
            </div>

        </header>

        <div>
            <slot />
        </div>

        <footer>
            <div class="info-con">
                <div class="topic">ข้อมูลร้านค้า</div>
                <div class="info">
                    <NuxtLink to="/info-pages/about">เกี่ยวกับเรา</NuxtLink>
                    <br>
                    <NuxtLink to="/info-pages/community">คอมมูนิตี้</NuxtLink>
                    <br>
                    <NuxtLink to="/info-pages/carbon">คาร์บอน ฟูทปริ้น เเทรกกิ้ง</NuxtLink>
                    <br>
                    <NuxtLink to="/info-pages/education">ทรัพยากรทางการศึกษา</NuxtLink>
                    <br>
                    <NuxtLink to="/info-pages/event">การเข้าร่วมอีเวนท์</NuxtLink>
                    <br>
                    <NuxtLink to="/info-pages/campaign">เเคมเปญเเละส่วนลด</NuxtLink>
                </div>
            </div>

            <div class="contact-con">
                <div class="topic">ติดตามเรา</div>
                <div class="contact">
                    <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-square-x-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="#"><i class="fa-brands fa-line"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                </div>

            </div>


        </footer>

    </div>
</template>

<script>

import SearchBox from 'C:/Users/USER1/Desktop/SF220-Kunnhai-project/components/search-box.vue';

export default {
    components: {
        SearchBox
    }
};
import "@fortawesome/fontawesome-free/css/all.min.css";
</script>

<style scoped>
.page-container {
    background-color: #F9EFDB;
}

nav {

    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #638889;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 12px;
    font-size: 18px;
    padding: 10px;
}

.menu:hover {
    color: #9DBC98;
}

.logo {
    margin-right: auto;
    padding-left: 10px;
    color: white;
}

.optimize-category {
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    background: #9DBC98;

    & a {
        text-decoration: none;
        color: white;
    }

    & a:hover {
        color: #638889;
        text-decoration: underline;
    }
}

.search-box {
    position: absolute;

}

.header-con {
    position: sticky;
    top: 0;
    z-index: 1000;

}

footer {
    background-color: #638889;
    margin-top: 200px;
    display: flex;
    padding: 20px;
    justify-content: center;
}

.topic {
    color: white;
}

.info-con {
    margin: 20px 50px;
}

.info-con a {
    color: white;
    text-decoration: none;
}

.info a:hover {
    text-decoration: underline;
}

.info {
    margin-top: 1rem;
}

.contact-con {
    margin: 20px 50px;
}

.contact {
    display: flex;
}

.contact a {
    color: white;
    margin-right: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
}
</style>