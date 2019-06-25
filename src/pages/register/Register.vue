<template>
    <div class="login">
        <div class="login-head box-siz">
            <span>MINIVISION</span>
            <span @click="toindex">首页</span>
        </div>
        <div class="login-content box-siz">
            <div class="login-cover box-siz">          
                <div class="login-from box-siz">
                    <p class="login-title">欢迎注册</p>
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item label="" prop="user" >
                            <el-input type="text" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入登录账号"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入登录密码"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次输入登录密码"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="phone">
                            <el-input type="password" v-model="ruleForm.phone" autocomplete="off" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <div>
                            <el-checkbox @change="handleChange" v-model="checked" class="checkbtn"></el-checkbox>
                            <span class="agree">我同意<a>《浪潮云用户协议》</a><a>《云服务法律声明与隐私政策》</a></span>   
                        </div>
                        
                        <el-form-item>
                            <!-- <el-button ref="submit" :type="checked ? 'primary' : 'info'" disabled @click="submitForm('ruleForm')" class="submitbtn">同意协议并注册</el-button> -->
                            <el-button type="info" plain disabled class="submitbtn" v-show="!checked">同意协议并注册</el-button>
                            <el-button type="primary" @click="submitForm('ruleForm')" v-show="checked" class="submitbtn">同意协议并注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>

            </div>
        </div>
        <div class="login-footer box-siz">
            Copyright © 2018 版权所有：南京甄视智能科技有限公司 苏ICP备15029681号-1 增值电信业务经营许可证 苏B2-20180542
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checked:false,
            ruleForm: {
                user:'',
                pass: '',
                checkPass: '',
                phone:''
            },
            rules: {
                user:  [
                    { required: true, message: '请输入登录账号', trigger: 'blur' },
                    { min: 4, max: 8, message: '长度在 4 到 8个字符', trigger: ['blur', 'change']  }
                ],
                pass: [
                    { required: true, message: '请输入登录账号', trigger: 'blur' },
                    { min: 4, max: 8, message: '长度在 4 到 8个字符', trigger: ['blur', 'change']  }
                ],
                checkPass: [
                    { required: true, message: '请输入正确密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: ['blur', 'change']  }
                ],
                phone: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: ['blur', 'change']  }
                ]
            }

        }
    },
    mounted(){
        

    },
    methods:{
        toindex(){
            this.$router.push({path:'/'})
        },
        handleChange(value){
            console.log(value)
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
                justify-content: center;
                align-items: center;
                overflow: hidden;
                .login-from{
                    // animation: time 1s linear;
                    width: 720px;
                    height: 500px;
                    background: $white;
                    padding: 20px 180px;
                    color: $content;
                    text-align: center;
                    .login-title{
                        font-size: $font_size_20;
                        line-height: 40px;
                        margin-bottom: 40px;
                    }
                    .checkbtn{
                        font-size: $font_size_12!important;
                        margin-bottom: 20px;
                        float: left;
                    }
                    .agree{
                        float: left;
                        font-size: $font_size_12;
                        margin-left: -20px;
                        a{
                            color: #409EFF;
                            cursor: pointer;
                            &:hover{
                                text-decoration: underline;
                            }
                        }

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
    @keyframes time {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
</style>
