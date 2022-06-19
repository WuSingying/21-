<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
    >
        <router-link to="/" underline="false">
            <img src="../assets/logo.png" style="width: 70px; height: 50px">
        </router-link>
        <router-link to="/" underline="false">
            <img src="../assets/21.png" style="width: 140px; height: 50px">
        </router-link>

        <div class="flex-grow" />
        <el-menu-item index="1"><router-link to="/" underline="false">首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/everyyear" underline="false">大事件</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/about" underline="false">看见</router-link></el-menu-item>
        <div style="margin: 10px">
            <el-input v-model="search" placeholder="请输入关键字" style="width: 50%;" clearable/>
            <el-button style="margin-left: 10px" type="primary" @click="load">查询</el-button>

        </div>
    </el-menu>
</template>

<script>
    export default {
        name: "Head",

        data () {return{
            searchinput:''
        }
        },
        methods:{
            newsSearch(){
                newsSearch(this.searchinput).the(res=>{

                })
            }
        }
    }
</script>

<style>
    .flex-grow {
        flex-grow: 1;
    }
    a {
        text-decoration: none;
    }
    .input-with-select{
        width: 300px;
        height: 30px;

    }
    .router-link-active {
        text-decoration: none;
    }
    .el-menu{
        margin-left: 32px;
        margin-right: 32px;
    }
</style>
