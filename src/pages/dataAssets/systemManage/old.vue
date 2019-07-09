<template>
  <div class="cover" v-if="isRouterAlive">
    <div class="business-tree">
      <el-tree
        :data="treeList"
        ref="treeForm"
        show-checkbox
        check-strictly
        node-key="id"
        @check-change="handleNodeClick"
        :default-checked-keys="defaultCheckedKeys"
        :props="defaultProps"
      ></el-tree>
      <span class="el-icon-icon-refresh refresh" @click="refresh"></span>
    </div>
    <div class="dashboard-container">
      <div class="dashboard-text">
        <div class="block">
          <input type="text" class="search" placeholder="请输入关键搜索字" v-model="searchValue">
          <el-button type="primary" icon="el-icon-search" @click="searchList"  :loading="seachLoading">搜索</el-button>
          <el-button type="danger" icon="el-icon-delete" class="floatbtn" @click="deleteId">删除</el-button>
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
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column label="创建日期" width="180" align="center">
            <template slot-scope="scope">{{time(scope.row.moduleDate)}}</template>
          </el-table-column>
          <el-table-column prop="moduleIcon" label="模块图标" align="center"></el-table-column>
          <el-table-column prop="moduleColor" label="模块颜色" align="center"></el-table-column>
          <el-table-column prop="moduleName" label="模块名称" align="center"></el-table-column>
          <el-table-column prop="moduleOrd" label="模块排序" align="center"></el-table-column>
          <el-table-column prop="moduleUrl" label="模块路由" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="warning" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <el-pagination
        class="pagenumber"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalnum"
      ></el-pagination>
    </div>
    <el-dialog :visible.sync="centerDialogVisible" width="30%" @close="handleDialogClose" center>
      <p class="dialog-title">{{dialogInfo}}</p>
      <div class="head-from">
        <el-form
          ref="form"
          :model="form"
          :label-position="labelPosition"
          label-width="80px"
          :rules="rules"
        >
          <el-form-item label="模块名称" class="check-form" prop="moduleName">
            <el-input v-model="form.moduleName" placeholder="请输入模块名称"></el-input>
          </el-form-item>         
          <el-form-item label="模块颜色" class="check-form" prop="moduleColor">
            <el-input v-model="form.moduleColor" placeholder="请输入模块颜色"></el-input>
          </el-form-item>
          <el-form-item label="模块图标" class="check-form" prop="moduleIcon">
            <el-input v-model="form.moduleIcon" placeholder="请输入模块图标"></el-input>
          </el-form-item>
          <el-form-item label="模块排序" class="check-form" prop="moduleOrd">
            <el-input v-model="form.moduleOrd" placeholder="请输入模块排序"></el-input>
          </el-form-item>
          <el-form-item label="模块路由" class="check-form" prop="moduleUrl">
            <el-input v-model="form.moduleUrl" placeholder="请输入模块路由"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit('form')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { isvalidPhone, formatDateTime } from "../../../utils/index";
import api from "../../../api/index";
import Qs from "qs";
import mixinContent from '../mixin/index'
export default {
  props: ['info'],
  mixins: [mixinContent],
  components: {},
  // created() {
  //   console.log(this.info)
  //   this.tree();
  // },
  // watch:{
  //     'centerDialogVisible':function(newVal,oldValue){
  //         console.log(newVal)
  //         if(newVal){
              
  //         }else{
  //             this.addcheck = false
  //             this.dialogInfo = '编辑信息'
  //         }
  //     }
  // },
  data() {
    // var validPhone = (rule, value, callback) => {
    //   if (!value) {
    //     callback(new Error("请输入电话号码"));
    //   } else if (!isvalidPhone(value)) {
    //     callback(new Error("请输入正确的11位手机号码"));
    //   } else {
    //     callback();
    //   }
    // };

    return {
      // dialogInfo: '编辑信息',
      // seachLoading: false,
      // searchValue: '',
      // addParentId: '0',
      // addcheck: false,
      // multipleSelection: [],
      isRouterAlive: true,
      // treeSourceName: "",
      // treeParentId: "",
      // defaultProps: {
      //   children: "children",
      //   label: "text"
      // },
      // defaultExpandKeys: [],
      // defaultCheckedKeys: [],
      // treeList: [],
      // labelPosition: "right",
      rules: {
        moduleName: [
          { required: true, message: "请输入模块名称", trigger: "blur" },
          { min: 1, max: 10, message: "长度不大于10个字符", trigger: "blur" }
        ],
        moduleColor: [
          { required: true, message: "请输入模块颜色", trigger: "blur" },
          { min: 0, max: 20, message: "长度不大于20个字符", trigger: "blur" }
        ],
        moduleIcon: [
          { required: true, message: "请输入模块图标", trigger: "blur" },
          { min: 0, max: 20, message: "长度不大于20个字符", trigger: "blur" }
        ],
        moduleOrd: [
          { required: true, message: "请输入模块排序", trigger: "blur" },
          { min: 0, max: 20, message: "长度不大于20个字符", trigger: "blur" }
        ],
        moduleUrl: [
          { required: true, message: "请输入模块路由", trigger: "blur" },
          { min: 0, max: 20, message: "长度不大于20个字符", trigger: "blur" }
        ],
      },
      form: {
        moduleName: "",
        moduleColor: "",
        moduleIcon: "",
        moduleOrd: "",
        moduleUrl: ""
      },
      // centerDialogVisible: false,
      // pagesize: 5, //    每页的数据
      // currentPage: 1,
      // totalnum: 0,
      // tableData: [],
      hideForm: {
        moduleId: "",
        moduleIdparent: ""
      }
    };
  },
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"]),
    time(value) {
      return function(value) {
        return formatDateTime(value);
      };
    }
  },
  methods: {
    // searchList(){
    //     this.seachLoading = true
    //     this.init()
    // },
    // deleteId() {
    //   let _this = this
    //   console.log(this.multipleSelection)
    //   if(this.multipleSelection.length==0){
    //       this.$message({
    //         type: "warning",
    //         message: "请选择删除信息!"
    //       });
    //       return
    //   }
    //   this.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //     center: true
    //   })
    //     .then(() => {
    //       let str = ''
    //       for(var i=0;i<_this.multipleSelection.length;i++){
    //           if(i === 0){
    //               str = _this.multipleSelection[i].moduleId
    //           }else{
    //               str = str +','+_this.multipleSelection[i].moduleId
    //           }
    //       }
    //       console.log(str)
    //       _this.deleteRes(str)
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消删除"
    //       });
    //     });
    // },
    // deleteRes(value){
    //   let op = {}
    //   op.moduleIds = value
    //   console.log(op)
    //   this.$http({
    //     url: this.info.delete,
    //     method: "get",
    //     params: op,
    //     transformRequest: [
    //       function(data) {
    //         data = Qs.stringify(data);
    //         return data;
    //       }
    //     ]
    //   })
    //     .then(response => {
    //         if(response.data.state.state === '1001'){
    //             this.$message({
    //                 type: "success",
    //                 message: "删除成功!"
    //             });
    //         }else{
    //             this.$message({
    //                 type: "warning",
    //                 message: "删除失败!"
    //             });
    //         }

    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
    // refresh() {
    //   this.reload();
    //   this.tree();
    // },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    },
    // handleNodeClick(data, checked, node) {
    //   if (checked === true) {
    //     this.checkedId = data.id;
    //     this.$refs.treeForm.setCheckedKeys([data.id]);
    //     console.log(data);
    //     this.currentPage = 1;
    //     this.addParentId = data.parentId
    //     this.treeSourceName = data.text;
    //     this.treeParentId = data.id;
    //     this.init();
    //   } else {
    //     if (this.checkedId == data.id) {
    //       this.$refs.treeForm.setCheckedKeys([data.id]);
    //     }
    //   }
    // },
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    //   this.currentPage = 1;
    //   this.pagesize = val;
    //   this.init();
    // },
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    //   this.currentPage = val;
    //   this.init();
    // },
    // handleSelectionChange(val) {
    //   console.log(val);
    //   this.multipleSelection = val;
    // },
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // },
    handleEdit(index, row) {
      console.log(row);
      // this.$set(this.form,name,row.name)
      this.form.moduleName = row.moduleName;
      this.form.moduleColor = row.moduleColor;
      this.form.moduleIcon = row.moduleIcon;
      this.form.moduleOrd = row.moduleOrd;
      this.form.moduleUrl = row.moduleUrl;
      this.hideForm.moduleId = row.moduleId;
      this.hideForm.moduleIdparent = row.moduleIdparent;
      // this.hideForm.createTime = row.createTime;
      this.centerDialogVisible = true;
    },
    newadd() {
      this.dialogInfo = '新增信息'
      this.addcheck = true;
      this.form.moduleName = "";
      this.form.moduleColor = "";
      this.form.moduleIcon = "";
      this.form.moduleOrd = "";
      this.form.moduleUrl = "";
      this.centerDialogVisible = true;
    },
    // treeexpand(data, node, value) {
    //   data.icon = "el-icon-wenjianjia1";
    //   // console.log(data)
    //   // console.log(node)
    //   // console.log(value)
    // },
    // treecollapse(data, node, value) {
    //   console.log(343);
    //   data.icon = "el-icon-wenjianjia";
    // },
    // handleDialogClose() {
    //   console.log("关闭");
    //   // this.$refs.form.clearValidate();
    //   this.$refs.form.resetFields();
    // },
    init() {
      let op = {};
      op.page = this.currentPage;
      op.size = this.pagesize;
      op[this.info.list.request.id] = this.treeParentId;
      op.sort = this.searchValue
      op[this.info.list.request.id] === "" && delete op[this.info.list.request.id]
      this.$http({
        url: this.info.list.url,
        method: "post",
        data: op,
        transformRequest: [
          function(data) {
            data = Qs.stringify(data);
            return data;
          }
        ]
      })
        .then(response => {
          this.seachLoading = false
          this.tableData = response.data.rows;
          this.totalnum = response.data.total;
        })
        .catch(error => {
          this.seachLoading = false
          console.log(error);
        });
    },
    tree() {
      this.currentPage = 1
      let op = {};
      op[this.info.tree.request.id] = "";
      this.$http({
        url: this.info.tree.url,
        method: "post",
        data: op,
        transformRequest: [
          function(data) {
            data = Qs.stringify(data);
            return data;
          }
        ]
      })
        .then(response => {
          this.treeList = JSON.parse(response.data.bean);
          console.log(this.treeList);
          // for(let i=0;i<this.treeList.length;i++){
          //   this.defaultExpandKeys.push(this.treeList[i].id)

          // }
          // this.defaultCheckedKeys = [this.treeList[0].id]
          this.treeSourceName = "";
          this.treeParentId = "";
          this.init();
        })
        .catch(error => {
          console.log(error);
        });
    },
    // submit(formName) {
    //   let _this = this;
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       _this.submitRes();
    //     } else {
    //       this.$message({
    //         message: "请填写相关内容！",
    //         type: "warning"
    //       });
    //       return false;
    //     }
    //   });
    // },
    submitRes() {
        if(!this.addcheck){
            var editinfo = { ...this.hideForm, ...this.form };
            console.log(editinfo);
            var url = this.info.update
        }else{
            var editinfo = {moduleId:this.addParentId, ...this.form };
            console.log(editinfo);
            var url = this.info.save
        }

      this.$http({
        url: url,
        method: "post",
        data: editinfo,
        transformRequest: [
          function(data) {
            data = Qs.stringify(data);
            return data;
          }
        ]
      })
        .then(response => {
          if (response.data.state.stateCode == "1001") {
            this.centerDialogVisible = false;
            this.$message({
              message: "编辑更新成功",
              type: "success"
            });
            this.init();
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.cover {
  overflow: hidden;
  // display: flex;
  // justify-content: center;
}
.refresh {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  cursor: pointer;
}
.business-tree {
  width: 20%;
  float: left;
  // background: rgba(216,218,220,1);
  border-right: 10px solid rgba(216, 218, 220, 1);
  height: 90vh;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 30px;
  position: relative;
}
.dashboard-container {
  // flex: 1;
  float: left;
  width:73.5%;
  background: #fff;
}
.dialog-title {
  width: 100%;
  text-align: center;
  font-size: 20px;
}
.unactive {
  color: #f56c6c;
}
.active {
  color: #409eff;
}
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
.element-icons {
  color: #409eff;
  margin-right: 5px;
}
.floatbtn {
  float: right;
  margin-top: 3px;
}
.head-sculpture {
  width: 195px;
  // background: red;
  height: 100%;
  position: relative;
  .head-img {
    width: 100px;
    height: 100px;
    border: 1px solid #666;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.head-from {
  flex: 1;
  box-sizing: border-box;
  padding: 10px;
  padding-top: 40px;
}
.pagenumber {
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
.tab {
  margin-top: 20px;
}
</style>
