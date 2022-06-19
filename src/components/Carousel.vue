<template>
    <div class="block">
        <el-carousel :interval="4000" type="card" height="500px">
            <el-carousel-item v-for="item in images" :key="item">
                <img :src="item.url" :fit="fit" class="image">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        data(){
            return{
                images:[
                    {url: require("../assets/21.png")},
                    {url: require("../assets/yiqing.jpeg")},
                    {url: require("../assets/yiqing2.jpeg")},
                    {url: require("../assets/yiqing3.jpeg")},
                    {url: require("../assets/yiqing4.jpg")},
                ]
            }
        }
    }
</script>

<style scoped>
    .demonstration {
        color: var(--el-text-color-secondary);
    }

    .el-carousel__item h3 {
        color: #475669;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }

    .image {
        width: 100%;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
    }
    .block{
        padding:32px
    }
</style>
