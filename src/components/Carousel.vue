<template>
    <div class="block">
        <el-carousel :interval="2000" type="card" autoplay="true" height="400px">
            <el-carousel-item>
                <a href="https://new.qq.com/omn/20220523/20220523A01N5900.html" target="_blank">
                    <img src="~@/assets/news12.png" class="image">
                </a>
            </el-carousel-item>
            <el-carousel-item>
                <a href="https://new.qq.com/omn/TWF20220/TWF2022052300052200.html" target="_blank">
                    <img src="~@/assets/news4.png" class="image">
                </a>
            </el-carousel-item>
            <el-carousel-item>
                <a href="https://new.qq.com/omn/20220523/20220523A01I7X00.html" target="_blank">
                    <img src="~@/assets/news6.png" class="image">
                </a>
            </el-carousel-item>
            <el-carousel-item>
                <a href="https://new.qq.com/rain/a/20220523A006XF00" target="_blank">
                    <img src="~@/assets/news7.png" class="image">
                </a>
            </el-carousel-item>
            <el-carousel-item>
                <a href="https://new.qq.com/omn/20220523/20220523A07V4100.html" target="_blank">
                    <img src="~@/assets/news14.png" class="image">
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>

    <!-- 标语 -->
      <div class="quote-wrap">
        <blockquote>
          <p>——记录世纪历史，传承往昔记忆</p>
        </blockquote>
      </div>

</template>

<script>
    export default {
        name: "Carousel",
       
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
        padding:32px;
    }

/* 标语 */
.quote-wrap {
  padding: 10px 150px;
  background-color: white;
  height: 300px;
}
.quote-wrap p {
  font-size: 38px;
  /* line-height: 100%; */
  margin-top: 105px;
  text-align: center;
  color: #144A74;
}
.quote-wrap blockquote {
  position: relative;
  padding: 10px 60px 10px;
}
.quote-wrap blockquote::before,
.quote-wrap blockquote::after {
  position: absolute;
  font-size: 90px;
  color: #144A74;
}
.quote-wrap blockquote::before {
  /* line-height: 1; */
  content: "\201C";
  top: 0;
  left: 0;
}
.quote-wrap blockquote::after {
  top: 0;
  right: 0;
  content: "\201D";
}


</style>
