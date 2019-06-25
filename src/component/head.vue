<template>
    <div class="head box-siz">
        <div class="head-left box-siz" @mouseover="showLeft" @mouseout="hideLeft" :class="{'head-active':defaultShow}">
            <span class="el-icon-goutongye_santiaogang_tiaozhuanxuanzehaizi rotatebtn" :class="defaultShow ? 'span-active' : ''"></span>  
            <div class="headContent" :class="defaultShow ? 'content-active' : ''">
                
            </div>     
        </div>
        <div class="logo box-siz">
            MINIVISION
        </div>
        <div class="head-right">
            <div class="head-nav">
                <ul class="">
                    <li @click="toLogin">登录</li>  
                    <li>备案</li> 
                    <li>文档</li>    
                    <li @click="toLogin">控制台</li>    
                </ul>
                <el-select v-model="value" class="slect-language">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    data(){        
        return{
            defaultShow:false,
            options: [{
            value: '1',
            label: '中国站'
            }, {
            value: '2',
            label: 'English'
            }],
            value: '中国站'
        }
    },
    methods:{
        showLeft(){
            console.log(23)
            this.defaultShow = true;
        },
        hideLeft(){
            this.defaultShow = false;
        },
        toLogin(){
            this.$router.push({path:'/login'})
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../static/assets/scss/base.scss';
    @import '../../static/assets/scss/mixin.scss';
    .head{
        width: 100%;
        height: 46px;
        background-color: $gray;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: $white;
        border-bottom: 1px solid $line;
        position: relative;
        z-index: 3;
        .head-left{
            width: 46px;
            height: 46px;
            position: relative;
            transition: all 1s;
            span{
                margin: 0 auto;
                margin-top: 10px;
                transition: all 0.5s;
            }
            .rotatebtn{
                color: $white;
                font-size: $font_size_26;               
            }  
            .span-active{                
                transform: rotate(90deg);
            }
        }
        .head-active{
            background-color: $grey-hover;
        }
        .logo{
            width: 100px;
            line-height: 46px;
            text-align: center;
            border-left:1px solid $line;
        }
        .head-right{
            flex: 1;
            line-height: 46px;
            height: 46px;
            .head-nav{
                overflow: hidden;
                ul{
                    float: right;
                }
                ul li{
                    float: right;
                    padding: 0 12px;
                    cursor: pointer;
                    &:hover{
                        color: $blue;
                    }
                }
                .slect-language{
                    float: right;
                    background: rgb(55,60,65);
                }
            }
        }
    }
    .headContent{
        height: 95vh;
        width: 200px;
        background: $grey-hover;
        margin-top: 5px;
        z-index: 3;
        margin-left: -200px;
        transition: all 0.5s;
        border-right: 1px solid $line;
    }
    .content-active{
        margin-left: 0px;
    }
</style>
