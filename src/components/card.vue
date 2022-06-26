<template>
  <section class="profile-section" id="profile">
    <!-- 首页卡片 -->
    <div class="profile-container">
      <div class="left-area">
        <div class="bg-area">
          <a
            href="/everyyear"
            target="_blank"
            ><img
              src="~@/assets/century.png"
              alt=""
              class="img-curry c-img-left"
          /></a>
          <h3 class="title">21世纪</h3>
          <p>
            耶稣的出生是公元出现的原因。在现代史上21世纪开始后，美国成为了世界上唯一的超级大国，苏联在20世纪末解体，俄罗斯继承了苏联的大部分遗产。随着冷战的结束，恐怖主义在全球的上升和蔓延，美国的霸权欲望越来越强烈，其他一些国家或国家联盟，如中国、日本、欧洲联盟、俄罗斯、印度成为推动世界多极化的重要力量。数字技术在早期的20世纪80年代-90年代开始发展，逐渐成为21世纪的主流，但是很多声音反对数字技术所带来的过度使用移动电话，在互联网相关的技术也同样遭到了很多的争议。
          </p>
          <a
            href="https://baike.baidu.com/item/21%E4%B8%96%E7%BA%AA/3864#reference-[5]-5120680-wrap"
            target="_blank"
            class="btn-a"
            >了解更多</a
          >
        </div>
      </div>

      <div class="right-area">
        <div class="bg-area">
          <a
            href="/everyyear"
            target="_blank"
            ><img
              src="~@/assets/icedun.webp"
              alt=""
              class="img-curry c-img-right"
          /></a>
          <h3 class="title">北京冬奥会</h3>
          <p>
            第24届冬季奥林匹克运动会（XXIV Olympic Winter Games），简称2022年北京冬季奥运会，是由中国举办的国际性奥林匹克赛事。2022年1月17日，北京冬奥组委发布北京冬奥会竞赛日程终版。于2022年2月4日开幕，2月20日闭幕。2022年北京冬季奥运会共设7个大项，15个分项，109个小项。北京赛区承办所有的冰上项目和自由式滑雪大跳台，延庆赛区承办雪车、雪橇及高山滑雪项目，张家口赛区承办除雪车、雪橇、高山滑雪和自由式滑雪大跳台之外的所有雪上项目。吉祥物：冰墩墩(Bing Dwen Dwen)。
          </p>
          <a
            href="https://baike.baidu.com/item/2022%E5%B9%B4"
            target="_blank"
            class="btn-a"
            >了解更多</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-section {
  padding: 50px 15px 50px;
  margin: 20px auto;
  background-color: white;
}
.profile-container {
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
  background-color: white;
}
.left-area,
.right-area {
  display: inline-block;
  text-align: center;
  width: 50%;
  position: relative;
  /* margin: 0px 20px; */
}
.img-curry {
  border-radius: 50%;
  width: 350px;
  height: 350px;
  margin-top: -120px;
  border: 10px solid rgb(215, 215, 215);
}
.img-curry:hover {
  border: 10px solid rgb(140, 140, 140);
}
.left-area p,
.right-area p {
  color: white;
  width: 90%;
  line-height: 25px;
  font-size: 15px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  padding: 0px 20px;
  margin: 0px 10px !important;
}
.bg-area {
  background-color: #144A74;
  margin: 0px 20px;
  box-shadow: 0px 56px 36px -60px #121d12;
}
.btn-a {
  text-decoration: none;
  background-color: rgb(0, 161, 214);
  padding: 10px 20px;
  display: inline-block;
  border-radius: 3px;
  color: white;
  margin: 10px auto 30px;
}
.btn-a:hover {
  background-color: rgb(0, 181, 229);
}
.fa {
  color: #777;
  font-size: 20px;
  margin: 5px 0px;
  padding: 5px;
}
.fa:hover {
  color: rgb(230, 22, 45);
  border-radius: 50%;
  /* border: 1px solid rgb(217,0,19); */
  padding: 5px;
}
.title{
  color: white;
  margin-top: 10px;
  margin-bottom:15px;
}
</style>