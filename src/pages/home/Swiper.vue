<template>
  <div class="swiper">
    <div class="item"  ref="ggg">
      <div  :class="currentShow==0 ? 'class-a' : 'class-b' " ref="gzb">
        <img class="image" src="https://img.alicdn.com/tfs/TB1qcHvuWAoBKNjSZSyXXaHAVXa-3840-1280.jpg">
        <img class="breathingLampImage image" src="https://img.alicdn.com/tfs/TB1Vr92vnqWBKNjSZFxXXcpLpXa-3840-1280.png">
        <p class="pfirst">小视云计算价值观</p>
        <p class="psecond">领先行业，打造AI智能一体化</p>
      </div>
      <div :class="currentShow==1 ? 'class-a' : 'class-b' " ref="gzb">
        <img class="image" src="https://img.alicdn.com/tfs/TB1.JizdPTpK1RjSZKPXXa3UpXa-3840-1280.jpg">
      </div>
      <div :class="currentShow==2 ? 'class-a' : 'class-b' ">
        <img class="image" src="https://img.alicdn.com/tfs/TB1rh6QdW6qK1RjSZFmXXX0PFXa-3840-1280.jpg">
        <img class="breathingLampImage image" src="https://img.alicdn.com/tfs/TB1wlzNd9zqK1RjSZFLXXcn2XXa-3840-1280.png">
        <p class="pfirst">金融+AI智能服务</p>
        <p class="psecond">领先行业，打造AI智能一体化</p>
      </div>
      <div :class="currentShow==3 ? 'class-a' : 'class-b' ">
        <img class="image" src="https://img.alicdn.com/tfs/TB1q5qCX9zqK1RjSZFHXXb3CpXa-3840-1280.jpg">
        <img class="breathingLampImage image" src="https://img.alicdn.com/tfs/TB1DZ5WX4jaK1RjSZKzXXXVwXXa-3840-1280.png">
        <p class="pfirst">店小喵+新零售</p>
        <p class="psecond">领先行业，打造AI智能一体化</p>
      </div>
      <div :class="currentShow==4 ? 'class-a' : 'class-b' ">
        <img class="image" src="https://img.alicdn.com/tfs/TB1yReybirpK1RjSZFhXXXSdXXa-3840-1280.jpg">
        <img class="breathingLampImage image" src="https://img.alicdn.com/tfs/TB1Kl5xbbrpK1RjSZTEXXcWAVXa-3840-1280.png">
        <p class="pfirst">安防幼儿园行业标杆</p>
        <p class="psecond">领先行业，打造AI智能一体化</p>
      </div>
    </div>
    <ul class="banner-tab">
      <li v-for="(item,index) in pictureNumber"
          class="banner"
          :key="index"
          @click="getIndex(index)"
          >
          <div :class="{'active': scroll === index,
                        'clactive': scroll === index+1000}"></div>
      </li>
    </ul>
    <Swiperlist></Swiperlist>
  </div>
</template>

<script>
import Swiperlist from './Swiper-list'
export default {
  name: 'Helloworld',
  data() {
    return{
     currentShow: 0 , 
     pictureNumber: [],
     scroll: 0
   }
  },
  components:{
    Swiperlist
  },
  methods: {
    lunbo() {
      window.intervalObj=setInterval(()=> {
        this.currentShow++
        this.scroll++
        if(this.currentShow ==this.pictureNumber){
          this.currentShow=0
        }
        if(this.scroll ==this.pictureNumber){
          this.scroll=0
        }
      },10000)
    },
    getpcnumber() {
      this.pictureNumber=this.$refs.ggg.children.length
    },
    getIndex(index) {
      this.currentShow=index
      // this.scroll=index+1000
      this.scroll=index
      clearInterval(intervalObj)
      this.lunbo()
    }
  },
  mounted () {
    this.lunbo()
    this.getpcnumber()
  }
}
</script>
<style lang="scss">
.swiper{
  position :relative;
  height :840px;
  width: 100%;
  background-color :#000;
  overflow :hidden;
  .banner-tab{
    position :absolute;
    top :606px;
    left :50%;
    transform :translateX(-50%);
    height :10px;
    display :flex;
    .banner{
      background-color :#474a51;
      width :40px;
      margin :3px 5px;
      cursor :pointer;
      .active{
        height :4px;        
        background-color :#fff;
        animation :time 10s linear 1;
      }
      .clactive{
        height :4px;        
        background-color :#fff;
        width :40px;
      }
    }  
  }      
  .class-b{
    display :none;
  }
  .class-a{
    width: 1920px;
    position :absolute;
    display :block;
    animation :light .5s ease-in-out 1;
    .image{
      height :640px;
      position :absolute;
      margin: 0 auto;
      // left :-300px;  
    }
    .breathingLampImage{
       animation :breath 3s ease-in-out infinite;  
    }
    p{
      position: absolute;
      color: #fff;
      left: 200px;
    }
    .pfirst{
      font-size: 40px;
      top: 200px;
      animation :lightfont 2.5s ease-in-out 1;
    }
    .psecond{
      font-size: 20px;
      top: 270px;
      left: 235px;
      animation :lightback 2.5s ease-in-out 1;
    }
  }  
}

@keyframes breath {
  from{
     opacity :0.1;   
  }                           
  50%{
      opacity  :1; 
  }                         
  to{
     opacity :0.1; 
  }      
}
@keyframes lightfont{
  from{
      opacity :0;
    transform :translateY(-50px);
  } 
  to{
    opacity :1;
    transform :translateY(0px); 
  }    
}
@keyframes lightback{
  from{
      opacity :0;
    transform :translateY(50px);
  } 
  to{
    opacity :1;
    transform :translateY(0px); 
  }    
}                      
@keyframes light{
  from{
      opacity :0.6;
    transform :translateY(50px);
  } 
  to{
    opacity :1;
    transform :translateY(0px); 
  }    
}
@keyframes time{
  from{
     width :0;
  } 
  to{
      width :40px;
  }   
}

</style>