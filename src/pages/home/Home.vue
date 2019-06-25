<template>
  <div class="home">
    <Head class="floor_one"></Head>
    <Nav class=""></Nav>
    <Swiper class=""></Swiper>
    <Dialog></Dialog>  
    <Product class="floor_two"></Product>
    <Plan class="floor_three"></Plan>
    <Dynamic class="floor_four"></Dynamic>
    <Map class="floor_five"></Map>
    <Partners class="floor_six"></Partners>
    <Footer></Footer>
    <div class="aiming" v-show="defaultShow">
      <a href="javascript:;" v-for="(item,index) in aimeList" :key="item.index" @click="anchors(index)" @mouseenter="long(index)" @mouseout="outlong(index)">
        <span class="circle" :class="steps == index?'dot-active':''"></span>
        <!-- <span class="long" :class="steps == index?'long-active':''"></span> -->
        <span class="long" ref='index'>{{item.name}}
          <i></i>
        </span>
      </a>      
    </div>
  </div>
</template>
<script>
import Head from '@/component/head.vue'
import Nav from '@/component/nav.vue'
import Swiper from './Swiper.vue'
import Dialog from './Dialog.vue'
import Product from './Product.vue'
import Plan from './Plan.vue'
import Dynamic from './Dynamic.vue'
import Map from './Map.vue'
import Partners from './Partners.vue'
import Footer from './Footer.vue'
import { mapState, mapGetters ,mapActions,mapMutations} from 'vuex'
export default {
  data(){
    return{
      aimeList:[
        {
          name:'组织架构'
        },
        {
          name:'产品体验'
        },
        {
          name:'方案解决'
        },
        {
          name:'最新动态'
        },
        {
          name:'业务拓展'
        },
        {
          name:'合作伙伴'
        }
      ],
      defaultShow:false,
      steps:0,
      scrolltop : 0 ,//滑轮 距顶部的距离
      floorOne:0,
      floorTwo:0,
      floorThree:0,
      floorFour:0,
      floorFive:0,
      floorSix:0
    }
  },
  components:{
    Head,
    Nav,
    Swiper,
    Dialog,
    Product,
    Plan,
    Dynamic,
    Map,
    Partners,
    Footer
  },
  mounted(){
    this.getFloorDistance();
    this.getPulleyTopDistance();
    console.log(this.$store.getters.isLogin)
    console.log(this.$store.getters.bgColor)
    this.$store.dispatch('isLogin',{isLogin:true});
    this.$store.dispatch('setbgColor','green');
    console.log(this.$store.getters.isLogin)
    console.log(this.$store.getters.bgColor)
    console.log(process.env.NODE_ENV)
  },
  computed:{
    ...mapGetters([
     'isLogin'
    ])
  },
  methods:{
    long(index){
      console.log(this.$refs.index)
      this.$refs.index[index].classList.add("long-active")      
    },
    outlong(index){
      this.$refs.index[index].classList.remove("long-active")   
    },
    anchors(val){
      console.log(typeof val)
      switch (val){
        case 0 :
          this.pulleyRoll(this.floorOne,this.scrolltop);
          break;
        case 1 :
          this.pulleyRoll(this.floorTwo,this.scrolltop);
          break;
        case 2 :
          this.pulleyRoll(this.floorThree,this.scrolltop);
          break;
        case 3 :
          this.pulleyRoll(this.floorFour,this.scrolltop);
          break;
        case 4 :
          this.pulleyRoll(this.floorFive,this.scrolltop);
          break;
        case 5 :
          this.pulleyRoll(this.floorSix,this.scrolltop);
          break;
      }
    },

    /**
     * 滑轮 向上滚动和向下滚动的函数
     * top是楼层距窗体顶部的距离,distance当前滚动条与窗体顶部的距离
     * */
    pulleyRoll(top,distance){
      /*向下滚动*/
      if(distance < top){
        var small_interval = (top-distance)/50;
        var i = 0;
        var timer = setInterval(()=>{
          i++;
          console.log(distance+= small_interval);
          document.documentElement.scrollTop = distance;
          if(i == 50){
            clearInterval(timer);
          }
        },10)
      }
      /*向上滚动*/
      else if(distance > top){
        var small_interval = (distance - top)/50;
        var i = 0;
        var timer = setInterval(()=>{
          i ++;
          console.log(distance -= small_interval);
          document.documentElement.scrollTop = distance;
          if(i == 50){
            clearInterval(timer);
          }
        },10);
      }
    },

    /**
     * 拿到所有 楼层距窗体顶部的距离
     * */
    getFloorDistance(){
      //拿到每个 楼层距窗体顶部的距离
      let floorOne = document.getElementsByClassName("floor_one")[0].offsetTop;
      let floorTwo = document.getElementsByClassName('floor_two')[0].offsetTop;
      let floorThree = document.getElementsByClassName('floor_three')[0].offsetTop;
      let floorFour = document.getElementsByClassName('floor_four')[0].offsetTop;
      let floorFive = document.getElementsByClassName('floor_five')[0].offsetTop;
      let floorSix = document.getElementsByClassName('floor_six')[0].offsetTop;
      this.floorOne = floorOne;
      this.floorTwo = floorTwo;
      this.floorThree = floorThree;
      this.floorFour = floorFour;
      this.floorFive = floorFive;
      this.floorSix = floorSix;
    },

    /**
     * 滑轮滚动事件 返回滑轮距顶部的距离
     * */
    getPulleyTopDistance(){
      var that = this;
      window.onscroll = function(){
        that.scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
      }
    }
  },
  watch:{
    //监听 滑轮滚动的值的变化 来实现自动锚点
    scrolltop(val){
      val += 200;
      if(val>500){
        this.defaultShow = true
      }else{
        this.defaultShow = false
      }
      if(val > this.floorOne && val <= this.floorTwo){
        this.steps = 0;
        console.log(0)
      } else if(val > this.floorTwo && val <= this.floorThree){
        this.steps = 1;
        console.log(1)
      }else if(val > this.floorThree && val <= this.floorFour){
        this.steps = 2;
        console.log(2)
      }else if(val > this.floorFour && val <= this.floorFive){
        this.steps = 3;
        console.log(3)
      }else if(val > this.floorFive && val <= this.floorSix){
        this.steps = 4;
        console.log(4)
      }else if(val > this.floorSix){
        this.steps = 5;
        console.log(5)
      }
    },
    steps(res){
      console.log(res)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../static/assets/scss/base.scss';
  .home{
    overflow: hidden;
    .aiming{
      position: fixed;
      top: 35vh;
      right: 100px;
      width: 20px;
      height: 200px;
      z-index: 99999;
      a{
        width: 14px;
        height: 14px;
        display: block;
        margin-bottom: 15px;
        position: relative;
      }
      .circle{
        width: 14px;
        height: 14px;
        background: url(../../assets/img/circle_bg.png)no-repeat center;
        background-size: 100% 100%;
        display: block;
        cursor: pointer;
      }
      .dot-active{
        background: url(../../assets/img/circle_active_bg.png)no-repeat center;
      }
    }
  }
  .long{
    height: 20px;
    line-height: 20px;
    width: 80px;
    background: #e1553a;
    display: block;
    position: absolute;
    top: -3px;
    left: -80px;
    border-radius: 20px;
    opacity: 0;
    filter: alpha(opacity=0);
    transition: all 1s;
    color: $white;
    font-size: $font_size_12;
    i{
      width:8px;
      height: 8px;
      border-radius: 10px;
      background: $white;
      display: inline-block;
      float: right;
      margin-top: 6px;
      margin-right: 5px;
    }
  }
  .long-active{
    opacity: 1;
    filter: alpha(opacity=1);
  }
</style>
