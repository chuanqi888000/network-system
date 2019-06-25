<template>
    <div class="dialog" v-show="dialogShow" :class="dialogShow ? 'active' : ''">
        
    </div>
</template>
<script>
import Utils from '../../assets/js/utils'
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            dialogShow:false,
        }
    },
    mounted(){
        const _this = this;
        Utils.$on("type",function(msg){
            // console.log(msg)
            _this.dialogShow = msg;
        });
    }
}
</script>
<style lang="scss" scoped>
    @import '../../../static/assets/scss/base.scss';
    .dialog{
        width: 100%;
        height: 840px;
        background: $grey-hover;
        position: absolute;
        top: 95px;
        transform: translateY(-100%);
        transition: all 0.8s;
        // animation: wrapper-gradient .3s linear;
        z-index: 1;
    }
    .active{
        transform: translateY(0);
    }
    // @keyframes wrapper-gradient {
    //     0% {
    //         transform: translateY(-100%);
    //         top: 95px;
    //     }
    //     100% {
    //         transform: translateY(0);
    //     }
    // }
</style>
