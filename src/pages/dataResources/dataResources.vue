<template>
    <div class="data-common">
        <Head></Head>
        <div class="box">

        </div>
    </div>
</template>
<script>
import Head from '../../component/head'
export default {
    data(){
        return{

        }
    },
    components: {
        Head,
    }
}
</script>
<style lang="scss" scoped>
    .data-common{
        width: 100%;
        height: 100%;
        overflow: auto;
        display: flex;
    }
</style>
