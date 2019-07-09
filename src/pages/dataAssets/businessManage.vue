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
      <div class="refresh">
        <el-tooltip class="item" effect="dark" content="树结构恢复默认" placement="right">
          <span class="el-icon-icon-refresh" @click="refresh"></span>
        </el-tooltip>        
      </div>
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
            <template slot-scope="scope">{{time(scope.row.createTime)}}</template>
          </el-table-column>
          <el-table-column prop="sourceName" label="分类名称" width="220" align="center"></el-table-column>
          <el-table-column label="分类状态" width="150" align="center">
            <span
              slot-scope="scope"
              :class="scope.row.sourceState === 'A' ? 'active' : 'unactive'"
            >{{type(scope.row.sourceState)}}</span>
          </el-table-column>
          <el-table-column prop="sourceDesc" label="分类描述" show-overflow-tooltip align="center"></el-table-column>
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
          <el-form-item label="分类名称" class="check-form" prop="sourceName">
            <el-input v-model="form.sourceName" placeholder="请输入分类名称"></el-input>
          </el-form-item>
          <!-- <el-form-item label="分类状态" class="check-form" prop="type">
                    <el-input v-model="form.type"></el-input>
          </el-form-item>-->
          <el-form-item label="分类状态" class="check-form" prop="sourceState">
            <el-select v-model="form.sourceState" placeholder="请选择分类类型" style="width:100%;">
              <el-option
                v-for="item in typelist"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="分类描述" class="check-form" prop="sourceDesc">
            <el-input v-model="form.sourceDesc" placeholder="请输入分类描述"></el-input>
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
import { isvalidPhone, formatDateTime } from "../../utils/index";
import api from "../../api/index";
import Qs from "qs";
// import ElTreeSelect from "@/component/selectTree.vue"; // 树形选择器组件
export default {
  components: {},
  created() {
    // this.init()
    this.tree();
  },
  watch:{
      'centerDialogVisible':function(newVal,oldValue){
          console.log(newVal)
          if(newVal){
              
          }else{
              this.addcheck = false
              this.dialogInfo = '编辑信息'
          }
      }
  },
  data() {
    var validPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入电话号码"));
      } else if (!isvalidPhone(value)) {
        callback(new Error("请输入正确的11位手机号码"));
      } else {
        callback();
      }
    };

    return {
      dialogInfo: '编辑信息',
      seachLoading: false,
      searchValue: '',
      addParentId: '0',
      addcheck: false,
      multipleSelection: [],
      isRouterAlive: true,
      treeSourceName: "",
      treeParentId: "",
      defaultProps: {
        children: "children",
        label: "text"
      },
      defaultExpandKeys: [],
      defaultCheckedKeys: [],
      treeList: [],
      labelPosition: "right",
      rules: {
        sourceName: [
          { required: true, message: "请输入分类名称", trigger: "blur" },
          { min: 1, max: 10, message: "长度不大于10个字符", trigger: "blur" }
        ],
        sourceState: [
          { required: true, message: "请选择分类类型", trigger: "blur" }
        ],
        sourceDesc: [
          { required: true, message: "请输入分类描述", trigger: "blur" },
          { min: 0, max: 20, message: "长度不大于20个字符", trigger: "blur" }
        ]
      },
      radio: "1",
      centerDialogVisible: false,
      form: {
        sourceName: "",
        sourceState: "",
        sourceDesc: ""
      },
      typelist: [
        {
          label: "有效",
          value: "A"
        },
        {
          label: "无效",
          value: "X"
        }
      ],
      pagesize: 5, //    每页的数据
      currentPage: 1,
      totalnum: 0,
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      tableData: [],
      hideForm: {
        sourceId: "",
        sourceParentId: ""
        // createTime: ''
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
    },
    type(value) {
      return function(value) {
        let data;
        return (data = value === "A" ? "有效" : "无效");
      };
    }
  },
  methods: {
    searchList(){
        this.seachLoading = true
        this.init()
    },
    deleteId() {
      let _this = this
      console.log(this.multipleSelection)
      if(this.multipleSelection.length==0){
          this.$message({
            type: "warning",
            message: "请选择删除信息!"
          });
          return
      }
      this.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          let str = ''
          for(var i=0;i<_this.multipleSelection.length;i++){
              if(i === 0){
                  str = _this.multipleSelection[i].sourceId
              }else{
                  str = str +','+_this.multipleSelection[i].sourceId
              }
          }
          console.log(str)
          _this.deleteRes(str)
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    deleteRes(value){
      let op = {}
      op.sourceIds = value
      console.log(op)
      this.$http({
        url: api.resources.sourceDelete,
        method: "get",
        params: op,
        transformRequest: [
          function(data) {
            data = Qs.stringify(data);
            return data;
          }
        ]
      })
        .then(response => {
            if(response.data.state.state === '1001'){
                this.$message({
                    type: "success",
                    message: "删除成功!"
                });
            }else{
                this.$message({
                    type: "warning",
                    message: "删除失败!"
                });
            }

        })
        .catch(error => {
          console.log(error);
        });
    },
    refresh() {
      this.reload();
      this.tree();
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    },
    handleNodeClick(data, checked, node) {
      if (checked === true) {
        this.checkedId = data.id;
        this.$refs.treeForm.setCheckedKeys([data.id]);
        console.log(data);
        this.currentPage = 1;
        this.addParentId = data.parentId
        this.treeSourceName = data.text;
        this.treeParentId = data.id;
        this.init();
      } else {
        if (this.checkedId == data.id) {
          this.$refs.treeForm.setCheckedKeys([data.id]);
        }
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pagesize = val;
      this.init();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.init();
    },
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleEdit(index, row) {
      console.log(row);
      // this.$set(this.form,name,row.name)
      this.form.sourceName = row.sourceName;
      this.form.sourceState = row.sourceState;
      this.form.sourceDesc = row.sourceDesc;
      this.hideForm.sourceId = row.sourceId;
      this.hideForm.sourceParentId = row.sourceParentId;
      // this.hideForm.createTime = row.createTime;
      this.centerDialogVisible = true;
    },
    newadd() {
      this.addcheck = true;
      this.dialogInfo = '新增信息'
      this.form.sourceName = "";
      this.form.sourceState = "";
      this.form.sourceDesc = "";
      this.centerDialogVisible = true;
    },
    treeexpand(data, node, value) {
      data.icon = "el-icon-wenjianjia1";
      // console.log(data)
      // console.log(node)
      // console.log(value)
    },
    treecollapse(data, node, value) {
      console.log(343);
      data.icon = "el-icon-wenjianjia";
    },
    handleDialogClose() {
      console.log("关闭");
      // this.$refs.form.clearValidate();
      this.$refs.form.resetFields();
    },
    init() {
      let op = {};
      op.page = this.currentPage;
      op.size = this.pagesize;
    //   op.sourceName = this.treeSourceName;
      op.parentId = this.treeParentId;
      op.sort = this.searchValue
    //   op.sourceName === "" && delete op.sourceName;
      op.parentId === "" && delete op.parentId;
      this.$http({
        url: api.resources.sourceList,
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
      op.sourceId = "";
      this.$http({
        url: api.resources.sourceTree,
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
    submit(formName) {
      let _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          _this.submitRes();
        } else {
          this.$message({
            message: "请填写相关内容！",
            type: "warning"
          });
          return false;
        }
      });
    },
    submitRes() {
        if(!this.addcheck){
            var editinfo = { ...this.hideForm, ...this.form };
            console.log(editinfo);
            var url = api.resources.sourceUpdate
        }else{
            var editinfo = {sourceParentId:this.addParentId, ...this.form };
            console.log(editinfo);
            var url = api.resources.sourceSave
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
//   display: flex;
//   justify-content: center;
}
.refresh {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  cursor: pointer;
}
.business-tree {
//   width: 300px;
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
  width:72%;
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
