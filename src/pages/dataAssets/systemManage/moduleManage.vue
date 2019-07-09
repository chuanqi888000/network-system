<template>
    <Commonvue :info="info"></Commonvue>
</template>
<script>
import Commonvue from './commonSystem'
import api from '../../../api/index'
export default {
    data(){
        return{
            info:{
                list: {
                    request:{
                        id: 'moduleId'
                    },
                    response:{

                    },
                    url:api.resources.moduleList
                },
                update: api.resources.moduleUpdate,
                tree: {
                    request:{
                        id: 'moduleId'
                    },
                    url:api.resources.moduleTree
                },
                delete: api.resources.moduleDelete,
                save: api.resources.moduleSave
            }
        }
    },
    components: {
        Commonvue
    }
}
</script>
<style lang="scss" scoped>

</style>
