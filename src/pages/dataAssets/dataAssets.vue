<template>
    <div class="data-common">
        <Head></Head>
        <System class="box" :menus="menus" :icon="icon"></System>
    </div>
</template>
<script>
import Head from '../../component/headCommon'
import System from '../../component/system'
import api from '../../api/index'
// import link from '../../utils/link'
import Qs from 'qs'
export default {
    data(){
        return{
            icon: 'el-icon-jichushuju-zichanbaobiao',
            menus: [],
        }
    },
    components: {
        Head,
        System
    },
    watch:{
        'this.$route':function(newVal){
            console.log(newVal)
        }
    },
    created(){
        console.log(this.$route.meta)
        let op = {}
        op.moduleId = ''
        this.$http({
            url: api.resources.menu,
            method: "post",
            data: op,
            transformRequest: [function (data) {
                data = Qs.stringify(data);
                return data;
            }],
        }).then(response => {
            console.log(JSON.parse(response.data.bean))
            this.menus = JSON.parse(response.data.bean)[0].children
            // link.$emit('triggerChild', this.menus)
        })
    }
}
</script>
<style lang="scss" scoped>
    .data-common{
        width: 100%;
        height: 100vh;
        overflow: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .box{
        flex: 1;
        // background: red;
    }
</style>
