<template>
    <div class="product box-siz">
        <div class="product-content">
            <p class="product-title">全球领先、安全、稳定的云计算产品</p>
            <p class="product-subtitle">计算、存储、网络、安全、大数据、人工智能，普惠科技助您飞跃发展</p>  

            <div class="icon-box"> 
                <div class="icon-item" v-for="(item,index) in iconList" :key="item.id">
                    <span class="" :class="item.icon"></span>
                    <p>{{item.name}}</p>
                    
                </div>
            </div>       
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            detail: false,
            iconList:[
                {
                    name:'大数据应用',
                    icon:'el-icon-keshihuashujuETL'
                },
                {
                    name:'计算集群',
                    icon:'el-icon-sccchaojijisuanjiqun'
                },
                {
                    name:'大数据分析',
                    icon:'el-icon-fenxi'
                },
                {
                    name:'数据库',
                    icon:'el-icon-dbsshujukubeifenDBS'
                },
                {
                    name:'弹性计算',
                    icon:'el-icon-danxingjisuan'
                },
                {
                    name:'CDN',
                    icon:'el-icon-CDN'
                },
                {
                    name:'域名',
                    icon:'el-icon-yuming'
                },
                {
                    name:'网络服务',
                    icon:'el-icon-wangluoxinxiguanli'
                },
                {
                    name:'基础服务',
                    icon:'el-icon-chanpin_jichufuwu'
                },
                {
                    name:'人工智能',
                    icon:'el-icon-rengongzhineng'
                },
                {
                    name:'可视化',
                    icon:'el-icon-keshihuashujuETL'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../../static/assets/scss/base.scss';
    .product{
        height: 680px;
        width: 100%;
        background: url(../../assets/img/fw-bg.jpg)no-repeat center;
        background-size: 100% 100%;
        padding-top: 50px;
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
                    width: 20%;
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
    }

</style>
