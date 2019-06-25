<template>
  <div class="partners">
    <p class="partners-title">携手共赢，与全球合作伙伴共建云端生态</p>
    <p class="partners-subtitle">加入小视云生态合作伙伴计划，开创新业务，获取技术、资源，实现更快速成长</p>
    <div class="mr_frbox">
        <img class="mr_frBtnL prev" src="../../assets/img/mfrL.jpg" width="28" height="46" />
        <div class="mr_frUl">
            <ul>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_1.jpg" width="123" height="52" /></a>
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_2.jpg" width="123" height="52" /></a>
                    
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_3.jpg" width="123" height="52" /></a>
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_4.jpg" width="123" height="52" /></a>
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_5.jpg" width="123" height="52" /></a>
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_6.jpg" width="123" height="52" /></a>
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_7.jpg" width="123" height="52" /></a>
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_8.jpg" width="123" height="52" /></a>
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_1.jpg" width="123" height="52" /></a>
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_2.jpg" width="123" height="52" /></a>
                    
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_3.jpg" width="123" height="52" /></a>
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_4.jpg" width="123" height="52" /></a>
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_5.jpg" width="123" height="52" /></a>
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_6.jpg" width="123" height="52" /></a>
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_7.jpg" width="123" height="52" /></a>
                </li>
                <li>
                    <a href="javascript:;" target="_blank"><img src="../../assets/img/mfr_8.jpg" width="123" height="52" /></a>
                </li>
            </ul>
        </div>
        <img class="mr_frBtnR next" src="../../assets/img/mfrR.jpg" width="28" height="46" />
    </div>
  </div>
</template>
<script>
import "../../../static/assets/js/vendor/partners.js";
export default {
  data() {
    return {};
  },
  mounted(){
    jQuery(".mr_frbox").slide({
        titCell: "",
        mainCell: ".mr_frUl ul",
        autoPage: true,
        effect: "leftLoop",
        autoPlay: true,
        vis: 4
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../../../static/assets/scss/base.scss";
.partners {
  height: 440px;
  width: 100%;
  padding-top: 50px;
  .partners-title {
    width: 100%;
    text-align: center;
    font-size: $font_size_24;
    line-height: 60px;
  }
  .partners-subtitle {
    width: 100%;
    text-align: center;
    font-size: $font_size_16;
    margin-bottom: 40px;
  }
}
.mr_frbox {
  height: 140px;
  padding: 24px 22px 0px;
}
.mr_frBtnL {
  float: left;
  margin: 28px 22px 0px 0px;
  cursor: pointer;
  display: inline;
}
.mr_frUl {
  float: left;
  height: 130px;
  width: 92%;
}
.mr_frBtnR {
  float: right;
  margin-top: 28px;
  cursor: pointer;
}
.mr_frUl ul li {
  display: inline;
  float: left;
  height: 115px;
  width: 125px;
  margin-right: 13px;
  overflow: hidden;
  line-height: 115px;
}
.mr_frUl ul li img {
  display: block;
  margin-bottom: 7px;
  border: 1px solid #d8d8d8;
  margin-top: 25px;
}
</style>
