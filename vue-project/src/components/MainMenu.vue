<script>
import { shallowRef } from 'vue';
import { RouterLink } from 'vue-router';
</script>


<template>
    <div class="main-menu">
        <p>Tilda Publishing</p>
        <ul class="main-menu__items">
            <li><router-link to="/"> Главная</router-link></li>
            <li><router-link to="/rate">Сообщить о нарушении</router-link></li>
            <li><router-link to="/violations">Тарифы</router-link></li>
        </ul>
    </div>
</template>

<style>
body {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.main-menu {
    padding: 5px 0;
}

.main-menu__items li {
    display: inline-block;
    list-style-type: none;
    margin-left: 20px;
    color: #fff;
    font-weight: 100;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: .1rem;
}
</style>