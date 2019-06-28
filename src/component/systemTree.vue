<template>
  <div class="mv-main-menu-hide">
    <template v-for="value in menus">
      <el-submenu :index="value.resourceUrl ? value.resourceUrl : value.name" v-if="value.childResource.length ? value.childResource : ''" :key="value.id">
        <template slot="title">
          <i class="iconfont" :class="value.icon"></i>
          <span v-on:click="Link(value)" slot="title">{{value.name}}</span>
        </template>
        <Tree :menus="value.childResource"></Tree>
      </el-submenu>
      <el-menu-item :index="value.resourceUrl ? value.resourceUrl : value.name" v-else :key="value.id" v-on:click="Link(value)">
        <i class="iconfont" :class="value.icon"></i>
        <span slot="title">{{value.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
//   props: ['menus'],
  name: 'Tree',
  data(){
      return{
          menus : ''
      }
  },
  mounted(){

  },
  created(){
      console.log(this.$attrs.menus)
      this.menus=this.$attrs.menus
  },
  methods: {
    Link (value) {
      console.log('lll')
      console.log(value)
    }
  }
}
</script>