<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div class="block">
        <span class="demonstration">创建时间</span>
        <el-date-picker
          v-model="value2"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="left"
        ></el-date-picker>
        <input type="text" class="search" placeholder="请输入关键搜索字">

            <!-- 单选版// -->
        <!-- <el-tree-select
          style="width:100%"
          :data="treeData"
          v-model="value3"
          node-key="id"
        /> -->
        <!-- 多选版//
   <el-tree-select
      :data="treeData"
      v-model="value2"
      node-key="id"
      size="mini"
      :multiple="true"
    /> -->
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" icon="el-icon-star-off" class="floatbtn">权限</el-button>
        <el-button type="danger" icon="el-icon-delete" class="floatbtn">删除</el-button>
        <el-button type="primary" icon="el-icon-circle-plus" class="floatbtn" @click="newadd">新增</el-button>
      </div>
    </div>

    <div class="tab">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="155"></el-table-column>
        <el-table-column label="日期" width="220">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="角色名称" width="220"></el-table-column>
        <el-table-column prop="phone" label="角色中文名" width="220"></el-table-column>
        <el-table-column prop="sex" label="性别" width="120"></el-table-column>       
        <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
            size="mini"
            type="warning"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
      </el-table>
    </div>

    <el-pagination class="pagenumber"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 10, 20, 40]" 
      :page-size="pagesize"         
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>

    <el-dialog
            :visible.sync="centerDialogVisible"
            width="30%"
            @close="handleDialogClose"
            center>
              <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="角色" name="first">
                    <div class="first">
                        
                        <div class="head-from">
                            <el-form ref="form" :model="form" :label-position="labelPosition" label-width="80px" :rules="rules">
                                <el-form-item label="角色名称" class="check-form" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                
                                <el-form-item label="中文名称" class="check-form" prop="childname">
                                    <el-input v-model="form.childname"></el-input>
                                </el-form-item>
                                <el-form-item label="上级角色" class="check-form" prop="superior">
                                    <el-input v-model="form.superior"></el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="授权" name="second">
                    <div class="second">
                    <el-tree
                      :data="data"
                      node-key="id"
                      show-checkbox                      
                      :props="defaultProps"
                      @node-expand="treeexpand"
                      @node-collapse="treecollapse"
                      >
                      <!-- :default-expanded-keys="[2, 3]"
                      :default-checked-keys="[5]" -->
                      <span class="custom-tree-node" slot-scope="{ node, data }">
                          <span>
                              <i class="element-icons" :class="data.icon"></i>{{ node.label }}
                          </span>              
                      </span>
                    </el-tree>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {isvalidPhone} from "../../utils/index";
// import ElTreeSelect from "@/component/selectTree.vue"; // 树形选择器组件
export default {
  computed:{
    
  },
  components:{
    // ElTreeSelect
  },
  data() {

    var validPhone=(rule, value,callback)=>{
        if (!value){
            callback(new Error('请输入电话号码'))
        }else  if (!isvalidPhone(value)){
          callback(new Error('请输入正确的11位手机号码'))
        }else {
            callback()
        }
    }

    return {
        // selectTree的组件
        // treeData: [
        //   {
        //     id: 0,
        //     label: "运营系统",
        //     children: [
        //       {
        //         id: 10,
        //         label: "运营数据统计",
        //         children: [
        //           {
        //             id: 11,
        //             label: "平台综合统计"
        //           },
        //           {
        //             id: 12,
        //             label: "各游戏综合统计"
        //           },
        //           {
        //             id: 13,
        //             label: "各房间综合统计"
        //           },
        //           {
        //             id: 14,
        //             label: "留存综合数据统计"
        //           }
        //         ]
        //       },
        //       {
        //         id: 15,
        //         label: "在线数据统计",
        //         children: [
        //           {
        //             id: 16,
        //             label: "最高在线数据统计"
        //           },
        //           {
        //             id: 17,
        //             label: "同时在线统计"
        //           }
        //         ]
        //       }
        //     ]
        //   }
        // ],
      labelPosition:'right',
      rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          childname: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          superior:false
        },
        icon:'el-icon-wenjianjia',
        data: [{
          id: 1,
          label: '一级 1',
          icon:'el-icon-wenjianjia',
          children: [{
            id: 4,
            label: '二级 1-1',
            icon:'el-icon-wenjianjia',
            children: [{
              id: 9,
              label: '三级 1-1-1',
              icon:'el-icon-wenjian',
            }, {
              id: 10,
              label: '三级 1-1-2',
              icon:'el-icon-wenjian',
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          icon:'el-icon-wenjianjia',
          children: [{
            id: 5,
            label: '二级 2-1',
              icon:'el-icon-wenjian',
          }, {
            id: 6,
            label: '二级 2-2',
              icon:'el-icon-wenjian',
          }]
        }, {
          id: 3,
          icon:'el-icon-wenjianjia',
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1',
              icon:'el-icon-wenjian',
          }, {
            id: 8,
            label: '二级 3-2',
              icon:'el-icon-wenjian',
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label',
        },
      radio: '1',
      activeName: 'first',
      centerDialogVisible: false,
      form: {
          name: '',
          childname: '',
          superior: ''
      },
      pagesize:10,    //    每页的数据
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
        tableData: [{
          date: '2016-05-03',
          name: 'zhanas',
          sex:'男',
          phone:'张三',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: 'asdaa',
          sex:'女',
          phone:'李莎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: 'sdfsw',
          sex:'女',
          phone:'神翼',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: 'hsdsda',
          sex:'男',
          phone:'淮南',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: 'casea',
          sex:'男',
          phone:'蔡司',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: 'ereazx',
          sex:'男',
          phone:'平邑',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: 'gssdq',
          sex:'男',
          phone:'馆长',
          address: '上海市普陀区金沙江路 1518 弄'
        }],      
    };
  },
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  },
  methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleSelectionChange(val) {
        console.log(val)
        this.multipleSelection = val;
      },
      handleClick(tab, event) {
          console.log(tab, event);
      },
      handleEdit(index, row) {
        console.log(row);
        // this.$set(this.form,name,row.name)
        this.form.name = row.name;
        this.centerDialogVisible = true
      },
      newadd(){
        this.form.name = '';
        this.form.childname = '';
        this.form.superior = '';
        this.centerDialogVisible = true
      },
      treeexpand(data,node,value){
        data.icon = 'el-icon-wenjianjia1'
        // console.log(data)
        // console.log(node)
        // console.log(value)
      },
      treecollapse(data,node,value){
        console.log(343)
        data.icon = 'el-icon-wenjianjia';
      },
      handleDialogClose(){
        console.log('关闭')
        // this.$refs.form.clearValidate();
        this.$refs.form.resetFields();
      }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
    // position: relative;
  }
  &-text {
    font-size: 16px;
    line-height: 46px;
  }
}
.element-icons{
  color:#409EFF;
  margin-right: 5px;
}
.floatbtn{
  float: right;
  margin-top: 3px;
}
    .first,.second{
        height: 300px;
        border: 1px solid #E4E7ED;
        border-top: none;
        box-sizing: border-box;
        // padding: 20px;
    }
    .first{
        display: flex;
        justify-content: center;
    }
    .second{
        box-sizing: border-box;
        padding: 60px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: auto;
    }
    .head-sculpture{
        width: 195px;       
        // background: red;
        height: 100%;
        position: relative;
        .head-img{
            width: 100px;
            height: 100px;
            border: 1px solid #666;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        
    }
    .head-from{
        flex: 1;
        box-sizing: border-box;
        padding: 20px;
        padding-top: 60px;
    }
.pagenumber{
  // position: absolute;
  // bottom: 200px;
  // right: 20px;
  margin-top: 50px;
  float: right;
}
.search {
  height: 40px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  width: 200px;
  box-sizing: border-box;
  padding: 0 20px;
}
::placeholder {
  color: #dcdfe6;
}
.tab{
  margin-top: 20px;
}
</style>
