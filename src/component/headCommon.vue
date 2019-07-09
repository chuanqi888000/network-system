<template>
    <div class="head box-siz">
        <div class="logo box-siz">
            MINIVISION
        </div>
        <div class="head-right">
            <div class="head-nav">
                <!-- <ul class="">  -->
                    <!-- <li>备案</li> 
                    <li>文档</li>    -->
                <!-- </ul> -->
                <div class="title">
                    {{title}}
                </div>
                <div class="weather" v-show="defaultShow">
                    {{weatherResquest.region}} {{weatherResquest.dayweather}} {{weatherResquest.daytemp}}~{{weatherResquest.nighttemp}}℃ &nbsp;&nbsp;&nbsp;{{weatherResquest.weather}}
                </div>     
            </div> 
        </div>
    </div>
</template>
<script>
import api from '../api/index'
import Qs from 'qs'
import {formatDateTime, getLocation} from '../utils/index'
export default {
    data(){        
        return{
            defaultCity: '',
            weatherResquest:{
                weather:false,
                region:'',
                daytemp:'',
                nighttemp:'',
                week:'',
                dayweather: '',
                nightweather: ''
            },
            defaultShow:false,
            title: ''
        }
    },
    watch:{
        $route () {
            this.title = this.$route.meta.name
        }
    },
    created(){
        console.log(this.$route)
        this.title = this.$route.meta.name
        this.getLocationInfo().then((res)=>{
            console.log(res)
            this.defaultCity = res.addressComponent.city || '南京市'
            return this.weatherInfo()
        }).catch((error)=>{
            console.log(error)
        })
    },
    mounted(){
        let params = {...this.weatherResquest,data:'1223'}
    },
    destroyed(){
        this.timer && clearInterval(this.timer)
    },
    methods:{
        showLeft(){
            this.defaultShow = true;
        },
        hideLeft(){
            this.defaultShow = false;
        },
        getLocationInfo(){
            return new Promise((resolve,reject)=>{
                getLocation().then((res)=>{
                    resolve(res)
                }).catch((error)=>{
                    console.log(error)
                })                
            })

        },
        weatherInfo(){
            return new Promise((resolve,reject)=>{
                let op = {}
                op.key = 'dfb9a576fbcb2c9a13a65ab736e47004'
                op.city = this.defaultCity
                op.extensions = "all"
                console.log(api.third)
                this.$http({
                    url: api.third.weather,
                    method: "post",
                    transformRequest: [function (data) {
                        data = Qs.stringify(data);
                        return data;
                    }],
                    // transformRequest: [function (data) {
                    //     // Do whatever you want to transform the data
                    //     let ret = ''
                    //     for (let it in data) {
                    //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    //     }
                    //     return ret
                    // }],
                    data: op
                }).then(response => {
                    this.defaultShow = true
                    // this.weatherResquest.weather = response.data.forecasts[0].reporttime
                    this.weatherResquest.region = response.data.forecasts[0].city
                    this.weatherResquest.daytemp = response.data.forecasts[0].casts[0].daytemp
                    this.weatherResquest.nighttemp = response.data.forecasts[0].casts[0].nighttemp
                    this.weatherResquest.week = response.data.forecasts[0].casts[0].week
                    this.weatherResquest.dayweather = response.data.forecasts[0].casts[0].dayweather
                    this.weatherResquest.nightweather = response.data.forecasts[0].casts[0].nightweather
                    // 页面加载完后显示当前时间
                    this.weatherResquest.weather = formatDateTime(new Date())
                    // 定时刷新时间
                    let _this = this
                    // 定时器
                    this.timer = setInterval(function () {
                        _this.weatherResquest.weather = formatDateTime(new Date()) // 修改数据date
                    }, 1000)
                })
                .catch(err => {
                    this.defaultShow = false
                    console.log(err);
                }); 
            })           
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
            width: 200px;
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
                box-sizing: border-box;
                padding-right: 20px;
                display: flex;
                justify-content:space-around;
                .title{
                    flex: 1;
                    text-align: left
                }
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
            .weather{
                float: right;
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