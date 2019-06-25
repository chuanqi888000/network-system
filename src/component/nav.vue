<template>
    <div class="nav box-siz">
        <ul class="overflow" @mouseover="liShow" ref="ullist">
            <li data="0">产品</li>
            <li data="1">解决方案</li>
            <li data="2">画像引擎</li>
            <li data="3">ETL大脑</li>
            <li data="4">数据分析</li>
            <li data="5">数据日报</li>
        </ul>
        <div class="register" @click="toRegister">
            注册
        </div>
    </div>
</template>
<script>
import Utils from '../assets/js/utils'
export default {
    data(){
        return{

        }
    },
    methods:{
        liShow(event){
            // console.log(event.target.getAttribute("data"))
            Utils.$emit("type",false);
            if(event.target.getAttribute("data")=="1" || event.target.getAttribute("data")=="2"){
                Utils.$emit("type",true);
                event.target.classList.add("li-active")
                if(event.target.getAttribute("data")=="1"){
                    this.$refs.ullist.children[2].classList.remove("li-active")
                }else{
                    this.$refs.ullist.children[1].classList.remove("li-active")
                }
            }else{
                // console.log(this.$refs.ullist.children)
                let list = this.$refs.ullist.children;
                this.$refs.ullist.children[1].classList.remove("li-active")
                this.$refs.ullist.children[2].classList.remove("li-active")
            }
        },
        toRegister(){
            this.$router.push({path:'/register'})
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../static/assets/scss/base.scss';
    .nav{
        width: 100%;
        height: 50px;
        line-height: 50px;
        // border-top: 1px solid $line;
        border-bottom: 1px solid $line;
        background: $gray;
        color: $white;
        position: relative;
        z-index: 2;
        ul{
            float: left;
            li{
                float: left;
                padding: 0 16px;                
                cursor: pointer;
                &:hover{
                    background:$grey-hover;
                    color: $blue;
                }                
            }
            .li-active{
                background:$grey-hover;
                color: $blue;
            }
        }
        .register{
            float: right;
            height: 50px;
            background: $blue;
            text-align: center;
            width:100px;
            cursor: pointer;
            &:hover{
               background:$blue-hover;
            }
        }
    }
</style>
