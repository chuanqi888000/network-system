
export default {
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
            treeSourceName: "",
            treeParentId: "",
            defaultProps: {
                children: "children",
                label: "text"
            },
            isRouterAlive: true,
            defaultExpandKeys: [],
            defaultCheckedKeys: [],
            treeList: [],
            labelPosition: "right",
            centerDialogVisible: false,
            pagesize: 5, //    每页的数据
            currentPage: 1,
            totalnum: 0,
            tableData: [],
        };
    },
    created() {
        console.log(this.info)
        this.tree();
    },
    watch: {
        'centerDialogVisible': function (newVal, oldValue) {
            console.log(newVal)
            if (newVal) {

            } else {
                this.addcheck = false
                this.dialogInfo = '编辑信息'
            }
        }
    },
    methods: {
        searchList() {
            this.seachLoading = true
            this.init()
        },
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(() => (this.isRouterAlive = true));
        },
        deleteId() {
            let _this = this
            console.log(this.multipleSelection)
            if (this.multipleSelection.length == 0) {
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
                    for (var i = 0; i < _this.multipleSelection.length; i++) {
                        if (i === 0) {
                            str = _this.multipleSelection[i].moduleId
                        } else {
                            str = str + ',' + _this.multipleSelection[i].moduleId
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
        refresh() {
            this.reload();
            this.tree();
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
        handleDialogClose() {
            console.log("关闭");
            // this.$refs.form.clearValidate();
            this.$refs.form.resetFields();
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
    }
}