<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
    >

        <router-link to="/" underline="false"><img src="../assets/logo.png" style="width: 70px; height: 50px"></router-link>
        <router-link to="/" underline="false"><img src="../assets/21.png" style="width: 140px; height: 50px"></router-link>

        <div class="flex-grow" />
        <el-menu-item index="1"><router-link to="/" underline="false">首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/everyyear" underline="false">大事件</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/about" underline="false">看见</router-link></el-menu-item>
    
    </el-menu>
</template>

<script>
    export default {
        name: "Head",

    }
</script>

<style>

    .flex-grow {
        flex-grow: 1;
        margin-right: 500px;
    }
    a {
        text-decoration: none;
        font-weight: bold;
    }
    .router-link-active {
        text-decoration: none;
    }
    .el-menu{
        position: sticky;
        top: 0px;
        z-index: 9999;
    }

</style>
