<template>
    <div class="data-common">
        <Head></Head>
        <System class="box" :menus="menus"></System>
    </div>
</template>
<script>
import Head from '../../component/head'
import System from '../../component/system'
export default {
    data(){
        return{
            menus:[
                {
                    accCtrlStr: "",
                    checked: null,
                    childResource: [
                        {
                            accCtrlStr: "",
                            checked: null,
                            childResource: [],
                            createTime: null,
                            description: "",
                            enName: "",
                            icon: "icon-xiangmu1",
                            id: 1104,
                            jumpUrl: "",
                            levelNum: 2,
                            name: "位置管理",
                            parentId: 1108,
                            resourceOrder: 0,
                            resourceType: null,
                            resourceUrl: "/dataResources/main1",
                            showFlag: "1",
                            systemId: null,
                            updateTime: null,
                        }
                    ],
                    createTime: null,
                    description: "",
                    enName: "",
                    icon: "icon-xiangmu1",
                    id: 1108,
                    jumpUrl: "",
                    levelNum: 2,
                    name: "张三",
                    parentId: 1107,
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
                    icon: "icon-xiangmu1",
                    id: 1109,
                    jumpUrl: "",
                    levelNum: 2,
                    name: "李四",
                    parentId: 1107,
                    resourceOrder: 0,
                    resourceType: null,
                    resourceUrl: "/dataResources/main2",
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
