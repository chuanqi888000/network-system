<template>
    <div class="footer">
        <div class="footer-top box-siz">
            <div class="footer-contact box-siz">
                <img src="../../assets/img/concat.png" alt="">
                <div class="concat-content">
                    <p class="concat-title">联系我们</p>
                    <p>售前：400-607-6657</p>
                    <p>售后：400-619-2176（政务云）</p>
                    <p>售后：400-603-1123（企业云）</p>
                    <p>Email : cloud@inspur.com</p>
                </div>
            </div>
            <div class="footer-product box-siz">
                <div class="product-info" v-for="item in productList">
                    <p class="product-title">{{item.title}}</p>
                    <p v-for="(item1,index) in item.list">{{item1}}</p>
                    <img src="../../assets/img/ewm.jpg" alt="" v-if="item.icon">
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            法律声明 | 隐私条款 | 网站地图 |  Copyright © 2018 版权所有：南京甄视智能科技有限公司 苏ICP备15029681号-1 增值电信业务经营许可证 苏B2-20180542
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            productList:[
                {
                    title:'核心技术',
                    list:[
                        '人脸及人体分析技术'
                    ],
                    icon:false
                },
                {
                    title:'应用平台',
                    list:[
                        'AI平台',
                        'LOT平台',
                        '数据中心平台'
                    ],
                    icon:false
                },
                {
                    title:'服务方案',
                    list:[
                        '金融',
                        '安防',
                        '智慧零售'
                    ],
                    icon:false
                },
                {
                    title:'技术支持',
                    list:[
                        '安防服务'
                    ],
                    icon:false
                },
                {
                    title:'市场活动',
                    list:[
                        '参加展会',
                        '团队活动',
                        '媒体报告',
                        '公司资源',
                    ],
                    icon:false
                },
                {
                    title:'关于小视',
                    list:[
                        '加入小视',
                        '联系我们'
                    ],
                    icon:true
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../../static/assets/scss/base.scss';
    .footer{
        overflow: hidden;
        background: $grey-hover;
        width: 100%;
        .footer-top{
            width: 1200px;
            height: 300px;
            margin: 0 auto;
            padding: 30px 0;
            display: flex;
            justify-content: center;
            // border-bottom: 1px solid $line;
            .footer-contact{
                width: 300px;
                height: 100%;
                border-right: 1px solid $line;
                display: flex;
                justify-content: flex-start;
                padding-top: 40px;
                img{
                    width: 50px;
                    height: 41px;
                    margin-right: 40px;
                }
                .concat-content{
                    flex: 1;
                    color: $white;
                    overflow: hidden;
                    p{
                        text-align: left;
                    }
                    .concat-title{
                        margin-top: 10px;
                        margin-bottom: 20px;
                    }
                    p:not(.concat-title){
                        font-size: $font_size_12;
                        color: $content;
                    }
                }
            }
            .footer-product{
                flex: 1;
                display: flex;
                justify-content: center;
                color: $white;
                .product-info{
                    flex: 1;
                    .product-title{
                        margin-top: 10px;
                        margin-bottom: 20px;
                        color: $white;
                    }  
                    p:not(.product-title){
                        font-size: $font_size_12;
                        color: $content;
                    } 
                    img{
                        width: 50%;
                        margin: 0 auto;
                    }                 
                }

            }
            .footer-product{
                padding-top: 40px;
            }
        }
    }
    .footer-bottom{
        height: 60px;
        width: 100%;
        text-align: center;
        line-height: 60px;
        background: $gray;
        color: $content;
    }
</style>
