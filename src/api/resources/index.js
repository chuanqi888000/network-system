/**
 * 接口地址的管理
 */
const base = {
  login: '/login',
  iot: '/iot/app/user/init',
  menu: '/dataServer/module/menu', // 左侧菜单
  sourceList: '/dataServer/source/list', // 列表信息
  sourceUpdate: '/dataServer/source/update', // 列表信息更新
  sourceTree: '/dataServer/source/tree', // 分类列表
  sourceDelete: '/dataServer/source/delete', // 分类删除
  sourceSave: '/dataServer/source/save', // 新增

  moduleList: '/dataServer/module/list', // 列表信息
  moduleUpdate: '/dataServer/module/update', // 列表信息更新
  moduleTree: '/dataServer/module/menu', // 分类列表
  moduleDelete: '/dataServer/module/delete', // 分类删除
  moduleSave: '/dataServer/module/save' // 新增
}

export default base
