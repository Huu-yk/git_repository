<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb >
                <el-breadcrumb-item><i class="fa fa-paperclip"></i> 权限管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="permgr-handle-box" :inline="true">
            <el-button type="info" @click="dialogAddFormVisible = true">
                新增
            </el-button>
            <el-button type="success" class="refresh_btn" @click="refresh">
                刷新
            </el-button>
            <el-input  placeholder="搜索关键词" v-model="searchWord" icon="search" :on-icon-click="search" class="search-input"></el-input>
        </div>

        <el-table border :data="datalist" ref="multipleTable">
            <el-table-column prop="name" label="名称" width="150"></el-table-column>
            <el-table-column prop="label" label="标签" width="120" ></el-table-column>
            <el-table-column prop="url" label="前端路由" width="120" ></el-table-column>
            <el-table-column prop="url_backend" label="后端路由" width="160" ></el-table-column>
            <el-table-column prop="description" label="描述" width="130" ></el-table-column>
            <el-table-column prop="updated_at"  sortable label="更新时间" ></el-table-column>
            <el-table-column label="操作" width="140">
                <template scope="scope" :inline="true">
                    <el-button size="small" :plain= true type="info" @click="iseditPer(scope.row)">编辑</el-button>
                    <el-button size="small" :plain= true type="danger" @click="isdelPer(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="paging">
            <el-pagination class="pagination"
                           @current-change="handleCurrentChange"
                           :current-page.sync="currpage"
                           :page-size=pagesize
                           layout="total, prev, pager, next"
                           :total=total>
            </el-pagination>
        </div>

        <el-dialog
                title="添加权限"
                :visible.sync="dialogAddFormVisible"
                size="tiny">
            <el-form  label-width="80px">
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="名称">
                            <el-input style="width:200px" v-model="addPerInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="标签">
                            <el-input style="width:200px" v-model="addPerInfo.label"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="前端路由">
                            <el-input style="width:200px" v-model="addPerInfo.url"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="后端路由">
                            <el-input style="width:200px" v-model="addPerInfo.url_backend"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="描述">
                            <el-input style="width:200px"
                                      type="textarea"
                                      v-model="addPerInfo.description"
                                      :autosize="{ minRows: 2, maxRows: 4}">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogAddFormVisible = false">取 消</el-button>
                <el-button type="info" @click="addPer">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog
                title="编辑权限"
                :visible.sync="dialogEditFormVisible"
                size="tiny">
            <el-form :model="per_row" label-width="80px">
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="名称">
                            <el-input style="width:200px" v-model="per_row.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="标签">
                            <el-input style="width:200px" v-model="per_row.label"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="前端路由">
                            <el-input style="width:200px" v-model="per_row.url"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="后端路由">
                            <el-input style="width:200px" v-model="per_row.url_backend"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="描述">
                            <el-input style="width:200px"
                                      type="textarea"
                                      v-model="per_row.description"
                                      :autosize="{ minRows: 2, maxRows: 4}">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogEditFormVisible = false">取 消</el-button>
                <el-button type="info" @click="editPer">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>



<script>
    export default {
        data() {
            return {
                //权限列表
                perlist:[],

                //分页处理
                currpage:1,
                total:0,
                totaldata:[],
                pagesize:9,

                //搜索框
                searchWord:'',

                //模态框状态
                dialogAddFormVisible:false,
                dialogEditFormVisible:false,

                //添加权限数据
                addPerInfo:{
                    name:'',
                    label:'',
                    url:'',
                    url_backend:'',
                    description:''
                },

                //编辑权限
                per_row:[],

            }
        },
        created:function () {
            this.getAllPermissions()
        },
        computed:{
            //搜索框过滤器
            datalist(){
                const self = this;
                if(self.searchWord != ''){
                    self.total = 0
                    return self.totaldata.filter(function(permission){
                        if(permission.name.indexOf(self.searchWord) > -1 || permission.label.indexOf(self.searchWord) > -1){
                            self.total++
                            return permission
                        }
                    })
                }else{
                    self.total = self.totaldata.length
                    return self.perlist
                }
            }
        },
        methods:{
            getAllPermissions:function () {
              this.axios.get('/permgr').then(function (response) {
                  this.totaldata = response.data
                  this.total = this.totaldata.length
                  this.handleCurrentChange(1);
                  this.$message.success('获取成功！')
              }.bind(this)).catch(function (response) {
                  console.log(response)
                  this.$message.error('获取失败！')
              }.bind(this))
            },
            handleCurrentChange:function(val){
                this.currpage = val
                var start = (val-1)*this.pagesize
                var end = start + this.pagesize-1
                var templist = [];
                this.total = this.totaldata.length
                for(var i=0;i<this.total;i++){
                    if(i>=start && i<=end){
                        templist.push(this.totaldata[i])
                    }
                }
                this.perlist = templist
            },
            addPer:function () {
                //数据检查
                if(this.addPerInfo.name == null || this.addPerInfo.name == ''){
                    this.$message.warning('请填写名称！')
                    return
                }
                if(this.addPerInfo.label == null || this.addPerInfo.label == ''){
                    this.$message.warning('请填写标签！')
                    return
                }

                this.axios.post('/permgr/addPer',{
                    name:this.addPerInfo.name,
                    label:this.addPerInfo.label,
                    url:this.addPerInfo.url,
                    url_backend:this.addPerInfo.url_backend,
                    description:this.addPerInfo.description
                }).then(function (response) {
                    this.$message.success('添加成功！')
                }.bind(this)).catch(function (response) {
                    console.log(response)
                    this.$message.error('添加失败！')
                }.bind(this))
                this.dialogAddFormVisible = false
            },
            iseditPer:function (row) {
                this.per_row = row
                this.dialogEditFormVisible = true
            },
            editPer:function () {
                //数据检查
                if(this.per_row.name == null || this.per_row.name == ''){
                    this.$message.warning('请填写名称！')
                    return
                }
                if(this.per_row.label == null || this.per_row.label == ''){
                    this.$message.warning('请填写标签！')
                    return
                }

                this.axios.post('/permgr/editPer',{
                    id:this.per_row.id,
                    name:this.per_row.name,
                    label:this.per_row.label,
                    url:this.per_row.url,
                    url_backend:this.per_row.url_backend,
                    description:this.per_row.description
                }).then(function (response) {
                    this.$message.success('编辑成功！')
                }.bind(this)).catch(function (response) {
                    console.log(response)
                    this.$message.error('编辑失败！')
                }.bind(this))
                this.dialogEditFormVisible = false
            },
            isdelPer:function (id) {
                this.$confirm('确定删除该权限？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.axios.post('/permgr/delPer',{
                        per_id:id,
                    }).then(function (response) {
                        if(response.data == null || response.data == ''){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                        }else{
                            this.$message.error('操作失败！')
                        }
                    }.bind(this)).catch(function (response) {
                        console.log(response)
                        this.$message({
                            type: 'error',
                            message: '删除失败!'
                        })
                    }.bind(this))
                }).catch(() => {

                })
            },
            search:function () {

            },
            refresh:function(){
                this.currpage = 1
                this.total=0
                this.totaldata=[]
                this.getAllPermissions()
            }
        },
        watch:{

        },
        filters:{

        }
    }
</script>


<style>
    .permgr-handle-box{
        margin-bottom: 20px;
    }
    .refresh_btn{
        margin-left:0px !important;
    }
    .paging{
        float:right;
    }
    .search-input{
        float: right;
        width:200px;
    }
</style>