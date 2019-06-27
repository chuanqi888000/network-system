<template>
    <div>
        <el-container class="system-content">
            <el-aside width="200px" :class="isCollapse ? 'menu-hide' :''">
                <div class="mv-main-leftmenu">
                    <div class="mv-main-leftmenu-icon">
                    <i class="iconfont icon-tubiaozhizuomoban"></i>
                    </div>
                    <el-menu
                    :default-active='$route.path'
                    class="el-menu-vertical-demo"
                    :collapse="isCollapse"
                    :collapse-transition="true"
                    :unique-opened="true"
                    background-color="#2d2f3b"
                    text-color="#adb2c590"
                    active-text-color="#fff"
                    :router="routerDefault"
                    >
                    <Systemtree v-bind="$attrs"></Systemtree>
                    </el-menu>
                </div>
            </el-aside>
            <div class='menu-left'>
                <el-main id="mv-main-container">
                    <router-view></router-view>
                </el-main>
            </div>
        </el-container>
    </div>
</template>
<script>
import Systemtree from './systemTree'
export default {
    data(){
        return{
            routerDefault: true,
            isCollapse: false,
        }
    },
    components: {
        Systemtree
    }
}
</script>
<style lang="scss" scoped>
.system-content{
    height: 100%;
    text-align: left;
    display: flex;
    justify-content: flex-start;
}
.el-aside {
  background: #2d2f3b;
  display: block;
  overflow: auto;
  height: 100%;
}
.menu-left {
  background: #fff;
  flex: 1;
  height: 100%;
}
.menu-hide {
  width: auto !important;
  .mv-main-leftmenu-icon .iconfont {
    transform: rotate(90deg) !important;
    -webkit-transform: rotate(90deg) !important;
  }
}
.el-menu {
  border-right: none !important;
}
.el-menu--collapse .mv-main-menu-hide .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
.el-menu--collapse
  .mv-main-menu-hide
  .el-submenu__title
  .el-submenu__icon-arrow {
  display: none;
}
.mv-main-leftmenu {
  position: relative;
  /* background: #2d2f3b;
  overflow: hidden;
  overflow-y: auto; */
  .mv-main-leftmenu-icon {
    background: #2d2f3b;//#3f455b;
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: #ced4e2;
    transition: color 0.6s, background-color 0.6s;
    -webkit-transition: color 0.6s, background-color 0.6s;
    &:hover {
      cursor: pointer;
      background: #2d2f3b;
    }
    .iconfont {
      display: inline-block;
      width: 30px;
      transform: rotate(0);
      -webkit-transform: rotate(0);
      transition: transform 0.6s;
      -webkit-transition: -webkit-transform 0.6s;
    }
  }
}
.mv-main-header {
  background-color: #2d2f3b;
  height: 50px !important;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
}
.mv-dropdown-header {
  display: inline-block;
  line-height: 50px;
  color: #96979c;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-right: 10px;
    overflow: hidden;
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    vertical-align: middle;
  }
}
</style>
