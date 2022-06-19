<template>
  <div><Head/></div>
  <div class="row">
  <el-row  gutter="15" >
    <el-col :span="12" >

      <a href="https://new.qq.com/omn/20220523/20220523A03BI900.html">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/news1.png" class="image">
          <div style="padding: 15px;">
            <span>总书记和人民心贴心丨“是总书记的嘱托给我们克服困难的信心”</span>
          </div>
          <div style="padding: 15px;">
            <time>2022/05/23</time>
          </div>
        </el-card>
      </a>

      <a href="https://new.qq.com/omn/20220523/20220523A056GR00.html">
        <el-card :body-style="{ padding: '0px' }" >
          <img src="../assets/news2.png" class="image">
          <div style="padding: 15px;">
            <span>习近平"典"亮全人类共同价值｜安危不贰其志，险易不革其心</span>
          </div>
          <div style="padding: 15px;">
            <time>2022/05/23</time>
          </div>
        </el-card>
      </a>

      <a href="https://new.qq.com/omn/20220523/20220523A03GJU00.html">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/news3.png" class="image">
          <div style="padding: 15px;">
            <span>《足迹》第一集：过"五关"有多难</span>
          </div>
          <div style="padding: 15px;">
            <time>2022/05/23</time>
          </div>
        </el-card>
      </a>
    </el-col>

    <el-col :span="12" >

      <a href="https://new.qq.com/omn/TWF20220/TWF2022052300052200.html">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/news4.png" class="image">
          <div style="padding: 14px;">
            <span>上海：有序恢复正常生产生活秩序</span>
          </div>
          <div style="padding: 15px;">
            <time>2022/05/23</time>
          </div>
        </el-card>
      </a>

      <a href="https://new.qq.com/omn/20220523/20220523A0213600.html">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/news5.jpg" class="image">
          <div style="padding: 14px;">
            <span>各地统筹抓好疫情防控和经济社会发展</span>
          </div>
          <div style="padding: 15px;">
            <time>2022/05/23</time>
          </div>
        </el-card>
      </a>

      <a href="https://new.qq.com/omn/20220523/20220523A01I7X00.html">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/news6.png" class="image">
          <div style="padding: 14px;">
            <span>依法科学有序防控疫情</span>
          </div>
          <div style="padding: 15px;">
            <time>2022/05/23</time>
          </div>
        </el-card>
      </a>
    </el-col>

  </el-row>
  </div>

</template>

<script>
  import Head from "../components/Head";

  export default {
    name: "AboutView",
    components:{
      Head
    }
  }
</script>

<style scoped>

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }


  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .row{
    margin-left: 80px;
    margin-right: 80px;
  }

</style>
