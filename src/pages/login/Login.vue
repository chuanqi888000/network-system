<template>
    <div class="login">
        <div class="login-head box-siz">
            <span>MINIVISION</span>
            <span @click="toindex">首页</span>
        </div>
        <div class="login-content box-siz">
            <div class="login-cover box-siz">
                <div class="login-font box-siz">
                    <p class="font-title">云与企业深度融合，创造数字化未来</p>
                    <p class="font-content">高效的大数据分析和处理能力</p>
                    <p class="font-content">人工智能向全局智能持续演进</p>
                </div>                
                <div class="login-from box-siz">
                    <p class="login-title">登录</p>
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item label="" prop="pass" >
                            <el-input type="text" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入登录账号"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请输入登录密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')" class="submitbtn">提交</el-button>
                        </el-form-item>
                    </el-form>
                    <div class="otherbtn">
                        <span>忘记密码</span>
                        <span>免费注册</span>
                    </div>
                </div>

            </div>
        </div>
        <div class="login-footer box-siz">
            Copyright © 2018 版权所有：南京甄视智能科技有限公司 苏ICP备15029681号-1 增值电信业务经营许可证 苏B2-20180542
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters ,mapActions,mapMutations} from 'vuex'
export default {
    data(){
        return{

            ruleForm: {
            pass: '',
            checkPass: ''
            },
            rules: {
                pass: [
                    { required: true, message: '请输入登录账号', trigger: 'blur' },
                    { min: 4, max: 8, message: '长度在 4 到 8个字符', trigger: ['blur', 'change']  }
                ],
                checkPass: [
                    { required: true, message: '请输入登录密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: ['blur', 'change']  }
                ]
            }

        }
    },
    mounted(){
        
    // console.log(this.$store.getters.isLogin)
    console.log(this.$store.getters.bgColor)
    console.log(this.pos)
    console.log(this.isLogin)
    },
    computed:{
        pos(){
            return this.$store.getters.isLogin
        },
        ...mapGetters(['isLogin'])
    },
    methods:{
        toindex(){
            this.$router.push({path:'/'})
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
    }
}
</script>
<style lang="scss" scoped>
    @import '../../../static/assets/scss/base.scss';
    .login{
        width: 100%;
        height: 100vh;
        .login-head{
            color: $white;
            height: 6vh;
            width: 100%;
            background: $gray;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            span:hover{
                color: $blue;
                cursor: pointer;
            }
        } 
        .login-content{
            height: 88vh;
            width: 100%;
            color: $white;
            border-top: 1px solid $line;
            border-bottom: 1px solid $line;
            // background: $gray;
            background: url(../../assets/img/login-bg.jpg)no-repeat center;
            background-size: cover;
            .login-cover{
                width: 1200px;
                height: 100%;
                margin: 0 auto;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                overflow: hidden;
                .login-from{
                    width: 380px;
                    height: 380px;
                    margin-right: 0px;
                    animation: time2 .5s ease;
                    opacity: 1;
                    filter: alpha(opacity=1);
                    background: $white;
                    padding: 20px;
                    color: $content;
                    text-align: left;
                    .login-title{
                        font-size: $font_size_20;
                        line-height: 40px;
                        border-bottom: 1px solid $content;
                        margin-bottom: 40px;
                    }
                }
                .login-font{
                    flex: 1;
                    height: 100%;
                    color: $white;
                    // padding-top: 26vh;
                    overflow: hidden;
                    text-align: left;
                    .font-title{
                        margin-top: 26vh;
                        opacity: 1;
                        filter: alpha(opacity=1);
                        animation: time1 1s ease;
                        transform-origin: 50% 50%;
                        font-size: $font_size_30;
                        margin-bottom: 30px;
                    }
                    .font-content{
                        line-height: 40px;
                        opacity: 1;
                        filter: alpha(opacity=1);
                        animation: time1 1s ease;
                        transform-origin: 50% 50%;
                    }
                }
            }
        }
        .login-footer{
            color: $white;
            height: 6vh;
            width: 100%;
            background: $gray;
            line-height: 6vh;
            text-align: center;
        }       
    }
    .submitbtn{
        width: 100%!important;
    }
    .otherbtn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $content;
        font-size: $font_size_12;
        cursor: pointer;
        span:hover{
            color: $blue;
        }
    }

    @keyframes time1{
        0%{
            opacity: 0;
            filter: alpha(opacity=0);
            transform: scale(0);
        }
        100%{
            opacity: 1;
            filter: alpha(opacity=1);
            transform: scale(1);
        }
    }
    @keyframes time2{
        0%{
            margin-right: -380px;
            opacity: 0;
            filter: alpha(opacity=0);
        }
        100%{
            margin-right: 0px;
            opacity: 1;
            filter: alpha(opacity=1);
        }
    }
</style>
