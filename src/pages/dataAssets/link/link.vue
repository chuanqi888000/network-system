<template>
    <div>
        <div class="box">
            <div class="box-head">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .box{
        width: 300px;
        height: 150px;
        border-radius: 10px;
        background: #8700ff;
        box-shadow: 0px 0px 10px rgba(0,0,0,1);
        transition: all 0.6s;
    }
    .box:hover{
        transform: scale(1.05);
        box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
    }
    .box-head{
        width: 100%;
        height: 50px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background: rgba(0,0,0,0.3);
    }
</style>
