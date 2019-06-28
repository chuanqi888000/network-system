<template>
    <div class="data-common">
        <Head></Head>
        <System class="box" :menus="menus" :icon="icon"></System>
    </div>
</template>
<script>
import Head from '../../component/headCommon'
import System from '../../component/system'
export default {
    data(){
        return{
            icon: 'el-icon-jichushuju-zichanbaobiao',
            menus:[
                {
                    accCtrlStr: "",
                    checked: null,
                    childResource: [{
                        accCtrlStr: "",
                        checked: null,
                        childResource: [],
                        createTime: null,
                        description: "",
                        enName: "用户管理",
                        icon: "el-icon-jiaoseguanli",
                        id: 1202,
                        jumpUrl: "",
                        levelNum: 2,
                        name: "用户管理",
                        parentId: 1108,
                        resourceOrder: 0,
                        resourceType: null,
                        resourceUrl: "/dataResources/userManage",
                        showFlag: "1",
                        systemId: null,
                        updateTime: null,
                    }],
                    createTime: null,
                    description: "",
                    enName: "",
                    icon: "el-icon-Management",
                    id: 1108,
                    jumpUrl: "",
                    levelNum: 2,
                    name: "用户管理",
                    parentId: 1101,
                    resourceOrder: 0,
                    resourceType: null,
                    resourceUrl: "",
                    showFlag: "1",
                    systemId: null,
                    updateTime: null,
                },
                {
                    accCtrlStr: "",
                    checked: null,
                    childResource: [],
                    createTime: null,
                    description: "",
                    enName: "",
                    icon: "el-icon-jiaoseguanli",
                    id: 1102,
                    jumpUrl: "",
                    levelNum: 2,
                    name: "角色管理",
                    parentId: 1107,
                    resourceOrder: 0,
                    resourceType: null,
                    resourceUrl: "/dataResources/roleManage",
                    showFlag: "1",
                    systemId: null,
                    updateTime: null,
                }
            ]
        }
    },
    components: {
        Head,
        System
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
