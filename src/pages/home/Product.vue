<template>
    <div class="product box-siz">
        <div class="product-content">
            <p class="product-title">全球领先、安全、稳定的云计算产品</p>
            <p class="product-subtitle">计算、存储、网络、安全、大数据、人工智能，普惠科技助您飞跃发展</p>  

            <!-- <div class="icon-box"> 
                <div class="icon-item" v-for="(item,index) in iconList" :key="item.id">
                    <span class="" :class="item.icon"></span>
                    <p>{{item.name}}</p>
                    
                </div>
            </div>        -->
            <div class="wrapper">
                <div id="content">
		            <div class="mg-space-init container vert">
                        <div class="mg-rows row row-flex">
		                    <div class="mg-trigger xs-6 sm-4 lg-3" v-for="(item,index) in iconList" :dataname="item.re" @click="checkcolor($event,item,index)">
		                        <span class=" img-responsive iconinner" :class="[item.icon,{blueactive:item.blue}]"></span>
                                <p class="iconfont" :class="item.blue ? 'blueactive' : ''">{{item.name}}</p>
		                    </div>                              
		                </div>
                        <!-- <div class="icon-box mg-rows row row-flex"> 
                            <div class="icon-item" v-for="(item,index) in iconList" :key="item.id">
                                <span class="mg-trigger img-responsive" :class="item.icon"></span>
                                <p>{{item.name}}</p>
                                
                            </div>
                        </div>    -->
                        <div class="mg-targets row">
                            <div class="" v-for="(item,index) in iconList" :key="item.id">
		                        <div class="container">
		                            <div class="row row-flex">
		                                <div class="xs-6 sm-3 lg-3 demo-item">
		                                    <span>Lorem ipsum dolor sit amet.</span>
		                                </div>
		                                <div class="xs-6 sm-3 lg-3 demo-item">
		                                    <span>Lorem ipsum dolor sit amet.</span>
		                                </div>
		                                <div class="xs-6 sm-3 lg-3 demo-item">
		                                    <span>Lorem ipsum dolor sit amet.</span>
		                                </div>
		                                <div class="xs-6 sm-3 lg-3 demo-item">
		                                    <span>Lorem ipsum dolor sit amet.</span>
		                                </div>
		                                <div class="xs-6 sm-3 lg-3 demo-item">
		                                    <span>Lorem ipsum dolor sit amet.</span>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
                        </div>
		            </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    mounted(){
        $('.mg-space-init').mgSpace();
        $(".mg-trigger")[0].click();
            window.scrollTo(0,0);
        
    },
    data(){
        return{
            detail: false,
            iconList:[
                {
                    name:'大数据应用',
                    icon:'el-icon-dashuju',
                    blue:true,
                    re:"0"
                },
                {
                    name:'计算集群',
                    icon:'el-icon-sccchaojijisuanjiqun',
                    blue:false,
                    re:"1"
                },
                {
                    name:'大数据分析',
                    icon:'el-icon-fenxi',
                    blue:false,
                    re:"2"
                },
                {
                    name:'数据库',
                    icon:'el-icon-dbsshujukubeifenDBS',
                    blue:false,
                    re:"3"
                },
                {
                    name:'弹性计算',
                    icon:'el-icon-danxingjisuan',
                    blue:false,
                    re:"4"
                },
                {
                    name:'CDN',
                    icon:'el-icon-CDN',
                    blue:false,
                    re:"5"
                },
                {
                    name:'域名',
                    icon:'el-icon-yuming',
                    blue:false,
                    re:"6"
                },
                {
                    name:'网络服务',
                    icon:'el-icon-wangluoxinxiguanli',
                    blue:false,
                    re:"7"
                },
                {
                    name:'基础服务',
                    icon:'el-icon-chanpin_jichufuwu',
                    blue:false,
                    re:"8"
                },
                {
                    name:'人工智能',
                    icon:'el-icon-rengongzhineng',
                    blue:false,
                    re:"9"
                },
                {
                    name:'可视化',
                    icon:'el-icon-keshihuashujuETL',
                    blue:false,
                    re:"10"
                }
            ]
        }
    },
    methods:{
        checkcolor($event,item,index){
            console.log($event)
            // Object.assign(this.$data.iconList, this.$options.data().iconList);
            // this.iconList[$(event.target).parent().attr("data-id")-1].blue = true;
            // $(event.target).parent().addClass("active")
            this.iconList.forEach(i => {
                i.blue = false;
            })
            console.log($("div[dataname='"+index+"']"))
            if($("div[dataname='"+index+"']").hasClass("mg-row-open")){
                
            }else{
                item.blue = true
            }
            

        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../../static/assets/scss/base.scss';
    @import '../../../static/assets/css/shoufengqing.css';
    @import '../../../static/assets/css/htmleaf-demo.css';
    @import '../../../static/assets/css/mg-space.css';
    .product{
        min-height: 680px;
        width: 100%;
        background: url(../../assets/img/fw-bg.jpg)no-repeat center;
        background-size: 100% 100%;
        padding-top: 50px;
        overflow: hidden;
        .product-content{
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            .product-title{
                width: 100%;
                text-align: center;
                font-size: $font_size_24;
                line-height: 60px;
            }
            .product-subtitle{
                width: 100%;
                text-align: center;
                font-size: $font_size_16;
                margin-bottom: 40px;
            }
            .icon-box{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-wrap: wrap;
                .icon-item{
                    display: flex;
                    flex-direction: column;
                    width: 25%;
                    min-height: 150px;
                    position: relative;
                    color: $title;
                    cursor: pointer;
                    &:hover{
                        color: $blue;
                    }
                    & span{
                        font-size: $font_size_50;
                        // position: absolute;
                        // top: 50%;
                        // left: 50%;
                        // transform: translate(-50%,-50%);
                    }
                    & p{
                        font-size: $font_size_18;
                        // position: absolute;
                        // top: 80%;
                        // left: 50%;
                        // transform: translate(-50%,-50%);
                    }
                }
            }

        }
        .iconinner{
            font-size: $font_size_50;
        }
        .iconfont{
            line-height: 40px;
        }
        .mg-trigger{
            color: $title;
            &:hover{
                color: $blue;
            }
        }
        .blueactive{
            color: $blue;
        }
    }
    .mg-trigger{
        cursor: pointer;
    }
</style>
