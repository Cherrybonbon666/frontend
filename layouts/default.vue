<template>



    <header class="header-con">

        <nav>
            <NuxtLink to="/" class="logo"><i class="fa-brands fa-pagelines"></i><b> TrendyTreehugger</b></NuxtLink>
            <input type="text" id="search" placeholder=" Search...">
            <NuxtLink to="/menu-pages/account" class="menu"><i class="fa-regular fa-user"></i></NuxtLink>
            <NuxtLink to="/menu-pages/cart" class="menu"><i class="fa-solid fa-cart-shopping"></i></NuxtLink>
            <NuxtLink to="/menu-pages/favor" class="menu"><i class="fa-regular fa-heart"></i></NuxtLink>
            <NuxtLink to="/menu-pages/customer-service" class="menu"><i class="fa-solid fa-headset"></i></NuxtLink>
        </nav>

        <div class="optimize-category">

            <NuxtLink to="/products/new-product">New Arrivals</NuxtLink>
            <NuxtLink to="/products/sale">Sales</NuxtLink>
            <NuxtLink to="/products/women">Women</NuxtLink>
            <NuxtLink to="/products/men">Men</NuxtLink>
            <NuxtLink to="/products/kid">Kid</NuxtLink>
        </div>

    </header>

    <div>
        <slot />
    </div>

    <footer>
        <div class="info-con">
            <div class="topic">Information</div>
            <div class="info">
                <NuxtLink to="/info-pages/about">About Us</NuxtLink>
                <br>
                <NuxtLink to="/info-pages/community">Community</NuxtLink>
                <br>
                <NuxtLink to="/info-pages/carbon">Carbon Footprint Tracking</NuxtLink>
                <br>
                <NuxtLink to="/info-pages/education">Education Resources</NuxtLink>
                <br>
                <NuxtLink to="/info-pages/event">Fashion Event</NuxtLink>
                <br>

            </div>
        </div>

        <div class="contact-con">
            <div class="topic">Follow Us</div>
            <div class="contact">
                <a href="https://www.facebook.com/profile.php?id=100011635591689&locale=th_TH"><i
                        class="fa-brands fa-square-facebook"></i></a>
                <a href="https://www.instagram.com/peach_prp/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/?lang=th"><i class="fa-brands fa-square-x-twitter"></i></a>
                <a href="https://www.tiktok.com/foryou"><i class="fa-brands fa-tiktok"></i></a>
                <a href="https://line.me/th/"><i class="fa-brands fa-line"></i></a>
                <a href="https://youtu.be/_61CRQotOHw?si=kuQIs5aMgrV8mMT9"><i class="fa-brands fa-youtube"></i></a>
            </div>

        </div>


    </footer>


</template>

<script>



import "@fortawesome/fontawesome-free/css/all.min.css";
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

nav {

    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFF9ED;
    padding: 10px 30px;
    border-bottom: 2px solid #dbd8d2;
}

nav a {
    color: #333;
    text-decoration: none;
    margin-left: 12px;
    font-size: 18px;
    padding: 10px;

}



.logo {
    font-size: 2rem;
    margin-right: auto;
    padding-left: 10px;
    color: #544238;
}

#search {
    margin-right: 280px;
    width: 500px;
    height: 30px;
}

.optimize-category {
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    background: #FFF9ED;

    & a {
        text-decoration: none;
        color: #544238;
    }

    & a:hover {

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
    border-bottom: 1px solid #544238;
}

footer {
    background-color: #FFF9ED;
    border-top: 1px solid #544238;
    display: flex;
    padding: 20px;
    justify-content: center;
}

.topic {
    color: #544238;
    font-weight: bold;
}

.info-con {
    margin: 20px 50px;
}

.info-con a {
    color: #544238;
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
    color: #828282;
    margin-right: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
}
</style>