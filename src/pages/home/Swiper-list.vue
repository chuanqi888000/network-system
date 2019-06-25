<template>
    <div class="swiper-list">
        <div v-for="(item,index) in list" :key="item.id" class="box-singal bz-buttonAnimat clockwise horizontal">
            <span class="box-icon" :class="item.icon"></span>
            <div class="content box-siz">
                <p>{{item.title}}</p>
                <p>{{item.pcontent}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[{
                icon:'el-icon-jinrongyinhang',
                title:'金融上云',
                pcontent:'助力企业显著提高商业收益'
            },{
                icon:'el-icon-anfang',
                title:'安防上云',
                pcontent:'助力企业显著提高商业收益'
            },{
                icon:'el-icon-shouye_shangquanhui',
                title:'商圈上云',
                pcontent:'助力企业显著提高商业收益'
            },{
                icon:'el-icon-tubiaozhizuomoban-',
                title:'幼儿园上云',
                pcontent:'助力企业显著提高商业收益'
            }]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../../static/assets/scss/base.scss';
    @import '../../assets/css/animate.css';
    .swiper-list{
        height: 200px;
        width: 100%;
        position: absolute;
        bottom: 0px;
        display: flex;
        justify-content: center;
        border-top: 1px solid $line;
        .box-singal{
            flex: 1;
            height: 200px;
            color: $white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid $line;
            .box-icon{
                color: $blue;
                font-size: 60px;
                display: block;
                margin-left: 20px
                // margin-top: 80px;
            }
            .content{
                width: 240px;
                // background: red;
                height: 200px;
                padding: 70px 0;
            }
            .content:last-child{
                padding: 80px 0 0;
            }
            &:hover{
                background: $grey-hover;
            }
        }
        .box-singal:last-child{
            // border-right: none;
        }
    }
</style>

