<template>
    <div class="background">

        <div class="container">
            <h1>Create an account</h1>
            <br>
            <p>Enter your email to Sign up</p>
            <input type="text" id="email" class="tab" placeholder="enter your email">
            <br>
            <input type="text" id="password" class="tab" placeholder="enter your password">
            <br>
            <div id="checkbox">
                <input type="checkbox" id="agree" name="agree">
                <label for="agree">
                    I agree to<a href="#">Terms of Service</a>
                    and<a href="#">Privacy Policy</a>
                </label>
            </div>

            <div id="signup" class="tab"><a href="/pages/register/signup.vue">Sign up</a></div>
            <div class="login">
                <p>Already have an account? <a href="#">Login</a></p>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.background {
    background-color: #fff9ed;
    padding: 100px 0px;

}

.container {
    padding-top: 40px;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border: 1px solid #544238;
    border-radius: 40px;
    background-color: #E8DDCC;
    width: 874px;
    height: 572px;
}

.tab {
    width: 719px;
    height: 56px;
}

#email {
    font-size: 1.2rem;
    padding-left: 20px;
    margin-top: 30px;
    border-radius: 10px;
}

#password {
    font-size: 1.2rem;
    padding-left: 20px;
    margin-top: 30px;
    border-radius: 10px;
}

#checkbox {
    font-size: 1rem;
    margin: 30px 0px;
    margin-left: -400px;

    & a {
        color: #333;
    }
}

#signup {
    font-size: 1.2rem;
    margin: 30px 77.5px;
    border-radius: 10px;
    background-color: #fff;
    border: 2px solid #544238;
    padding-top: 13px;

    & a {
        text-decoration: none;
        color: #333;

    }
}

.login a {
    color: #333;
}
</style>