<template>
    <div class="plan box-siz">
        <p class="plan-title">场景化深度覆盖解决方案</p>
        <p class="plan-subtitle">覆盖70+业务场景的解决方案，标准化专属服务、个性化需求定制，助力企业轻松上云，实现数字化转型</p> 
        <div class="show-content">
            <div class="cardItem" @mouseover="showContent(item,index)" :style="{backgroundImage:'url('+item.img+')'}" v-for="(item,index) in cardList"
             :key="item.id" :class="item.show ? 'card-active' :''">
                <div class="cardBg" :class="item.show ? 'cardBg-active' :''">
                    
                    <img :src="item.icon" alt="" class="cardItem-img" :class="item.show ? 'img-active' :''">
                    <p class="cardItem-title" :class="item.show ? 'title-active' :''">{{item.title}}</p>
                    <p class="cardItem-detail" :class="item.show ? 'detail-active' :''">
                        结合大数据能力帮助电商企业快速搭建平台、应对业务高并发，剖析秒杀、视频直播等场景
                    </p>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cardList:[
                {
                    img:require('../../assets/img/solution-bg-1.jpg'),
                    show:true,
                    title:'人脸闸机',
                    icon:require('../../assets/img/TB1_6_qLXXXXXXZXVXXXXXXXXXX-144-144.png')
                },
                {
                    img:require('../../assets/img/solution-bg-2.jpg'),
                    show:false,
                    title:'新零售',
                    icon:require('../../assets/img/TB1e3YILXXXXXczXXXXXXXXXXXX-144-144.png')
                },
                {
                    img:require('../../assets/img/solution-bg-3.jpg'),
                    show:false,
                    title:'人脸算法',
                    icon:require('../../assets/img/TB1ew_vLXXXXXcmXFXXXXXXXXXX-144-144.png')
                },
                {
                    img:require('../../assets/img/solution-bg-4.jpg'),
                    show:false,
                    title:'大数据',
                    icon:require('../../assets/img/TB1fEPxLXXXXXa9XFXXXXXXXXXX-144-144.png')
                },
                {
                    img:require('../../assets/img/solution-bg-5.jpg'),
                    show:false,
                    title:'客流统计',
                    icon:require('../../assets/img/TB1UhPlLXXXXXabaXXXXXXXXXXX-144-144.png')
                }
            ]
        }
    },
    methods:{
        showContent(item,index){
            this.cardList.forEach(i => {
            // 判断如果数据中的menuList[i]的show属性不等于当前数据的isSubShow属性那么menuList[i]等于false
                // if (i.show !== this.cardList[index].show) {
                    i.show = false;
                // }
            });
            item.show = true;
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../../static/assets/scss/base.scss';
    .plan{
        height: 640px;
        width: 100%;
        padding-top: 50px;
        .plan-title{
            width: 100%;
            text-align: center;
            font-size: $font_size_24;
            line-height: 60px;
        }
        .plan-subtitle{
            width: 100%;
            text-align: center;
            font-size: $font_size_16;
            margin-bottom: 40px;
        }
        .show-content{
            height: 450px;
            width: 100%;
        }
        .cardItem{
            width: 18%;
            height: 100%;
            background-position: center top;
            background-repeat: no-repeat;
            float: left;
            background-size: cover;
            .cardBg{
                width: 100%;
                height: 100%;
                overflow: hidden;
                position: relative;
                .cardItem-title{
                    color: $white;
                    font-size: $font_size_20;
                    position: absolute;
                    top: 240px;
                    width: 100%;
                    text-align: center;
                    transition: all 0.6s;
                }    
                .cardItem-img{
                    width: 70px;
                    height: 70px;
                    position: absolute;
                    top: 160px;
                    left: 50%;
                    transform: translate(-50%,0);
                    transition: all 0.5s;
                } 
                .cardItem-detail{
                    color: $white;
                    width: 100%;
                    padding: 0 50px;
                    text-align: center;
                    position: absolute;
                    top: 280px;
                    opacity: 0;
                    filter:alpha(opacity=0);
                    transition: all 0.8s;
                }
                .img-active{
                    top:100px;
                } 
                .title-active{
                    top:180px;
                }  
                .detail-active{
                    top: 220px;
                    opacity: 1;
                    filter:alpha(opacity=1);
                }         
            }
            .cardBg-active{
                background: $blue-opacity;
            }

        }
        .card-active{
            width: 28%;
        }
    }

    @keyframes img {
        0%{
            top: 160px;
        }
        100%{
            top:100px;
        }
    }
</style>
