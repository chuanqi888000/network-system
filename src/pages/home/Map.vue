<template>
    <div class="map">
        <p class="map-title">纵深全行业、稳步拓展全球化业务</p>
        <p class="map-subtitle">面向政府行业、企业用户及开发者提供自主可控、高安全保密机制、可信云服务</p> 
        <div class="map-center">
            <div class="map-cover">
                <div class="showletter letter_1">
                    <img src="../../assets/img/map-orange-icon.png" alt="">
                    <span class="showletter-title">西雅图</span>
                </div>
                <div class="showletter letter_2">
                    <img src="../../assets/img/map-orange-icon.png" alt="">
                    <span class="showletter-title">巴黎</span>
                </div>
                <div class="showletter letter_3">
                    <img src="../../assets/img/map-orange-icon.png" alt="">
                    <span class="showletter-title">东京</span>
                </div>  
                <div class="showletter letter_4">
                    <img src="../../assets/img/map-orange-icon.png" alt="">
                    <span class="showletter-title">雅加达</span>
                </div>  
                <div class="showletter letter_5">
                    <img src="../../assets/img/map-orange-icon.png" alt="">
                    <span class="showletter-title">新加坡</span>
                </div> 

                <div class="area area_1">
                    <img src="../../assets/img/map-blue-icon.png" alt="">
                </div>
                <div class="area area_2">
                    <img src="../../assets/img/map-blue-icon.png" alt="">
                </div>
                <div class="area area_3">
                    <img src="../../assets/img/map-blue-icon.png" alt="">
                </div>
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
    @import '../../../static/assets/scss/base.scss';
    .map{
        height: 940px;
        width: 100%;
        padding-top: 50px;
        .map-title{
            width: 100%;
            text-align: center;
            font-size: $font_size_24;
            line-height: 60px;
        }
        .map-subtitle{
            width: 100%;
            text-align: center;
            font-size: $font_size_16;
            margin-bottom: 40px;
        }
        .map-center{
            width: 100%;
            height: 740px;
            // background-image: url('../../assets/img/map.jpg');
            // background-position: center top;
            // background-repeat: no-repeat;
            // background-size: cover;
            // position: relative;
            background: rgb(6,20,67);
            .map-cover{
                width: 1200px;
                height: 740px;
                background-image: url('../../assets/img/map.jpg');
                background-position: center top;
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
                margin: 0 auto;
                .showletter{
                    width: 200px;
                    height: 50px;
                    // background: rgba(255,255,255,0.4);
                    position: absolute;
                    
                    & img{
                        float: left;
                        animation: time 3s infinite;
                    }
                    .showletter-title{
                        float: left;
                        padding: 3px 15px;
                        background: $orange;
                        color: #Fff;
                        border-radius: 20px;
                        margin-top: 14px;
                    }
                }
                .area{
                    position: absolute;                   
                }                
            }
        }
    }

    .letter_1{
        top: 250px;
        left: 14%;
        
    }
    .letter_2{
        top: 280px;
        left: 45%;
    }
    .letter_3{
        top: 320px;
        left: 77%;
    }
    .letter_4{
        top: 455px;
        left: 70%;
    }
    .letter_5{
        top: 427px;
        left: 69%;
    }
    .area_1{
        top: 355px;
        left: 73%;
        animation: time 0.8s infinite;
    }
    .area_2{
        top: 309px;
        left: 73.5%;
        animation: time 1.5s infinite;
    }
    .area_3{
        top: 332px;
        left: 71%;
        animation: time 1.2s infinite;
    }
    @keyframes time {
        0%{
            opacity: 0;
            transform: scale(0.5)
        }
        50%{
            opacity: 1;
            transform: scale(1)
        }
        100%{
            opacity: 0;
            transform: scale(0.5)
        }
    }
    @keyframes time1 {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
</style>
