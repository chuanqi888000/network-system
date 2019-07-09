<template>
  <div class="mv-main-menu-hide">
    <template v-for="value in menus">
      <el-submenu :index="value.url ? value.url : value.text" v-if="value.children.length ? value.children : ''" :key="value.id">
        <template slot="title">
          <i class="iconfont" :class="value.iconCls"></i>
          <span v-on:click="Link(value)" slot="title">{{value.text}}</span>
        </template>
        <Tree :menus="value.children"></Tree>
      </el-submenu>
      <el-menu-item :index="value.url ? value.url : value.text" v-else :key="value.id" v-on:click="Link($event)">
        <i class="iconfont" :class="value.iconCls"></i>
        <span slot="title">{{value.text}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
// import link from '../utils/link'
export default {
//   props: ['menus'],
  name: 'Tree',
  data(){
      return{
          menus : ''
      }
  },
  mounted(){
    //   let _this = this
    //   link.$on("triggerChild",function(value){
    //       console.log(value)
    //       _this.menus=value
    //   })
  },
  created(){
      console.log(this.$attrs.menus)
      this.menus=this.$attrs.menus
  },
  watch:{
      '$attrs.menus':function(){
          this.menus=this.$attrs.menus
      }
  },
  methods: {
    Link (value) {
      if(value.$el){
        console.log(value.$el)
        if(value.$el.className.indexOf('is-active')>-1){
          console.log(1)
        }else{
          console.log(2)
        }
      }
    }
  }
}
</script>
<style>
.el-menu-item.is-active {
    background-color: #000 !important;
 }
</style>
