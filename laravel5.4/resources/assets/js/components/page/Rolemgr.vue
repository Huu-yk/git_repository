<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb >
                <el-breadcrumb-item><i class="fa fa-user-circle-o"></i> 角色管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="rolemgr-handle-box" :inline="true">
            <el-button type="info" @click="dialogAddFormVisible = true">
                新增
            </el-button>
            <el-button type="success" class="refresh_btn" @click="refresh">
                刷新
            </el-button>
        </div>

        <el-table :data="datalist" border >
            <el-table-column prop="name" label="名称" width="120"></el-table-column>
            <el-table-column prop="label" label="标签" width="130" ></el-table-column>
            <el-table-column prop="this_status" label="状态" width="120" ></el-table-column>
            <el-table-column prop="description" width="120" label="描述"></el-table-column>
            <el-table-column prop="updated_at" sortable label="更新时间" ></el-table-column>
            <el-table-column label="操作" width="280">
                <template scope="scope" :inline="true">
                    <el-button size="small" :plain= true type="info" @click="showPermission(scope.row.id)">权限</el-button>
                    <el-button size="small" :plain= true type="success" @click="iseditRole(scope.row)">编辑</el-button>
                    <el-button size="small" :plain= true type="warning" v-if="scope.row.this_status == '启用'" @click="isuseRole(scope.row.id,0)">停用</el-button>
                    <el-button size="small" :plain= true type="warning" v-if="scope.row.this_status == '停用'" @click="isuseRole(scope.row.id,1)">启用</el-button>
                    <el-button size="small" :plain= true type="danger" @click="isdelRole(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
                title="添加角色"
                :visible.sync="dialogAddFormVisible"
                size="tiny">
            <el-form  label-width="80px">
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="名称">
                            <el-input style="width:200px" v-model="addRoleInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="标签">
                            <el-input style="width:200px" v-model="addRoleInfo.label"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="描述">
                            <el-input style="width:200px"
                                      type="textarea"
                                      v-model="addRoleInfo.description"
                                      :autosize="{ minRows: 2, maxRows: 4}">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogAddFormVisible = false">取 消</el-button>
                <el-button type="danger" @click="addRole">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog
                title="编辑角色"
                :visible.sync="dialogEditFormVisible"
                size="tiny">
            <el-form :model="role_row" label-width="80px" id="role-list">
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="名称">
                            <el-input style="width:200px" v-model="role_row.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="标签">
                            <el-input style="width:200px" v-model="role_row.label"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="描述">
                            <el-input style="width:200px"
                                      type="textarea"
                                      v-model="role_row.description"
                                      :autosize="{ minRows: 2, maxRows: 4}">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogEditFormVisible = false">取 消</el-button>
                <el-button type="danger" @click="editRole">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog
                title="提示"
                :visible.sync="dialogUseRoleVisible"
                size="tiny">
            <span v-if="use_status == 0">确定停用该角色？</span>
            <span v-if="use_status == 1">确定启用该角色？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogUseRoleVisible = false">取 消</el-button>
                <el-button type="danger" @click="useRole">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog
                title="提示"
                :visible.sync="dialogDeleteRoleVisible"
                size="tiny">
            <span>确定删除该角色？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogDeleteRoleVisible = false">取 消</el-button>
                <el-button type="danger" @click="delRole">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog
                title="角色权限"
                :visible.sync="dialogPermissionVisible"
                size="small"
                >
            <div class="perlist-handle-box" :inline="true">
                <el-button :plain=true type="info" @click="isnothavelist">
                    添加
                </el-button>
                <el-button :plain=true type="success" class="refresh_btn" @click="perlist_refersh">
                    刷新
                </el-button>
            </div>
            <div>
                <el-table :data="perlist" border>
                    <el-table-column prop="label" label="标签" width="120"></el-table-column>
                    <el-table-column prop="name" label="名称" ></el-table-column>
                    <el-table-column prop="url_backend" label="后端路由" ></el-table-column>
                    <el-table-column label="操作" width="100">
                        <template scope="scope">
                            <el-button size="small" type="danger" @click="isremovePer(scope.row.id)">移除</el-button>
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
            </div>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogPermissionVisible = false">取 消</el-button>
                <el-button :plain="true" type="info" @click="dialogPermissionVisible = false">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog
                title="提示"
                :visible.sync="dialogDeleteRoleVisible"
                size="tiny">
            <span>确定删除该角色？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogDeleteRoleVisible = false">取 消</el-button>
                <el-button type="danger" @click="delRole">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog
                title="添加权限"
                :visible.sync="dialogNotHaveVisible"
                size="tiny">
            <div>
                <el-table :data="nothavelist" border ref="multipleTable" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column prop='label' label="标签" width="120"></el-table-column>
                    <el-table-column prop='name' label="名称" ></el-table-column>
                </el-table>

                <div class="paging">
                    <el-pagination class="pagination"
                                   @current-change="handleCurrentChange2"
                                   :current-page.sync="currpage2"
                                   :page-size=pagesize
                                   layout="total, prev, pager, next"
                                   :total=total2>
                    </el-pagination>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogNotHaveVisible = false">取 消</el-button>
                <el-button :plain="true" type="warning" @click="appendPermission">添 加</el-button>
            </span>
        </el-dialog>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                //角色列表数据
                rolelist:[],

                //角色列表总条数
                total:'',

                //状态位
                status:'',

                //多行选择
                multipleSelection:[],

                //单个角色数据
                role_row:[],
                role_row_id:'',

                //添加用户数据
                addRoleInfo:{
                    name:'',
                    label:'',
                    description:''
                },

                //模态框状态
                dialogAddFormVisible:false,
                dialogUseRoleVisible:false,
                dialogDeleteRoleVisible:false,
                dialogEditFormVisible:false,
                dialogPermissionVisible:false,
                dialogNotHaveVisible:false,

                // 启用/停用/删除
                roleid:'',
                use_status:'',

                //分页处理
                currpage:1,
                currpage2:1,
                total:0,
                total2:0,
                totaldata:[],
                totaldata2:[],
                pagesize:5,
                perlist:[],
                nothavelist:[],

                //移除权限
                removePerid:'',
            }
        },
        created:function () {

            this.getAllRoles()
        },
        mounted:function(){

        },
        computed:{
            datalist(){
                const self = this
                return self.rolelist
            }
        },
        methods:{
            getAllRoles:function () {
                this.axios.get('/rolemgr').then(function (response) {
                    var temp = response.data.roles
                    //数据处理
                    for(var i = 0;i<temp.length;i++){
                        if(temp[i].this_status == 1){
                            temp[i].this_status = "启用"
                        }else{
                            temp[i].this_status = "停用"
                        }
                    }
                    this.rolelist = temp
                    this.total = response.data.total
                    this.$message.success('获取成功！')
                }.bind(this)).catch(function (response) {
                    this.$message.error('获取失败！')
                    this.$message.error(response)
                }.bind(this));
            },
            addRole:function () {
                //数据检查
                if(this.addRoleInfo.name == ''){
                    this.$message.error('请填写名称！')
                    return
                }
                if(this.addRoleInfo.label == ''){
                    this.$message.error('请填写标签！')
                    return
                }
                if(this.addRoleInfo.description == ''){
                    this.$message.error('请填写描述！')
                    return
                }


                this.axios.post('/rolemgr/addRole',{
                    'name':this.addRoleInfo.name,
                    'label':this.addRoleInfo.label,
                    'description':this.addRoleInfo.description
                }).then(function (response) {
                    this.$message.success('添加成功！')
                    this.addRoleInfo.name = ''
                    this.addRoleInfo.label = ''
                    this.addRoleInfo.description = ''
                }.bind(this))
                    .catch(function (response) {
                        console.log(response)
                        this.$message.error('添加失败！')
                    }.bind(this))

                this.dialogAddFormVisible = false
            },
            isuseRole:function (id,status) {
                this.roleid = id
                this.use_status = status
                this.dialogUseRoleVisible = true
            },
            useRole:function () {
                this.axios.post('/rolemgr/useRole',{
                    roleid:this.roleid,
                    set_status:this.use_status
                }).then(function (response) {
                    this.$message.success('操作成功！')
                    this.use_status = ''
                    this.roleid = ''
                    this.refresh()
                  }.bind(this))
                  .catch(function (response) {
                      console.log(response)
                      this.$message.error('操作失败！')
                  }.bind(this))

                this.dialogUseRoleVisible = false
            },
            iseditRole:function(row){
                this.role_row = row
                this.dialogEditFormVisible = true
            },
            editRole:function(){
                //数据检查
                if(this.role_row.name == ''){
                    this.$message.error('请填写名称！')
                    return
                }
                if(this.role_row.label == ''){
                    this.$message.error('请填写标签！')
                    return
                }
                if(this.role_row.description == ''){
                    this.$message.error('请填写描述！')
                    return
                }

                this.axios.post('/rolemgr/editRole',{
                    'id':this.role_row.id,
                    'name':this.role_row.name,
                    'label':this.role_row.label,
                    'description':this.role_row.description
                }).then(function (response) {
                    this.$message.success('编辑成功！')
                }.bind(this))
                    .catch(function (response) {
                        console.log(response)
                        this.$message.error('编辑失败！')
                    }.bind(this))

                this.dialogEditFormVisible = false
            },
            isdelRole:function (id) {
                this.roleid = id
                this.dialogDeleteRoleVisible = true
            },
            delRole:function(){
                this.axios.post('/rolemgr/delRole',{
                    roleid:this.roleid
                }).then(function (response) {
                    this.$message.success('操作成功！')
                    this.roleid = ''
                    this.refresh()
                }.bind(this))
                    .catch(function (response) {
                        console.log(response)
                        this.$message.error('操作失败！')
                    }.bind(this))

                this.dialogDeleteRoleVisible = false
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
            handleCurrentChange2:function(val){
                this.currpage2 = val
                var start = (val-1)*this.pagesize
                var end = start + this.pagesize-1
                var templist = [];
                this.total2 = this.totaldata2.length
                for(var i=0;i<this.total2;i++){
                    if(i>=start && i<=end){
                        templist.push(this.totaldata2[i])
                    }
                }
                this.nothavelist = templist
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            appendPermission:function () {
                var len = this.multipleSelection.length
                if(len != 0){
                    var requestUrl = '/rolemgr/appendPer'
                    this.axios.post(requestUrl,{
                        role_id:this.role_row_id,
                        multiple:this.multipleSelection
                    }).then(function (response) {
                        console.log(response)
                        this.$message.success('添加成功！')
                        this.dialogNotHaveVisible = false
                        this.perlist_refersh()
                    }.bind(this)).catch(function (response) {
                        this.$message.error('添加失败！')
                    }.bind(this))
                }else{
                    this.$message.warning('请选择要添加的权限！')
                }
            },
            showPermission:function (id) {
                this.role_row_id = id
                this.axios.post('/permgr/getPer',{
                    role_id:id
                }).then(function (response) {
                    if(response.data != 0){
                        this.totaldata = response.data
                        this.total = this.totaldata.length
                        this.handleCurrentChange(1);
                        this.$message.success('获取成功！')
                        this.dialogPermissionVisible = true
                    }else{
                        this.dialogPermissionVisible = true
                        this.totaldata = []
                        this.total = 0
                        this.handleCurrentChange(1);
                        this.$message.info('该角色权限列表为空！')
                    }
                }.bind(this)).catch(function (response) {
                    console.log(response)
                    this.$message.error('获取失败！')
                }.bind(this))
            },
            isnothavelist:function () {
                this.axios.post('/permgr/getNothave',{
                    role_id: this.role_row_id
                }).then(function (response) {
                    if(response.data != ""){
                        this.totaldata2 = response.data
                        this.total2 = this.totaldata2.length
                        this.handleCurrentChange2(1);
                        this.$message.success('获取成功！')
                        this.dialogNotHaveVisible = true
                    }else{
                        this.$message.info('该用户已有所有权限！')
                    }
                }.bind(this)).catch(function (response) {
                    console.log(response)
                    this.$message.error('获取失败！')
                }.bind(this))
            },
            isremovePer:function (id) {
                this.removePerid = id
                this.$confirm('确定移除该权限？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.axios.post('/rolemgr/removePer',{
                        per_id:id,
                        role_id:this.role_row_id
                    }).then(function (response) {
                        this.$message({
                            type: 'success',
                            message: '移除成功!'
                        })
                        this.perlist_refersh()
                    }.bind(this)).catch(function (response) {
                        console.log(response)
                        this.$message({
                            type: 'error',
                            message: '移除失败!'
                        })
                    }.bind(this))
                }).catch(() => {

                })
            },
            refresh:function () {
                this.getAllRoles()
            },
            perlist_refersh:function () {
                this.showPermission(this.role_row_id)
            },
        },
        watch:{

        },
        filters:{

        }
    }
</script>

<style>
    .perlist-handle-box{
        margin-bottom: 20px;
    }
    .rolemgr-handle-box{
        margin-bottom: 20px;
    }
    .refresh_btn{
        margin-left:0px !important;
    }
</style>