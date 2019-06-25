<template>
    <div class="dynamic">
        <p class="dynamic-title">小视最新动态</p>
        <p class="dynamic-subtitle">产品动态抢先看，创新与进步只为给您带来卓越体验</p> 
        <div class="shufflingg">
            <el-carousel :interval="4000" type="card" height="200px" :autoplay=false>
                <el-carousel-item v-for="item in totalList" :key="item.id" class="singal">
                    <div class="imgcover" :style="{backgroundImage:'url('+item.imgUrl+')'}">
                        <h3 class="medium">{{ item.title }}</h3>
                        <p v-for="(item1,index) in item.pList" >{{item1.content}}</p>
                    </div>
                    
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            totalList:[
                {
                    imgUrl:require('../../assets/img/3jt9wax7mq1z_o.jpg'),
                    title:'小视最新新闻',
                    pList:[
                        {
                            content:'江西省召开2019年全省企业上云工作推进会'
                        },
                        {
                            content:'江西省召开2019年全省企业上云工作推进会'
                        },
                        {
                            content:'江西省召开2019年全省企业上云工作推进会'
                        },
                        {
                            content:'江西省召开2019年全省企业上云工作推进会'
                        },
                        {
                            content:'江西省召开2019年全省企业上云工作推进会'
                        },
                        {
                            content:'江西省召开2019年全省企业上云工作推进会'
                        }
                    ]
                },
                {
                    imgUrl:require('../../assets/img/3jt9wb4td1lzm_o.jpg'),
                    title:'行业新闻'
                },
                {
                    imgUrl:require('../../assets/img/3jt9wax7mq1z_o.jpg'),
                    title:'小视最新产品'
                },
                
                {
                    imgUrl:require('../../assets/img/3jt9wbbzz19a_o.jpg'),
                    title:'行业最新产品'
                },
                {
                    imgUrl:require('../../assets/img/3jt9wax7mq1z_o.jpg'),
                    title:'最新技术'
                },
                {
                    imgUrl:require('../../assets/img/3jt9wb4td1lzm_o.jpg'),
                    title:'行业最新技术'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../../static/assets/scss/base.scss';
    .dynamic{
        height: 640px;
        width: 100%;
        padding-top: 50px;
        .dynamic-title{
            width: 100%;
            text-align: center;
            font-size: $font_size_24;
            line-height: 60px;
        }
        .dynamic-subtitle{
            width: 100%;
            text-align: center;
            font-size: $font_size_16;
            margin-bottom: 40px;
        }
    }
    .el-carousel__item h3 {
        transition: all 1s;
        font-size: $font_size_20;
        margin: 100px auto 10px;
    }
    .el-carousel__item p {
        transition: all 1.5s;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: $gray;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: $gray;
    }
    .imgcover{
        color: #fff;
        overflow: hidden;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;
        transition: all 1s;
    }
</style>
